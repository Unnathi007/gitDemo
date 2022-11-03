import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
    state = {  
    }
    // renderTags(){
    //     if(this.state.tags.length===0)return <p>There are no tags</p>;
    //     return (<ul>
    //         {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
    //     </ul>);
    // }
    
    render() { 
        console.log('props',this.props)
        return (
        <div>
        {/* {this.props.children} */}
        {/* <h1>Hello World1</h1> */}
        {/* <img src={this.state.ImageUrl} alt=''/> */}
        <span className={this.newMethod()} >{this.formatCount()}</span>
        <button
        onClick={()=>{this.props.inc(this.props.id)}}
        >Increment</button>
        <button
        onClick={()=>{this.props.dec(this.props.id)}}
        >Decrement</button>
        <button className="btn btn-danger btn-sm m-2" onClick={()=>{this.props.onDelete(this.props.id)}}>Delete</button>
        {/* {this.renderTags()} */}
        </div>
        
        );
    }
    
    newMethod() {
        let classes = "badge s-2 badge-";
        classes += this.props.value === 0 ? "danger" : "primary";
        return classes;
    }

    formatCount(){
        return this.props.value===0?<h1>Zero</h1>:<h1>{this.props.value}</h1>
    }
}
 
export default Counter;