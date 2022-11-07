import "./styles.css";
import NavBar from "./components/navbar";
import React, { Component } from "react";
import Counters from "./components/counters";
import LifeCycle from "./components/react-lifecycle-methods";
import helloCounter from "./components/counter_component";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
    ],
  };
  increment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  decrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (id) => {
    console.log(id);
    this.setState({
      counters: this.state.counters.filter(function(counter) {
        return counter.id !== id;
      }),
    });
  };
  handleReset = () => {
    console.log("called");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      // <React.Fragment>
      //   <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
      //   <main className="container">
      //     <Counters
      //       counters={this.state.counters}
      //       onReset={this.handleReset}
      //       onIncrement={this.increment}
      //       onDecrement={this.decrement}
      //       onDelete={this.handleDelete}
      //     />
      //   </main>
      // </React.Fragment>
      <helloCounter/>
    );
  }
}

export default App;
