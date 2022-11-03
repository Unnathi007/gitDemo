import { useState } from "react";
 
function Hook1() {
 
  const [name, setName] = useState("Ashwani");
 
  const changeName = () => {
  setName("Ashwani Reddy");
  };
 
  return (
 
    <div>
<p>My name is {name}</p>
<button onClick={changeName}> Click me </button>
</div>
  );
}
 
export default Hook1;