import React, { Component } from 'react';
class Counter extends Component {

    // styles = {
    //     // color: 'green',
    //     fontSize: 30,
    //     fontWeight: "bold"
    // };
    
    // rendertags()
    // {
    //     if (this.state.tags.length===0) return <p>There are no tags</p>
    //     return <ul>{this.state.tags.map(tag => <li key={ tag}>{ tag}</li> )}</ul>
    // }
  
     
    
    render() { 
        console.log(this.props);
        console.log();
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl } alt=""/> */}
                {/* {this.props.children}
                {this.props.counter.id} */}
               
                <span style={this.styles} className={this.changeColor() }>{ this.formatCount()} </span>
                <button onClick={() => this.props.onInc(this.props.counter)} className='btn btn-secondary btn-sm'> Increment </button>
                <button onClick={() => this.props.onDec(this.props.counter)} className='btn btn-secondary btn-sm'> Decrement </button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete( this.props.counter.id )}>Delete</button>
                {/* {this.state.tags.length===0 && 'Please create a new tag'} */}
                {/* {this.rendertags()} */}
               
                </React.Fragment>
        );
    }
     
    changeColor() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
       let count = this.props.counter.value;
       // alert()
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;


