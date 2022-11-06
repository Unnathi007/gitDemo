import React, { Component } from 'react';
class Counter extends Component {
    state = { 
      
     }; 
    render() {
       console.log(this.props) 
        return (
            <React.Fragment>
            <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            <span className= {this.badgeClass()}>{this.formatvalue()}</span>
            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'>Increment</button>
            <button 
            onClick = {() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button><br/>
            <button 
            onClick = {() => this.props.onDecrement(this.props.counter)} 
            className="btn btn-secondary btn-sm ">Decrement</button><br/>
            </React.Fragment>
        );
    }
    
    badgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value=== 0 ? "warning" : "primary";
        return classes;
    }

    formatvalue()
    {
        return this.props.counter.value=== 0?'Zero':this.props.counter.value;
    }
}
 
export default Counter;