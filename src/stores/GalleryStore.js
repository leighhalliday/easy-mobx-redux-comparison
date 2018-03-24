import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class GalleryStore {
  @observable term = "";
  @observable images = [];
  @observable status = "initial";

  @action
  fetchImages = async term => {
    this.status = "searching";
    this.term = term;
    this.images = [];

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id:
              "4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
            query: term
          }
        }
      );
      this.setImages(response.data.results);
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  @action
  setImages = images => {
    this.images = images;
    this.status = "done";
  };
}
