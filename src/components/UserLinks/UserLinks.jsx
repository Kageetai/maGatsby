import React, { Component } from "react";
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <li key={link.label}>
        <a href={link.url}>
          <i className={link.iconClassName} />
          {labeled ? ` ${link.label}` : ""}
        </a>
      </li>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <ul className="user-links">{this.getLinkElements()}</ul>;
  }
}

export default UserLinks;
