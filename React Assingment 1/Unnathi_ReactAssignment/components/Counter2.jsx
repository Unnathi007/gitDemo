import React, { Component } from 'react';
import Counter from "./components";

class Counter2 extends Component {
    state = {  
        // counters:[
        //     {id:1, value:0},
        //     {id:2, value:0},
        //     {id:3, value:0},
        //     {id:4, value:0}
        // ]
    } ;
    render(){
        return (
            <div>
                <button 
                onClick={this.props.onReset}
                className="btn btn-primary btn-sm m">Reset</button><br/>
                {this.props.counters.map(counter=>
                    <Counter 
                    key={counter.id} 
                    onDelete= {this.props.onDelete} 
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    counter={counter}>
                        </Counter>
                )}
            </div>
        );
    }
    // handleReset = () =>
    // {
    //     const counters = this.state.counters.map(c =>{
    //         c.value=0;
    //         return c;
    //     });
    //     this.setState({counters});
    // }
    // handleDelete = (counterID) =>
    // {
    //     const counters = this.state.counters.filter(c => c.id !== counterID);
    //     this.setState({counters: counters});
    // }
    // handleIncrement = (counter) =>
    // {
    //     const counters = [...this.state.counters];
    //     const index=counters.indexOf(counter);
    //     counters[index]={...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    // }
}
 
export default Counter2;