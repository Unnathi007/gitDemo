import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={() => this.props.onIncrement(counter)}
            onDecrement={() => this.props.onDecrement(counter)}
          >
            <h1></h1>
            <h2>Hi</h2>
          </Counter>
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
