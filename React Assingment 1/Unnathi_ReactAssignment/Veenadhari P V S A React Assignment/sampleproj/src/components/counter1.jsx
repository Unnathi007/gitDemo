import React,{ Component } from "react";

class counter1 extends Component{
    state={
        c:0
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.c}</h1>
                <button class="btn btn-primary" onMouseDownCapture={this.counterProg}>Click</button>
                
                </React.Fragment>
        )
    }
    counterProg=()=>{
        const value=this.state.c+1
        this.setState({c:value})
    }
    }

    
export default counter1;