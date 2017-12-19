import React, { Component } from "react";
import Link from "gatsby-link";
import defaultHeaderBackground from "./headerBackground.jpg";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      randomPhoto: "",
      headerBackgroundPositionY: 50
    };
    this.handleScroll = this.handleScroll.bind(this);
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
            this.state.photos && this.state.photos.length
              ? Math.floor(Math.random() * this.state.photos.length)
              : 0
        })
      )
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.setState({
      headerBackgroundPositionY:
        50 / -this.headerElement.clientHeight * window.scrollY + 50
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
