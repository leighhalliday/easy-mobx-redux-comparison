import React from "react";
import unsplash from "../services/unsplash";

export const GalleryContext = React.createContext();

export class GalleryProvider extends React.Component {
  state = {
    term: "",
    images: [],
    status: "initial"
  };

  componentDidMount() {
    this.fetchImages("cows");
  }

  fetchImages = async term => {
    this.setState({
      status: "searching",
      term: term,
      images: []
    });

    try {
      const images = await unsplash(term);
      this.setState({
        status: "done",
        images
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
        value={{
          ...this.state,
          fetchImages: this.fetchImages
        }}
      >
        {this.props.children}
      </GalleryContext.Provider>
    );
  }
}
