import React from "react";
import axios from "axios";

export const GalleryContext = React.createContext();

export class GalleryProvider extends React.Component {
  state = {
    term: "",
    images: [],
    status: "initial"
  };

  fetchImages = async term => {
    this.setState({
      status: "searching",
      term: term,
      images: []
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
      this.setState({
        status: "done",
        images: response.data.results
      });
    } catch (error) {
      this.setState({
        status: "error"
      });
    }
  };

  render() {
    return (
      <GalleryContext.Provider
        value={{ ...this.state, fetchImages: this.fetchImages }}
      >
        {this.props.children}
      </GalleryContext.Provider>
    );
  }
}
