import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api/',  // Your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, you can add interceptors if needed later
// api.interceptors.request.use(...);
// api.interceptors.response.use(...);

export default api;
