import React, { Component } from "react";

export default class Like extends Component {
  render() {
    let classes = "fa fa-heart-o";
    classes = this.props.liked ? 'fa fa-heart' : 'fa fa-heart-o'
    return (
    <i 
        className={classes} 
        style={{cursor:'pointer' , color:'magenta'}} 
        onClick={() => this.props.onLikeClicked(this.props.liked)} />
        )
  }
}
