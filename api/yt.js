const express = require('express');
const axios = require('axios');
const app = express();

app.get('/dl', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing url parameter',
    });
  }

  try {
    const response = await axios.post(
      'https://ytdown.io/proxy.php',
      new URLSearchParams({
        'url': url  // Pass the actual URL here
      }),
      {
        headers: {
          'authority': 'ytdown.io',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'cookie': 'PHPSESSID=akuif4mjruiqk983ms4k1k6uss; _ga=GA1.1.736595603.1761198197; _ga_2K69M9RN1B=GS2.1.s1761198197$o1$g0$t1761198293$j60$l0$h0',
          'origin': 'https://ytdown.io',
          'referer': 'https://ytdown.io/en2/',
          'sec-ch-ua': '"Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (Linux; Android 11; RMX3261) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
          'x-requested-with': 'XMLHttpRequest'
        }
      }
    );

    // Extract media items from the API response
    const mediaItems = response.data.api.mediaItems;

    // Find the HD (720p) and SD (480p) video URLs
    const hdVideoUrl = mediaItems.find(item => item.mediaQuality === 'HD')?.mediaUrl;
    const sdVideoUrl = mediaItems.find(item => item.mediaQuality === 'SD')?.mediaUrl;

    if (hdVideoUrl && sdVideoUrl) {
      res.json({
        Status: 'success',
        hd: hdVideoUrl,  // 720p video URL
        sd: sdVideoUrl,  // 480p video URL
      });
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Failed to fetch video URLs',
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
});

app.listen(3000, () => {
  console.log("API is running on port 3000");
});
