import React, { Component } from "react";
import Link from "gatsby-link";
import "./Header.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <header className="header">
        <Link to="/">{config.siteTitle}</Link>
      </header>
    );
  }
}

export default Footer;
