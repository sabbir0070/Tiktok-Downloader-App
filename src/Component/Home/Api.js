import axios from "axios";
// const axios = require('axios')

const tiktokVideoDownloader = async (url) =>{

const options = {
  method: 'GET',
  url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
  // url: 'https://tiktok-download-video-no-watermark.p.rapidapi.com/tiktok/info',
  // url: 'https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php',
  params: {
    url: url,
    hd: '1'
  },
  headers: {
    // 'X-RapidAPI-Key': 'a62e242220msh29d77f656f57d3cp165b48jsn9456771aa0b5',
    // 'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'


'X-RapidAPI-Key': 'a62e242220msh29d77f656f57d3cp165b48jsn9456771aa0b5',
    'X-RapidAPI-Host': 'tiktok-download-video-no-watermark.p.rapidapi.com'    

  }
};

try {
	const response = await axios.request(options);
return response;
} catch (error) {
	console.error(error);
throw error;
}

};

export default tiktokVideoDownloader;