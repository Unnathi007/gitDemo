// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./component/home";
// import About from "./component/about";
// import Contact from "./component/contact";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <ul className="App-header">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//           <Routes>
//             <Route exact path="/" element={<Home />}></Route>
//             <Route exact path="/about" element={<About />}></Route>
//             <Route exact path="/contact" element={<Contact />}></Route>
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Profile from "./component/profile";
import Location from "./component/location";
import Umatch from "./component/umatch";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profile/:userName&:empid$:team" element={<Profile />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/umatch/:userName" element={<Umatch />} />
        </Routes>
      </BrowserRouter>
      <div>learn react</div>
    </>
  );
}

export default App;
