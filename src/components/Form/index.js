import React from "react";
import Form from "./Form";
import { GalleryContext } from "../../contexts/GalleryContext";

export default props => (
  <GalleryContext.Consumer>
    {({ fetchImages }) => <Form {...props} fetchImages={fetchImages} />}
  </GalleryContext.Consumer>
);
