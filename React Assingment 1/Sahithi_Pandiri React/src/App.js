import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar';
import React, { Component } from 'react';
import Counters from './Components/counters';
import CounterNew from './Components/counternew';


class App extends Component{
  state={
      counters :[
        {id:1 ,value:1},
        {id:2 ,value:2},
        {id:3 ,value:3}
      ],
      count:0
  }
  render(){
  return (
    <React.Fragment>
   <NavBar/>
   <main className='container'>
   <Counters/>
   </main>
        {this.state.counters.map((counter) => (
          <CounterNew
            key={counter.id}
            delete={this.delete}
            increment={this.increment}
            value={counter.value}
            id={counter.id}
            selected={true}
            counter={counter}
            reset={this.reset}
          >
          </CounterNew>
        ))}
   </React.Fragment>
  );
}
increment =() =>{
  this.setState({count:this.state.count+1})
}
delete = (id) => {
  console.log("called");
  //document.getElementById(id).style.visibility='hidden'\
  console.log(id);
  const counters = this.state.counters.filter((c) => c.id !== id);
  this.setState({ counters });
}
}

export default App;
