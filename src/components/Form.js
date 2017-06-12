import React from 'react';
import PropTypes from 'prop-types';

// Form needs to get the term that the user entered and then call the fetchImages function (from App component) on submit. So, that is the information received as props.
export default class Form extends React.Component {
  static propTypes = {
    term: PropTypes.string.isRequired,
    fetchImages: PropTypes.func.isRequired
  }

  onSubmit = (e) => {
    e.preventDefault();
    const term = this.input.value;
    this.props.fetchImages(term);
  }

  // A couple new things here are how to call a function (onSubmit={(e) => this.onSubmit(e)}) and 'ref', which allows us to store a reference to the element in an instance variable (this.input). Once this is done, I can get the value placed within the input by the user.
  render() {
    return (
      <form className='form' onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" ref={(input) => this.input = input} defaultValue={this.props.term} />
        <button>SEARCH</button>
      </form>
    )
  }
}
