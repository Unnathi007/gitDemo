import React, { Component } from 'react';
class CounterNew extends Component {
    render() { 
        return (
            <React.Fragment>
                <span>{this.props.count}</span>
                <button className='btn btn-secondary btn-sm' onClick={this.props.increment}>Increment
                </button>
                <button className='btn btn-danger btn-sm' onClick={this.props.delete(this.props.counter.id)}>Decrement
                </button>
            </React.Fragment>
        );
    }
} 
export default CounterNew;