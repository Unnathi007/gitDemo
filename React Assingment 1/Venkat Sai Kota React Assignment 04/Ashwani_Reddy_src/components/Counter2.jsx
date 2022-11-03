import React, { Component } from 'react';
import Counter from "./components";

class Counter2 extends Component {
    render(){
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m">Reset</button><br/>
                {counters.map(counter=>
                    <Counter 
                    key={counter.id} 
                    onDelete= {onDelete} 
                    onIncrement={onIncrement}
                    counter={counter}/>
                )}
            </div>
        );
    }   
} 
export default Counter2;