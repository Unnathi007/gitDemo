import React, { Component } from 'react';

import Counter from "./counter.jsx";

class Counters extends Component {

    // state = {

    //     counters:[
    //         {id:1,value:0},
    //         {id:2,value:0},
    //         {id:3,value:0},
    //         {id:4,value:0}
    //     ]

    //  }
    // handleDelete=(x)=>{
    //     const counters=this.state.counters.filter(c=>c.id!==x);
    //     this.setState({counters:counters})
        
    // }
    // handleReset=()=>{
    //     const counters=this.state.counters.map(c=>{
    //         c.value=0;
    //         return c;
    //     })
    //     this.setState({counters:counters})
    // }
    // inc=(x)=>{
    //     console.log(x);
    //     const counters=this.state.counters.map(c=>{
    //         if(c.id===x){
    //             console.log(c.value)
    //              c.value+=1
    //         }
    //         return c;
    //     });
    //     this.setState({counters:counters})
    //     console.log(counters,this.state.counters)
    //     };
    // dec=(x)=>{
    //     console.log(x);
    //     const counters=this.state.counters.map(c=>{
    //         if(c.id===x){
    //             console.log(c.value)
    //              c.value-=1
    //         }
    //         return c;
    //     });
    //     this.setState({counters:counters})
    //     console.log(counters,this.state.counters)
    //     };
    render() {

        console.log(this.props)
        const {inc,dec,handleDelete,handleReset,counters}=this.props

        return (

            <div>
                <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                <Counter key={counter.id} onDelete={handleDelete} value={counter.value} id={counter.id} inc={inc} dec={dec} selected={true}>
                    Counter #{counter.id}
                    </Counter>)}

            </div>

        );

    }

}

 

export default Counters;