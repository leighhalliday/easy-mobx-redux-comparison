import React from "react";
import { inject, observer } from "mobx-react";

@inject("galleryStore")
@observer
export default class Form extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const term = this.input.value;
    this.props.galleryStore.fetchImages(term);
  };

  render() {
    return (
      <form className="form" onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          ref={input => {
            this.input = input;
          }}
          placeholder="Enter your search term"
        />
        <button>SEARCH</button>
      </form>
    );
  }
}
