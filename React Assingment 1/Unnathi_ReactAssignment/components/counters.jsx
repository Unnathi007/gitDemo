// import React,{Component} from "react"
// import Counter from "./counter";
// class Counters extends Component{
//     state={};
//     render(){
//         return (<div>
//             <Counter/>
//              <Counter/>
//              <Counter/>
//            </div>
//         );
//     }
// }
// export default Counters;
// import React, { Component } from 'react';

// import Counter from './counter';



// class  Counters extends Component {

//     state = {

//         counters:[

//             {id:1,value:1},

//             {id:2,value:2},

//             {id:3,value:3},

//         ]

//       }
//       handleDelete=(counterId)=>{
//           //console.log('Event handler called',counterId);
//           const counters=this.state.counters.filter(c=>c.id!==counterId);
//           this.setState({counters:counters});
//       }
//       handleReset=()=>{
//         const counters=this.state.counters.map(c=>{
//             c.value=0;
//             return c;
//         })
//         this.setState({counters})
//       }
//       handleIncrement=(counter)=>{
//         // this.prop.value=0;
//         const counters=[...this.state.counters];
//         const index=counters.indexOf(counter);
//         counters[index]={...counter};
//         counters[index].value++;
//         // this.setState({count:this.state.count+1})
//         this.setState({counters});
//         console.log("Increment Clicker",this,counter);
//     }
//     handleDecrement=(counter)=>{
//         const counters=[...this.state.counters];
//         const index=counters.indexOf(counter);
//         counters[index]={...counter};
//         counters[index].value--;
//         // this.setState({count:this.state.count+1})
//         this.setState({counters});
//         console.log("Increment Clicker",this,counter);
        
//     }
//     render() {
     
//         return (
//             <div>
//            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
//         {this.state.counters.map(counter =><Counter onDelete={this.handleDelete} 
//         onIncrement={this.handleIncrement}
//         onDecrement={this.handleDecrement}
//         counter={counter} id={counter.id} key={counter.id} value={counter.value} selected={true}>
            
//             <h1>hi {counter.value}</h1>
//             </Counter>
//             )}
        
        
        
//                     </div>
        
//       );

//     }

// }

 

// export default Counters;
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
        //console.log('Event handler called!',counterId);
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