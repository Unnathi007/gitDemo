import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  styles ={
    backgroundColor:"red"
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span styles={this.styles} className="badge badge">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
