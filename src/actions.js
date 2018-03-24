import axios from "axios";

const fetchImages = term => {
  return async dispatch => {
    dispatch({
      type: "BEGIN_SEARCH",
      term
    });

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id:
              "4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
            query: term
          }
        }
      );
      dispatch({
        type: "DONE_SEARCH",
        images: response.data.results
      });
    } catch (error) {
      dispatch({
        type: "ERROR_SEARCH"
      });
    }
  };
};

export { fetchImages };
