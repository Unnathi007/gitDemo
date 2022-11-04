// import React,{Component} from 'react';
// class Counter extends Component{
//     // state={
//     //     count:this.props.value,
//     //     imageUrl:'https://picsum.photos/200',
//     //     tags:['tag1','tag2','tag3']
//     // };
//      /* {this.state.tags.length===0 && 'Please create a new tag'} */
//                 /* {this.renderTags()}</div> */
//     state={}
//     styles={
//        fontSize:50,
//        fontWeight:"bold"
//     }
    
    
//     render(){
//         //let classes = this.getBadgeClasses();
//         // console.log(this.props);
//         return (
//             <React.Fragment>
//             <h1>hello</h1>
//             {/* <img src={this.state.imageUrl} alt="nothing"></img> */}
//             <button onClick={this.props.onDecrement(this.props.counter)} className="btn btn-secondary">Decrement</button>
//             <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
//             <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
//             <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
//             <div>
//                 {this.props.children}
               
//             </div>
//             </React.Fragment>
//         );

        
//     }

//     // renderTags(){
//     //     if(!this.props.hasOwnProperty("tags") || this.props.tags.length===0){
//     //        return <p>There are no tags!</p>
//     //     }
//     //     return <ul>
//     //     {this.props.tags.map(tag => <li key={tag}>{tag}</li>)}
//     // </ul>
//     // }
//     formatCount(){
//         this.props.counter.value=== 0?'Zero':this.props.counter.value;
//       }
//       getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += this.props.counter === 0 ? "warning" : "primary";
//         return classes;
//     }
// }
// export default Counter;
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