import React, { Component } from 'react';

import NavBar from './navbar';
import './App.css';
import Counters from './components/counters';
class App extends Component{

  
  render(){
    return(
      <div>
      <NavBar/>
      <main className="Container">
        <Counters />
    
      </main>
      </div>
    );
  }
}

export default App;
