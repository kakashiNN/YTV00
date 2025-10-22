const express = require('express');
const axios = require('axios');
const app = express();

app.get('/dl', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ status: 'error', message: 'Missing url parameter' });
  }

  try {
         import axios from 'axios';

const response = await axios.post(
  'https://m.youtube.com/youtubei/v1/player',
  {
    'context': {
      'client': {
        'hl': 'en',
        'gl': 'BD',
        'remoteHost': '103.166.230.70',
        'deviceMake': 'Realme',
        'deviceModel': 'RMX3261',
        'visitorData': 'CgtYajdyM2JrN1NEQSj0h-THBjIKCgJCRBIEGgAgDw%3D%3D',
        'userAgent': 'Mozilla/5.0 (Linux; Android 11; RMX3261) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36,gzip(gfe)',
        'clientName': 'MWEB',
        'clientVersion': '2.20251021.01.00-canary_control_2.20251021.07.00',
        'osName': 'Android',
        'osVersion': '11',
        'originalUrl': 'https://m.youtube.com/watch?v=jKqCewZvECA&list=RDjKqCewZvECA&start_radio=1&pp=oAcB',
        'playerType': 'UNIPLAYER',
        'screenPixelDensity': 2,
        'platform': 'MOBILE',
        'clientFormFactor': 'SMALL_FORM_FACTOR',
        'configInfo': {
          'appInstallData': 'CPSH5McGEIzpzxwQu9nOHBCJsM4cELj2zxwQgc3OHBCIh7AFEIfUrwUQkPTPHBDFw88cEPr_zxwQr4bPHBCV988cEN2zzxwQrtbPHBDaitAcEIKPzxwQ3rzOHBDRsYATEK21gBMQ_LLOHBC45M4cEObgzxwQ8MzPHBDBj9AcENPhrwUQnNfPHBDhjtAcENnBsQUQjcywBRCEkdAcEParsAUQiYPQHBDPjdAcEOeV0BwQ0ODPHBDOkdAcEIyS0BwQzOvPHBDjuM8cEKL7zxwQgZTQHBDy6M8cEMzfrgUQvZmwBRDg6c8cEKOZ0BwQmY2xBRD5h9AcEMj3zxwQmZixBRC9tq4FELfJzxwQi_fPHBCU_rAFEKT1rgUQ4YzQHBC52c4cEJuI0BwQ4pfQHBCsp7EFEJSD0BwQt-TPHBCbkdAcEJTyzxwQwOCuBRDe6c8cEMn3rwUQh6zOHBCVsYATEJbbzxwQvoqwBRC36v4SENr3zhwQ54vQHBCd0LAFEPf8zxwQqLKAExC0hdAcEMeX0BwqTENBTVNOUlUyLVpxLURMaVVFcUxqN2d1QnJRcUhUREtnckFRRHk3NEYtam1oZ0FhaUxwb2hnamozRHNRUDBDU1pSLXNuOWdfdU1CMEgwAA%3D%3D',
          'coldConfigData': 'CPSH5McGEOq6rQUQxYWuBRC9tq4FEKaVrwUQvoqwBRCd0LAFEM_SsAUQ4_iwBRDZwbEFEPayzhwQ_LLOHBCvhs8cEOO4zxwQ-MbPHBDb088cEJzXzxwQz-DPHBDQ4M8cEJvkzxwQ1-TPHBDQ5c8cEPLozxwQzOvPHBCQ9M8cELn0zxwQ7fTPHBC49s8cEMj3zxwQ9_zPHBDK_c8cEKb-zxwQ5f7PHBDo_s8cEOn-zxwQ-v_PHBCvgtAcEJSD0BwQ1YPQHBCchdAcELSF0BwQ-YfQHBD8h9AcEICI0BwQt4nQHBCri9AcEOeL0BwQ4YzQHBCYjtAcEMyO0BwQ4Y7QHBCBkNAcEISR0BwQm5HQHBDOkdAcEN-U0BwQ55XQHBDHl9AcEMSY0BwaMkFPakZveDNTY1gzNE5zb0lQOWVtT1JnWW5SeGFoWUZYT04yQ1VoUGFpZ1pyVXJrejZRIjJBT2pGb3gzU2NYMzROc29JUDllbU9SZ1luUnhhaFlGWE9OMkNVaFBhaWdaclVya3o2USqIAUNBTVNZUTBqdU4yM0FxUVo3eW5ITm9PRm1oQ2VGTzhXRkkwMl9pT25EZndWYWpUT0UtY0ROSlVCRlQ2bTNyVWZrWndGMWNZRWxKd0VvYWdFazQwRmk0c0ZqNmNHdUF1OXdBWXl6NEFGMmFRR0E2S3lCWS0tQnNZSjh3UEg0d2EyUGVRRXYwYz0%3D',
          'coldHashData': 'CPSH5McGEhQxMDQ4Mzk3MDkzMDE0MjEyMjc5Nxj0h-THBjIyQU9qRm94M1NjWDM0TnNvSVA5ZW1PUmdZblJ4YWhZRlhPTjJDVWhQYWlnWnJVcmt6NlE6MkFPakZveDNTY1gzNE5zb0lQOWVtT1JnWW5SeGFoWUZYT04yQ1VoUGFpZ1pyVXJrejZRQogBQ0FNU1lRMGp1TjIzQXFRWjd5bkhOb09GbWhDZUZPOFdGSTAyX2lPbkRmd1ZhalRPRS1jRE5KVUJGVDZtM3JVZmtad0YxY1lFbEp3RW9hZ0VrNDBGaTRzRmo2Y0d1QXU5d0FZeXo0QUYyYVFHQTZLeUJZLS1Cc1lKOHdQSDR3YTJQZVFFdjBjPQ%3D%3D',
          'hotHashData': 'CPSH5McGEhIxNjk3NTA4MzkwNTIyNjA5NDQY9IfkxwYolOT8Eiil0P0SKJ6R_hIot-r-Eijm7f4SKNGu_xIox4CAEyj3kIATKMuRgBMo5JSAEyi1m4ATKLuwgBMoorGAEyipsYATKNGxgBMoqLKAEyiLs4ATKK6zgBMotLOAEyiStIATKK60gBMorbWAEzIyQU9qRm94M1NjWDM0TnNvSVA5ZW1PUmdZblJ4YWhZRlhPTjJDVWhQYWlnWnJVcmt6NlE6MkFPakZveDNTY1gzNE5zb0lQOWVtT1JnWW5SeGFoWUZYT04yQ1VoUGFpZ1pyVXJrejZRQjRDQU1TSVEwS290ZjZGYTdCQnBOTjhncTVCQlVYM2NfQ0RNYW43UXZZelFtbHdBWFdWdz09'
        },
        'screenDensityFloat': 2,
        'userInterfaceTheme': 'USER_INTERFACE_THEME_LIGHT',
        'timeZone': 'Asia/Dhaka',
        'browserName': 'Chrome Mobile',
        'browserVersion': '107.0.0.0',
        'memoryTotalKbytes': '4000000',
        'acceptHeader': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'deviceExperimentId': 'ChxOelUyTkRBNE1UTTVOVFk1TnpnM01EVTROZz09EPSH5McGGPSH5McG',
        'rolloutToken': 'CIvdvKHbvpW1VxDZ4sS8h7iQAxidteO8h7iQAw%3D%3D',
        'screenWidthPoints': 360,
        'screenHeightPoints': 696,
        'utcOffsetMinutes': 360,
        'clientScreen': 'WATCH',
        'mainAppWebInfo': {
          'graftUrl': '/watch?v=jKqCewZvECA&list=RDjKqCewZvECA&start_radio=1&pp=oAcB',
          'webDisplayMode': 'WEB_DISPLAY_MODE_BROWSER',
          'isWebNativeShareAvailable': true
        }
      },
      'user': {
        'lockedSafetyMode': false
      },
      'request': {
        'useSsl': true,
        'internalExperimentFlags': [],
        'consistencyTokenJars': []
      },
      'clickTracking': {
        'clickTrackingParams': 'CC4Q_FoiEwj97Y7nmriQAxVmrUsFHUZGJgoyCmctaGlnaC1yZWNaD0ZFd2hhdF90b193YXRjaJoBBhCOHhieAcoBBEmeFN4='
      },
      'adSignalsInfo': {
        'params': [
          {
            'key': 'dt',
            'value': '1761149943029'
          },
          {
            'key': 'flash',
            'value': '0'
          },
          {
            'key': 'frm',
            'value': '0'
          },
          {
            'key': 'u_tz',
            'value': '360'
          },
          {
            'key': 'u_his',
            'value': '6'
          },
          {
            'key': 'u_h',
            'value': '800'
          },
          {
            'key': 'u_w',
            'value': '360'
          },
          {
            'key': 'u_ah',
            'value': '800'
          },
          {
            'key': 'u_aw',
            'value': '360'
          },
          {
            'key': 'u_cd',
            'value': '24'
          },
          {
            'key': 'bc',
            'value': '31'
          },
          {
            'key': 'bih',
            'value': '696'
          },
          {
            'key': 'biw',
            'value': '360'
          },
          {
            'key': 'brdim',
            'value': '0,0,0,0,360,0,360,696,360,696'
          },
          {
            'key': 'vis',
            'value': '1'
          },
          {
            'key': 'wgl',
            'value': 'true'
          },
          {
            'key': 'ca_type',
            'value': 'image'
          }
        ]
      }
    },
    'videoId': 'jKqCewZvECA',
    'playlistId': 'RDjKqCewZvECA',
    'params': 'oAcB',
    'playbackContext': {
      'contentPlaybackContext': {
        'currentUrl': '/watch?v=jKqCewZvECA&list=RDjKqCewZvECA&start_radio=1&pp=oAcB',
        'vis': 0,
        'splay': false,
        'autoCaptionsDefaultOn': false,
        'autonavState': 'STATE_NONE',
        'html5Preference': 'HTML5_PREF_WANTS',
        'signatureTimestamp': 20376,
        'referer': 'https://m.youtube.com/',
        'lactMilliseconds': '-1',
        'watchAmbientModeContext': {
          'watchAmbientModeEnabled': true
        }
      },
      'devicePlaybackCapabilities': {
        'supportsVp9Encoding': true,
        'supportXhr': true
      }
    },
    'racyCheckOk': false,
    'contentCheckOk': false,
    'serviceIntegrityDimensions': {
      'poToken': 'Mk-LEdkU9ANO7Isp1TuFd2y9qfp1Emq2HSPULtPsMSlmsRnR5v3M56jWxUqCGc2_YnphYtZkK8GacXGUGMBvJLdFvadBdoRazBgPiNZliFw-'
    }
  },
  {
    params: {
      'prettyPrint': 'false'
    },
    headers: {
      'authority': 'm.youtube.com',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'cookie': 'VISITOR_INFO1_LIVE=Xj7r3bk7SDA; VISITOR_PRIVACY_METADATA=CgJCRBIEGgAgDw%3D%3D; __Secure-ROLLOUT_TOKEN=CIvdvKHbvpW1VxDZ4sS8h7iQAxidteO8h7iQAw%3D%3D; PREF=tz=Asia.Dhaka; GPS=1; YSC=0xA-FA3rrmM; ST-56y80f=csn=HLoTq7j6hBcIX4la&itct=CC4Q_FoiEwj97Y7nmriQAxVmrUsFHUZGJgoyCmctaGlnaC1yZWNaD0ZFd2hhdF90b193YXRjaJoBBhCOHhieAcoBBEmeFN4%3D',
      'device-memory': '4',
      'origin': 'https://m.youtube.com',
      'referer': 'https://m.youtube.com/',
      'sec-ch-ua': '"Chromium";v="107", "Not=A?Brand";v="24"',
      'sec-ch-ua-arch': '',
      'sec-ch-ua-bitness': '',
      'sec-ch-ua-full-version': '"107.0.5304.74"',
      'sec-ch-ua-full-version-list': '"Chromium";v="107.0.5304.74", "Not=A?Brand";v="24.0.0.0"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-model': '"RMX3261"',
      'sec-ch-ua-platform': '"Android"',
      'sec-ch-ua-platform-version': '"11.0.0"',
      'sec-ch-ua-wow64': '?0',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'same-origin',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Linux; Android 11; RMX3261) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
      'x-client-data': 'CPjoygE=',
      'x-goog-visitor-id': 'CgtYajdyM2JrN1NEQSj0h-THBjIKCgJCRBIEGgAgDw%3D%3D',
      'x-youtube-bootstrap-logged-in': 'false',
      'x-youtube-client-name': '2',
      'x-youtube-client-version': '2.20251021.01.00-canary_control_2.20251021.07.00'
    }
  }
);   

    // Forward the CDNFrame response (or pick specific fields as needed)
res.json(response.data);

} catch (error) { console.error(error); } });

app.listen(3000, () => { console.log("api is running"); });
