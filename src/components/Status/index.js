import React from "react";
import Status from "./Status";
import { GalleryContext } from "../../contexts/GalleryContext";

export default props => (
  <GalleryContext.Consumer>
    {({ term, status, images }) => (
      <Status {...props} term={term} status={status} images={images} />
    )}
  </GalleryContext.Consumer>
);
