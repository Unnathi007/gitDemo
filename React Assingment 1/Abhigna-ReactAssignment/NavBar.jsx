import React,{Component} from 'react';

class  NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <nav class="navbar navbar-light bg-light">
             <span class="navbar-brand mb-0 h1">Navbar {this.props.totalCounters}</span>
         </nav>
            </>
        );
    }
}
 
export default NavBar;      
// const  NavBar = (props) => {
//     return 
//     (
        
//             <nav class="navbar navbar-light bg-light">
//             <span class="navbar-brand mb-0 h1">Navbar {props.totalCounters}</span>
//             </nav>
        
        
//     );
// }
 
// export default NavBar;