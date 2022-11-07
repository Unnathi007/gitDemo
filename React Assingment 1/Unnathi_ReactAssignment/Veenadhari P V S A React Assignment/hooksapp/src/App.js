
import './App.css';
import { useState,useEffect } from "react";

function App() {
//   const [name, setName] = useState("Samatha");
 
//   const changeName = () => {
//   setName("SamathaAmbati");
//   };
 
//   return (
 
//     <div>
// <p>My name is {name}</p>
// <button onClick={changeName}> Click me </button>
// </div>
//   );

// const [name, setName] = useState("");
 
// return (
// <div>
// <form>
// <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Your Name"
//       />
// <p>{name}</p>
// </form>
// </div>
// );

const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`You have clicked the button ${count} times`)
},[count]);
return (
<div>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}

export default App;
