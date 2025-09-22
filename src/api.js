import axios from "axios";

const API = axios.create({
  baseURL: "https://stepup-backfootwear.onrender.com/api/contact/",
});

export default API;
