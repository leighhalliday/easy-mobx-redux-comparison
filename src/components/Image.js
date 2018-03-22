import React from "react";
import PropTypes from "prop-types";

export default class Image extends React.Component {
  static propTypes = {
    image: PropTypes.object.isRequired
  };

  render() {
    const image = this.props.image;
    const description =
      image.categories.length > 0 ? image.categories[0].title : image.user.name;

    return (
      <div className="image">
        <figure className="container">
          <header>
            <div className="half">
              <h2>{description}</h2>
            </div>

            <div className="half">
              <a href={image.links.html} target="_blank">
                View
              </a>
            </div>
          </header>

          <div className="img-container">
            <div className="overlay">
              <div className="overlay-text">Liked {image.likes} times</div>
            </div>
            <img src={image.urls.small} alt={description} />
          </div>
        </figure>
      </div>
    );
  }
}
