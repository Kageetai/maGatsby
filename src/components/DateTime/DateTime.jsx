import React, { Component } from "react";
import moment from "moment";
import locale from "browser-locale";
import "./DateTime.scss";

class DateTime extends Component {
  componentDidMount() {
    moment.locale(locale());
  }

  render() {
    return (
      <div className="datetime">
        {moment(this.props.dateTime).format(this.props.dateFormat)}
      </div>
    );
  }
}

export default DateTime;
