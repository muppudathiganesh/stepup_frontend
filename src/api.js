import axios from "axios";

const API = axios.create({
  baseURL: "https://stepup-backfootwear.onrender.com/",
});
await api.get('/api/products/women/');
await api.get('/api/products/men/');
await api.get('/api/products/kids/');

export default API;
