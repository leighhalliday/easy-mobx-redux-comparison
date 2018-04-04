import React from "react";
import { GalleryContext } from "../../contexts/GalleryContext";
import Image from "./Image";

export default props => (
  <GalleryContext.Consumer>
    {({ images }) => (
      <div className="images-container">
        {images.map(image => <Image {...props} image={image} key={image.id} />)}
      </div>
    )}
  </GalleryContext.Consumer>
);
