import axios from "axios";

const API_KEY = "fHXLDo5Kjen5sQGC30ZoXMO3PBW1MsnyGaB7qpTs";
axios.defaults.baseURL = "https://api.api-ninjas.com/v2";
async function fethRandomQuote() {
  const responce = await axios.get("/randomquotes", {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
  console.log(responce.data);
  return responce.data;
}
export default fethRandomQuote;
