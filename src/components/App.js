import React from "react";
import Form from "./Form";
import Image from "./Image";
import axios from "axios";

export default class App extends React.Component {
  state = {
    term: "",
    images: [],
    status: "initial"
  };

  componentDidMount() {
    this.fetchImages("Mountains");
  }

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
    const { term, status, images } = this.state;

    return (
      <div className="App">
        <Form fetchImages={this.fetchImages} />

        {status === "searching" && <h3>Searching for {term}</h3>}
        {status === "done" &&
          images.length === 0 && (
            <h3>
              Sorry sucker, no results{" "}
              <span role="img" aria-label="sad">
                😢
              </span>
            </h3>
          )}
        {status === "error" && <h3>Oops... error!</h3>}

        <div className="images-container">
          {images.map(image => <Image image={image} key={image.id} />)}
        </div>
      </div>
    );
  }
}
