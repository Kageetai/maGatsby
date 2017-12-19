import React, { Component } from "react";
import Link from "gatsby-link";
import defaultHeaderBackground from "./headerBackground.jpg";
import "./Header.scss";

const defaultHeaderBackgroundPositionY = 50;
const headerBackgroundSpeed = 2;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      randomPhoto: "",
      headerBackgroundPositionY: 50
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${
        this.props.config.flickrApiKey
      }&user_id=${
        this.props.config.flickrUser
      }&format=json&nojsoncallback=1&extras=url_o`
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          photos: response.photos.photo,
          randomPhoto:
            response.photos.photo && response.photos.photo.length
              ? Math.floor(Math.random() * response.photos.photo.length)
              : 0
        })
      )
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));

    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    this.setState({
      headerBackgroundPositionY:
        defaultHeaderBackgroundPositionY /
          this.headerElement.clientHeight /
          headerBackgroundSpeed *
          window.scrollY +
        defaultHeaderBackgroundPositionY
    });
  }

  render() {
    const { config } = this.props;

    const headerStyle = {
      backgroundImage: this.state.photos.length
        ? `url(${this.state.photos[this.state.randomPhoto].url_o})`
        : defaultHeaderBackground,
      backgroundPositionY: `${this.state.headerBackgroundPositionY}%`
    };

    return (
      <header
        className="header"
        style={headerStyle}
        ref={element => {
          this.headerElement = element;
        }}
      >
        <Link to="/">
          <h1>{config.siteTitle}</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
