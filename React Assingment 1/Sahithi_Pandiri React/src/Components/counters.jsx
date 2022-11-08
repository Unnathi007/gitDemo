import React, { Component } from "react";
import Counter2 from "./counter2";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 6 },
    ],
  };
  handleDelete = (id) => {
    console.log("called");
    //document.getElementById(id).style.visibility='hidden'\
    console.log(id);
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  reset = () => {
    const c = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters:c });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter2
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
            selected={true}
            counter={counter}
            reset={this.reset}
          >
            <h1>hi</h1>
          </Counter2>
        ))}
      </div>
    );
  }
}
export default Counters;
