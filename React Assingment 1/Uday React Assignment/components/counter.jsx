
import React, { Component } from "react";

class Counter extends Component {
//   state = {
//     count:this.props.counter.value,

//     imageUrl: "https://picsum.photos/200",

//     tags: ["tag1", "tag2", "tag3"],
//   };

  styles = {
    fontSize: 50,

    fontWeight: "bold",
    backgroundColor: "red"
  };

  render() {
    console.log('props',this.props)
    return (
    
      <React.Fragment>
    {this.props.children}
        <span style={this.styles} className={this.dynamicClass()}>
          {this.formatCount()}
        </span>
        <br></br>
        <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
          Increment
        </button>
        &nbsp;&nbsp;
        <button onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">
          Decrement
        </button>

        <button onClick={()=>this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm m-2">DELETE</button>

{/*         <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>tag</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
  dynamicClass() {
    let classes = "badge badge-";

    classes += this.props.counter.value === 0 ? "warning" : "success";

    return classes;
  }


  formatCount = () => {
    let count  = this.props.counter.value;

    return count === 0 ? "Zero" : count;
  };

  increment = () => {
    let value = this.state.count + 10;

    this.setState({ count: value });
  };

  decrement = () => {
    let value = this.state.count - 10;

    this.setState({ count: value });
  };
}

export default Counter;

