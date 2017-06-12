// Always import react in every single component + all the files/components you will be using within the component
import React from 'react';
import Form from './Form';
import Image from './Image';

export default class App extends React.Component {
  // Whenever I need to set the initial state, I need to use a constructor function that calls super (which is the constructor of the parent class -> in this case, the parent of App is Component)
  constructor() {
    super();

    // The state is the dynamic data of your app. Think what parts of your site are going to be changing (because of an event or interaction, etc.), those particular elements should be given an initial value.
    this.state = {
      images: [],
      // This initial term will be updated with the search term the user inputs
      term: ''
    }
  }

  // componentWillMount is part of the component life cycle and basically it's like saying... do this before the app renders. In this case, call the fetchImages function so that they show up once the app renders.
  componentWillMount() {
    this.fetchImages('butterfly');
  }

  // I'm going to fetch images from unsplash. Note that in the url I am embedding 'term' which will be based on the user's input.
  fetchImages = (term) => {
    // The first thing is setting the term in the state to whatever the user input is
    this.setState({
      term: term
    })

    const url = `https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&per_page=12&query=${term}`;

    // Go to this url.
    fetch(url).then((response) => {
      // Send me the response in JSON format
      return response.json();
    // Once we have the response, I want to set the images in the state (which is an empty array) to be the images that were returned by the api. 'data' is just a name I'm giving to whatever information the response contains
    }).then((data) => {
      this.setState({
        // Check how the data looks like. It contains an array of results. Therefore, set the value of images to be those results
        images: data.results
      });
    });
  }

  /*
  Each component will have a render function (this is how your HTML gets displayed). In this case, the App component renders both the Form and Image components.

  The form component will need to know the term the user inputs. The way we send this info is by using props. Below when the Form component is used, I'm saying term={this.state.term} this is how we send information that is within the state to another component. (Not always the info is within the state, this is the case of the props passed to the Image component). I am also passing the fetchImages function to the Form component because this function will be called again when the form is submitted (when form button is clicked).

  To render all the images, I need to loop through them and for each image, return the Image component (<Image />), which is just a div with a figcaption that contains info about the image and the image itself. When you use 'map', you're required to give the element that is being repeated a key, which is a unique identifier. Lastly, the Image component will need to have access to the information we got from the fetch statement. This is done by using 'props': image={image} (this makes each image we are looping through accessible within the Image component).
  */

  render() {
    return (
      <div className="App">
        <Form term={this.state.term} fetchImages={this.fetchImages} />

        <div className="images-container">
          {
            this.state.images.map((image) => {
              return <Image image={image} key={image.id} />
            })
          }
        </div>
      </div>
    );
  }
}
