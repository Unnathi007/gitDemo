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
                <button onClick={()=>this.props.onDelete(this.props.id)}>Click me1</button>
                <button onClick={()=>this.props.reset()}>Click me2</button>
            </div>
        );
    }
    increment =(p) =>{
        this.setState({count:this.state.count+this.state.p})
    }
}
export default Counter2;