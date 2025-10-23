const express = require('express');
const axios = require('axios');
const app = express();

app.get('/dl', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ status: 'error', message: 'Missing url parameter' });
  }

  try {
    // Send POST request to ytdown.io
    const response = await axios.post(
      'https://ytdown.io/proxy.php',
      new URLSearchParams({ url }), // use the real URL value
      {
        headers: {
          'authority': 'ytdown.io',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'origin': 'https://ytdown.io',
          'referer': 'https://ytdown.io/en2/',
          'user-agent': 'Mozilla/5.0 (Linux; Android 11; RMX3261) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
          'x-requested-with': 'XMLHttpRequest'
        }
      }
    );

    // The response from ytdown.io usually contains several URLs or formats.
    // Let's assume it contains something like: { data: { url: 'https://...' } }
    // You can adjust this line based on the actual structure of response.data
    const downloadUrl = response.data?.url || response.data?.cdnUrl || null;

    if (!downloadUrl) {
      return res.status(404).json({ status: 'error', message: 'Download URL not found', raw: response.data });
    }

    // Return only the URL
    res.json({ status: 'success', url: downloadUrl });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: 'error', message: 'Failed to fetch from ytdown.io' });
  }
});

app.listen(3000, () => {
  console.log("API is running on port 3000");
});
