import { useState, useEffect } from "react";

function Hooks() {
 
  const [name, setName] = useState("Samatha");
 
  const changeName = () => {
  setName("SamathaAmbati");
  };
 
  return (
 
    <div>
<p>My name is {name}</p>
<button onClick={changeName}> Click me </button>
</div>
  );
}

function IncreaseWithDependency() {
  let [ count, SetCount ] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button 1 ${ count } times`)
  }, [count]);

  let [ count2, SetCount2 ] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button 2 ${ count2 } times`)
  }, [count2]);

  return (
    <div>
      <button onClick={() => SetCount(count + 1)}>button 1</button>
      <button onClick={() => SetCount2(count2 + 1)}>button 2</button>
    </div>
  );
}

function IncreaseWithoutDependency() {
  let [ count, SetCount ] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button 1 ${ count } times`)
  });

  let [ count2, SetCount2 ] = useState(0);
  useEffect(() => {
    console.log(`You have clicked the button 2 ${ count2 } times`)
  });

  return (
    <div>
      <button onClick={() => SetCount(count + 1)}>button 1</button>
      <button onClick={() => SetCount2(count2 + 1)}>button 2</button>
    </div>
  );
}

function Hooks2() {
  const [name, setName] = useState("");
 
  return (
    
<div>
    <Hooks />
<form>
<input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
<p>{name}</p>
</form>
<IncreaseWithDependency />
<IncreaseWithoutDependency />
</div>
  );
}
 
export default Hooks2;