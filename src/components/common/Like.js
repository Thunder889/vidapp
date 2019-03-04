import React, { Component } from "react";

export default class Like extends Component {
  render() {
    let classes = "fa fa-heart-o";
    return <i className={classes} onClick={() => null} />;
  }
}
