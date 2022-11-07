import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counter2 from './components/counter2';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Delete handler called ", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleReset =() => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }
  render() { 
    return (
      <><NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} /><main className='container'>
        <Counter2
          onReset={this.handleReset}
          onInc={this.handleIncrement}
          onDelete={this.handleDelete}
          onDec={this.handleDecrement}
          counters={this.state.counters}
        />
    </main></>
    );
  }
}
 
export default App;
