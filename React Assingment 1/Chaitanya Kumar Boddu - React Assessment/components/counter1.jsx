import React, { Component } from 'react';
import Counter from './counter';

class  Counters extends Component {
    state = {
        counters:[
            {id:1,value:1},
            {id:2,value:2},
            {id:3,value:3},
        ]
      } 
    handleDelete=(counterId)=>{
        const newCounters=this.state.counters.filter(c=> c.id !== counterId)
        this.setState(
            {
                counters: newCounters
            }
        )
        
    }

    handleReset=()=>{
        const newCounters= this.state.counters.map(c=>{
            c.value=0;
            return c;
        })
        this.setState({newCounters })
    }
    handleIncrement = (counter) =>
    {
        const counters = [...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement=(counter)=>{
        const counters = [...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value--;
        this.setState({counters});
    }

    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {this.state.counters.map(counter =>(<Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={()=>this.handleIncrement(counter)} 
                    onDecrement={()=>this.handleDecrement(counter)} 
                    counter={counter} >
                    <p>hello #{counter.value}</p>
                </Counter>))}

            </div>
        );
    }
}
 
export default Counters;