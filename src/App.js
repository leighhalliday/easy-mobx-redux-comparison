import React, { Component } from 'react';
import Image from './components/Image';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: null
    }
  }

  componentWillMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    const url = `https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg`;

    fetch(``).then((response) => {
      return response.json();
    }).then((images) => {
      this.setState({
        images: images
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Image />
      </div>
    );
  }
}

export default App;
