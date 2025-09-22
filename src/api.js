import axios from "axios";

const API = axios.create({
  baseURL: "https://stepup-backfootwear.onrender.com/",
});

export default API;
