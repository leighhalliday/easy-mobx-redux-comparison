import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/styles.css";

import { Provider } from "mobx-react";

import GalleryStore from "./stores/GalleryStore";
const galleryStore = new GalleryStore();

ReactDOM.render(
  <Provider galleryStore={galleryStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
