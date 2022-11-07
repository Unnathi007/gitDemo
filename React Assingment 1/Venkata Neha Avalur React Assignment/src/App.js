import React,{Component} from "react";
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/Home1";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import {BrowserRouter} from "react-router-dom";
import About from "./components/About";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <div className="content">
//         <Routes>
//           <Route path="/products" element={<Products/>}/>
//           <Route path="/posts" element={<Posts/>}/>
//           <Route path="/admin" element={<Dashboard/>}/>
//           <Route path="/" element={<Home/>}/>
//         </Routes>
//         </div>
//       </div>
//     );
//   }
// }


function App() {
	
return (
	<>
<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/about" element={<About/>}/>
	</Routes>
	</>
);
}

export default App;