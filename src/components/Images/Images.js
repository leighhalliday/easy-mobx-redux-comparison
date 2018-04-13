import React from "react";
import Image from "./Image";

export default ({ images }) => (
  <div className="images-container">
    {images.map(image => <Image image={image} key={image.id} />)}
  </div>
);
