import React from "react";
import PropTypes from "prop-types";

export default class Form extends React.Component {
  static propTypes = {
    fetchImages: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const term = this.input.value;
    this.props.fetchImages(term);
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
