import axios from "axios";
// import client from "eqb-request-client";
function apiUri() {
  if (!process.env.VUE_APP_PROD_API_URI || !process.env.VUE_APP_DEV_API_URI)
    throw new Error("API URI not defined. (ENV)");

  const apiUriPreference = {
    production: process.env.VUE_APP_PROD_API_URI,
    development: process.env.VUE_APP_DEV_API_URI,
    test: process.env.VUE_APP_DEV_API_URI
  };

  return apiUriPreference[process.env.NODE_ENV];
}
const api = axios.create({
  baseURL: apiUri()
});

export default api;
