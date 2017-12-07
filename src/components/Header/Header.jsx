import React, { Component } from "react";
import Link from "gatsby-link";
import defaultHeaderBackground from "./headerBackground.jpg";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${
        this.props.config.flickrApiKey
      }&user_id=${
        this.props.config.flickrUser
      }&format=json&nojsoncallback=1&extras=url_l`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          photos: response.photos.photo
        })
      )
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }

  render() {
    const { config } = this.props;
    const randomPicture =
      this.state.photos && this.state.photos.length
        ? Math.floor(Math.random() * this.state.photos.length)
        : 0;

    const headerStyle = {
      backgroundImage: this.state.photos.length
        ? `url(${this.state.photos[randomPicture].url_l})`
        : defaultHeaderBackground
    };

    return (
      <header className="header" style={headerStyle}>
        <Link to="/">
          <h1>{config.siteTitle}</h1>
          <small>{config.siteTitleAlt}</small>
        </Link>
      </header>
    );
  }
}

export default Header;
