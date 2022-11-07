import React, { Component } from 'react';
class Counter2 extends Component {
    state = { 
        count:0,
        p:9
     } 
    render() { 
        console.log(this.props);
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={() => this.increment(this.state.p)}>Click me</button>
            </div>
        );
    }
    increment =(p) =>{
        this.props.count=56
        this.setState({count:this.state.count+this.state.p})
    }
}
export default Counter2;