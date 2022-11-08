import { useState , useEffect} from "react";
function HooksCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button ${count} times`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>{count}</p>
    </div>
  );
}

export default HooksCounter;
