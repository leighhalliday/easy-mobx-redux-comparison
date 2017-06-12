import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  // static propTypes is available for you to know which props are being passed to this Image component. You don't have to use it but I found it to be a good practice, mainly when your component is getting a lot of props. Note that to use them, we hae to import PropTypes.
  static propTypes = {
    image: PropTypes.object.isRequired
  }

  render() {
    // I don't want to repeat this.props.image all the time so I created an image variable which I will be using to render the content dynamically
    const image = this.props.image;
    // I want a dynamic h2 and alt attribute so I'm checking if the data has a category to use in those fields, otherwise, I'll use the user's name.
    const description = image.categories.length > 0 ? image.categories[0].title : image.user.name;

    /* The return function contains the JSX that will be rendered by the Image component (Image component ONLY renders 1 image). This component is then used by the App component which renders ALL the images dynamically.

    The content we are embedding in this JSX comes from the results of the JSON (which we got by using the fetch statement in App); therefore, to be able to render things correctly, you need to understand the structure of the data.

    For example, in our case, check this url: https://api.unsplash.com/search/photos?client_id=d7f3bcba73f581193e38e64c77b47657b30ad6e884721af4a982d80f4e80de70&query=cats
    The entire object (which I called 'data' in the fetch statement) contains an array called 'results'. Each result has a 'urls' object which are images' urls (I want to use small size). Results also has a 'categories' array where you can see 'title'. We want to access this info to dynamically generate the content in each figure tag.
    */

    return (
      <div className='image'>
        <figure className='container'>

          <header>
            <div className="half">
              <h2>{description}</h2>
            </div>

            <div className="half">
              <a href={image.links.html} target="_blank">View</a>
            </div>
          </header>

          <div className="img-container">
            <div className="overlay">
              <div className="overlay-text">Liked {image.likes} times</div>
            </div>
            <img src={image.urls.small} alt={description}/>
          </div>

        </figure>
      </div>
    )
  }
}
