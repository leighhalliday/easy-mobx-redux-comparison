import React from "react";
import { GalleryContext } from "../../contexts/GalleryContext";
import Form from "./Form";

export default props => (
  <GalleryContext.Consumer>
    {({ fetchImages }) => <Form {...props} fetchImages={fetchImages} />}
  </GalleryContext.Consumer>
);
