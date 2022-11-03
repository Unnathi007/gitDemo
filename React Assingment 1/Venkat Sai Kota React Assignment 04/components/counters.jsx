import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment><Counter /><Counter /></React.Fragment>
        );
    }
}
 
export default Counters