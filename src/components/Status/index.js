import React from "react";
import { GalleryContext } from "../../contexts/GalleryContext";
import Status from "./Status";

export default props => (
  <GalleryContext.Consumer>
    {({ status, term, images }) => (
      <Status
        {...props}
        status={status}
        term={term}
        numImages={images.length}
      />
    )}
  </GalleryContext.Consumer>
);
