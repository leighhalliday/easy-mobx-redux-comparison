import axios from "axios";

export default async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id:
        "4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
      query: term
    }
  });

  return response.data.results;
};
