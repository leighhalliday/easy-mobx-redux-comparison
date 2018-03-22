import React from "react";
import Form from "./Form";
import Image from "./Image";

export default class App extends React.Component {
  state = {
    term: "",
    images: [],
    status: "initial"
  };

  componentWillMount() {
    this.fetchImages("Mountains");
  }

  fetchImages = term => {
    this.setState({
      status: "searching",
      term: term,
      images: []
    });

    const url = `https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&per_page=12&query=${term}`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          status: "done",
          images: data.results
        });
      });
  };

  render() {
    const { term, status, images } = this.state;

    return (
      <div className="App">
        <Form fetchImages={this.fetchImages} />

        {status === "searching" && <h3>Searching for {term}</h3>}
        {status === "done" &&
          images.length === 0 && <h3>No results for {term}</h3>}

        <div className="images-container">
          {this.state.images.map(image => {
            return <Image image={image} key={image.id} />;
          })}
        </div>
      </div>
    );
  }
}
