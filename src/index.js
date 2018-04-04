import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/styles.css";

import { GalleryProvider, GalleryContext } from "./contexts/GalleryContext";

ReactDOM.render(
  <GalleryProvider>
    <GalleryContext.Consumer>
      {({ fetchImages }) => <App fetchImages={fetchImages} />}
    </GalleryContext.Consumer>
  </GalleryProvider>,
  document.getElementById("root")
);
registerServiceWorker();
