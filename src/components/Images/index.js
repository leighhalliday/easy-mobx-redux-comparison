import React from "react";
import Images from "./Images";
import { GalleryContext } from "../../contexts/GalleryContext";

export default props => (
  <GalleryContext.Consumer>
    {({ images }) => <Images {...props} images={images} />}
  </GalleryContext.Consumer>
);
