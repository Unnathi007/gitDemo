import { useState, useEffect } from "react";
function IncHooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button ${count} times`);
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default IncHooks;
