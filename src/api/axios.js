import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://stepup-backfootwear.onrender.com/',  // Your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});
await api.get('/api/products/women/');

await api.get('/api/products/men/');

await api.get('/api/products/kids/');

export default api;
