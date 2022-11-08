import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor:"cyan"
  };
  render() {
    console.log(this.props.children);
    return (
      <React.Fragment>
        <span style={this.styles} className={this.dynamicClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        &nbsp;&nbsp;
        <button
          onClick={this.props.onDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        &nbsp;&nbsp;
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
        <br></br>
      </React.Fragment>
    );
  }

  dynamicClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success ";
    return classes;
  }

  formatCount = () => {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  };
}

export default Counter;
