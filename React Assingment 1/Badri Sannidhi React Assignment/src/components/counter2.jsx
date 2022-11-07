import React, { Component } from "react";
import Counter from "./counter";

class Counter2 extends Component {
  
  render() {
    const { onReset, onDelete, counters, onInc, onDec } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onInc={onInc}
            onDec={onDec}
            
          >
            <h4>HI</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counter2;
