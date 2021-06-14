import axios from "axios";
// import client from "eqb-request-client";

const api = axios.create({
  baseURL: "https://api.hackathon.sunrin.dev/v1"
});

export default api;
