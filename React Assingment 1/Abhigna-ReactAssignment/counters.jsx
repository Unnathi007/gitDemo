import React, { Component } from 'react';
import Count from './count';
import Counter from './counter';
import LifeCycle from './lifecycle';
import Count2 from './count2';
import UserData from './usersData';
class  Counters extends Component {
    // state = {
    //     counters:[
    //         {id:1,value:1},
    //         {id:2,value:2},
    //         {id:3,value:3},
    //     ]
    //   } 
    // handleDelete=(counterId)=>{
    //     const newCounters=this.state.counters.filter(c=> c.id !== counterId)
    //     this.setState(
    //         {
    //             counters: newCounters
    //         }
    //     )
    //     //console.log('Event handler called!',counterId);
    // }

    // handleReset=()=>{
    //     const newCounters= this.state.counters.map(c=>{
    //         c.value=0;
    //         return c;
    //     })
    //     this.setState({newCounters })
    // }
    // handleIncrement = (counter) =>
    // {
    //     const counters = [...this.state.counters];
    //     const index=counters.indexOf(counter);
    //     counters[index]={...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    // }

    // handleDecrement=(counter)=>{
    //     const counters = [...this.state.counters];
    //     const index=counters.indexOf(counter);
    //     counters[index]={...counter};
    //     counters[index].value--;
    //     this.setState({counters});
    // }

    render() { 
        return (
            <div>
                <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {this.props.counters.map(counter =>(<Counter 
                    key={counter.id} 
                    onDelete={()=>this.props.onDelete(counter.id)} 
                    onIncrement={()=>this.props.onIncrement(counter)} 
                    onDecrement={()=>this.props.onDecrement(counter)} 
                    counter={counter} >
                    <p>hello #{counter.value}</p>
                </Counter>))}
                <LifeCycle/>
                <Count/>
                <Count2/>
                <UserData />

            </div>
        );
    }
}
 
export default Counters;