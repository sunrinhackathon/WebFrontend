import axios from "axios";

function apiUri() {
  if (!process.env.VUE_APP_PROD_API_URI || !process.env.VUE_APP_DEV_API_URI)
    throw new Error("API URI not defined. (ENV)");

  const apiUriPreference = {
    production: process.env.VUE_APP_PROD_API_URI,
    development: process.env.VUE_APP_DEV_API_URI
  };

  return apiUriPreference[process.env.VUE_APP_PROD_ENV || "development"];
}

export default apiUri();
