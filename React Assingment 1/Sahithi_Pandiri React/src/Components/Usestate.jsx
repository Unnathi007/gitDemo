import { useState } from "react";

function App1() {
  const [name, setName] = useState("Samatha");
  const change = (x) => {
    setName(x)
  }
  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={()=>change("x")}> Click me </button>
    </div>
  );
}

export default App1;
