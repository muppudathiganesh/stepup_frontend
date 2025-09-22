import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://stepup-backfootwear.onrender.com/api/',  // Your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
