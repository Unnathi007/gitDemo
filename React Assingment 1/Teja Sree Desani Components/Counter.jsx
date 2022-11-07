    import React, { Component, Fragment } from 'react';

class Counter extends Component {
    state = {
        count :0,
        propertyvalue: this.props,
        
        tags: []
      } ;
      
      styles={
        fontSize: 20,
        fontWeight: 'bold'
      };


      handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count+1})
      }

      handleDecrement = product => {
        console.log(product);
        this.setState({count: this.state.count-1})
      }
    render() { 
        // console.log(this.state.propertyvalue);
         
        let classes = this.changeColor();

        return(
            <div>
                <span>{this.state.count}</span>
                <span style= {this.styles} className= {classes}>{this.formatCount()}</span>


                <button 
                    className='btn btn-warning btn-sm' 
                    onClick={()=>this.handleIncrement({id:1, name:'car'})}
                >
                    Increment
                </button>

                <button 
                    className='btn btn-info btn-sm' 
                    onClick={()=>this.handleDecrement({id:1, name:'car'})}
                >
                    Decrement
                </button>

                <button 
                    onClick={()=>this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                
            </div>
        );
    }
    changeColor() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'secondary' : "primary";
        return classes;
    }

    //deformatting
    formatCount(){
        const {count} = this.state;
        return count===0 ? 'Zero' : count;
    }
}
 
export default Counter;