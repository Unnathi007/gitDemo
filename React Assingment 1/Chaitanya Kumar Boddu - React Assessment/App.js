// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar'
import Counter2 from './components/Counter2';
// import React from 'react';
// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
    
  // );
// }
class App extends Component{
  state = {  
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
} ;
handleReset = () =>
{
    const counters = this.state.counters.map(c =>{
        c.value=0;
        return c;
    });
    this.setState({counters});
}
handleDelete = (counterID) =>
{
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters: counters});
}
handleDecrement=(counter)=>{
  const counters = [...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value--;
  this.setState({counters});
}
handleIncrement = (counter) =>
{
    const counters = [...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
}
  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counter2 counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
        </main>
      </React.Fragment>
    )
  }
}
export default App;
