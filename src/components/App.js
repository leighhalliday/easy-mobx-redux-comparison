import React from "react";
import Form from "./Form";
import Image from "./Image";
import { inject, observer } from "mobx-react";

@inject("galleryStore")
@observer
export default class App extends React.Component {
  componentWillMount() {
    this.props.galleryStore.fetchImages("Mountains");
  }

  render() {
    const { term, status, images } = this.props.galleryStore;

    return (
      <div className="App">
        <Form />

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
