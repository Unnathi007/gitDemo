import React, { Component } from 'react';
import Counter from './components/counter';
import Counters from './components/counter1';
import NavBar from './components/navbar';
class App extends Component {
  state = {

        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]

  }
   handleDelete=(x)=>{
        const counters=this.state.counters.filter(c=>c.id!==x);
        this.setState({counters:counters})
        
    }
    handleReset=()=>{
        const counters=this.state.counters.map(c=>{
            c.value=0;
            return c;
        })
        this.setState({counters:counters})
    }
    inc=(x)=>{
        console.log(x);
        const counters=this.state.counters.map(c=>{
            if(c.id===x){
                console.log(c.value)
                 c.value+=1
            }
            return c;
        });
        this.setState({counters:counters})
        console.log(counters,this.state.counters)
        };
    dec=(x)=>{
        console.log(x);
        const counters=this.state.counters.map(c=>{
            if(c.id===x){
                console.log(c.value)
                 c.value-=1
            }
            return c;
        });
        this.setState({counters:counters})
        console.log(counters,this.state.counters)
        };
    
  render() { 
    return (
        <><Counter/></>
    //   <><NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/><main className='container'>
    //     <Counters 
    //     counters={this.state.counters}
    //     handleReset={this.handleReset}
    //     handleDelete={this.handleDelete}
    //     inc={this.inc}
    //     dec={this.dec}
    //     />
    //     </main></>
    );
  }
}
 
export default App;
