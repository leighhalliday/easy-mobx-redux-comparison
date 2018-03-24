import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchImages } from "../actions";

class Form extends React.Component {
  static propTypes = {
    pleaseFetchImages: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const term = this.input.value;
    this.props.pleaseFetchImages(term);
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    pleaseFetchImages: term => {
      dispatch(fetchImages(term));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
