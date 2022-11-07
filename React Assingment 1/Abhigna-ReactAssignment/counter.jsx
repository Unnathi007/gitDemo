import React, { Component, } from 'react';

class  Counter extends Component {
    // state = {
    //     count : this.props.counter.value,
    //     tags : [],//['tag1','tag2','tag3'],
    // } 

    

    formatCount(){
        const {count}=this.props.counter.value;
        return count === 0 ? 'zero' : count;
    }

    getBadgeClass(){
        let classes='badge m-2 badge-';
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    // handleIncrement=product1=>{
    //     console.log(product1," prod");
    //     // this.props.counter.value=0;
    //     this.setState({count: this.state.count  +1})
    //     //console.log("count ",this);
    // }

    // handleDecrement=()=>{
    //     this.setState({count: this.state.count - 1})
    // }

    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>there are no tags</p>
    //     return (
    //         <ul>
    //             {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
    //         </ul>
    //     )
    // }

    

    render() {
        console.log("props",this.props); 

        return (
            <React.Fragment>
                {this.props.children}
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'> Increment </button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className='btn btn-primary btn-sm'> Decrement </button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
           
        );
    }

    newMethod() {
        return "badge";
    }
}
 
export default Counter;