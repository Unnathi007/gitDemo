import { useState, useEffect } from "react";
 
export default function Count2() {
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
<button onClick={() => setCount(count + 1)}>Click me-2</button>
<button onClick={() => setCount2(count2 + 1)}>Click me-3</button>
</div>
  );
}