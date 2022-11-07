// import React, { Component } from 'react';
// import counter from './counter';

// class Counters extends Component {
//     state = {  
//         Counters:[
//             {id:1,value:4},
//             {id:2,value:4},
//             {id:3,value:4},
//             {id:4,value:4}
//         ]
//     } ;
//     render() { 
//         return (
//             <div>
                
//                 {this.state.Counters.map(counter=>
//                     <Counter key={counter.id} value={counter.value} selected={true}>
//                     <h1>Hellllllo</h1>
//                     </Counter>)}
//                 {/* <Counter/>
//                 <Counter/>
//                 <Counter/>
//                 <Counter/>
//                 <Counter/> */}
//             </div>
//         );
//     }
// }

// export default Counters;



import React, { Component } from 'react';
import Counter2 from './counter2';
class Counters extends Component {
    state = { 
        counters :[
            {id :1 ,value:4},
            {id :2 ,value:2},
            {id :3 ,value:6},
        ]
     } 
     handkeDelete = counterId =>{
        const counters = this.state.
        console.log("event handler",counterId)
     };
    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter2 key ={counter.id} value ={counter.value} selected={true}>
                <h1>
                  hi
                </h1>
                </Counter2>)}
            </div>
        );
    }
}
export default Counters;