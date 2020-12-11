import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    type: 'video',
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});

export default axiosInstance;
