import axios from "axios";

export default async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
      query: term
    }
  });

  return response.data.results;
};
