import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 4 },
      { id: 3, value: 4 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({counters : counters});
    //this.setState({ counters : counters });
    //    ('Delete Event Called',counterId);
  };

  handleIncrement= counter=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});

 };

 handleDecrement= counter=>{
  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value--;
  this.setState({counters});

};

  handleReset=()=>{
    const counters=this.state.counters.map(C=>{
        C.value=0;
        return C;
    });
    this.setState({counters})

  }

  render() {
    return (
      <div>
        <button
        onClick={this.handleReset}
        className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
         //   value={counter.value}
          //  selected={true}
            //id={counter.id}
            counter={counter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          >
            <h1>Lonewolf</h1>
          </Counter>
        ))}
        {/* <Counter/>
                <Counter/>
                <Counter/>
                <Counter/>
                <Counter/> */}
      </div>
    );
  }
}

export default Counters;
