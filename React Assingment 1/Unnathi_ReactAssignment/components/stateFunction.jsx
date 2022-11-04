// import { useState } from "react";
 
// function App() {
 
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
// }
 
// export default App;
// function App() {
//     const [name, setName] = useState("");
   
//     return (
//   <div>
//   <form>
//   <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Your Name"
//           />
//   <p>{name}</p>
//   </form>
//   </div>
//     );
//   }
   
//   export default App;
// import { useState, useEffect } from "react";function App() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       console.log(`You have clicked the button ${count} times`)
//       var p=document.getElementById("hi");
//       p.innerText=`You have clicked the button ${count} times`;
//     },[count]);
//     return (
//   <div>
//     <div id="hi"></div>
//   <button onClick={() => setCount(count + 1)}>Click me</button>
//   </div>
//     );
//   }
//   export default App;
import { useState, useEffect } from "react";
 
function App() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);
 
  const [count2, setCount2] = useState(0);
 
  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);
 
  return (
<div>
<button onClick={() => setCount(count + 1)}>Click me</button>
<button onClick={() => setCount2(count2 + 1)}>Click me</button>
</div>
  );
}
export default App;