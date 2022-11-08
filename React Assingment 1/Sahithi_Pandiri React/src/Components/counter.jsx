import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends Component {
    state = {
        count : 1,
        //imageURL : 'https://picsum.photos/200'
        tags : ["tag1","tag2","tag3"]
     };
     styles = {
        fontSize:50,
        fontWeight:"bold",
        "color" : "black"
     };
    render() {
        let classes = this.badgeClass(); 
        return(
            <React.Fragment>
            <h1> Hello World </h1>
            <span className={classes}>Hello World</span>
            <ul>
                {
                    this.state.tags.map(tag => <li key = {tag}>{tag}</li>)
                }
            </ul>
            </React.Fragment>
        );
    }
    badgeClass() {
        let classes = "badge badge-";
        classes += (this.state.count == 0) ? "primary" : "danger";
        return classes;
    }

    formatCount()
    {
        const {count} = this.state;
        return count === 0? "Zero":count;

    }
}
 
export default Counter;