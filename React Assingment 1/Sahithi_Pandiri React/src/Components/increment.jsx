import { useState, useEffect } from "react";
function App() {

    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log(`You have clicked the button ${count} times`)
    });
    return (
  <div>
    <span>{count}</span>{}
  <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
    );
  }
  export default App;