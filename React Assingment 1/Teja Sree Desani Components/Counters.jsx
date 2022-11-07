import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:10},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}

        ]
     } 

    handleDelete=(counterId)=>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters})
        console.log('Event handle called', counterId);
    };

    handleReset=()=>{
        const counters = this.state.counters.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({counters});
    };

    render() { 
        return (
            <div>

                <button
                    onClick={this.handleReset}
                    className={"btn btn-primary btn-sm m2"}
                >
                    Reset
                </button>

                {this.state.counters.map(car => 
                    <Counter key={car.id} onDelete={this.handleDelete} value={car.value} selected={true} counter={car}>
                        <h4>Counter #{car.id}</h4>
                    </Counter>)}


            </div>
        );
    }
}
 
export default Counters;