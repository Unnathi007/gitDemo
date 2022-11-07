import { useState, useEffect } from "react";
function UseEffectEx2() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button ${count} times`);
  }, [count]);
    useEffect(() => {
      console.log(`You have clicked the button 2 ${count} times`);
    }, [count2]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
}
export default UseEffectEx2;
