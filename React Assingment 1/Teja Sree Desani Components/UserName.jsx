import { useState, useEffect } from "react";

function UserName() {
  //   const [name, setName] = useState("Samatha");
  //   const changeName = () => {
  //   setName("SamathaAmbati");
  //   };

  //   return (
  //     <div>
  //     <p>My name is {name}</p>
  //     <button onClick={changeName}> Click me </button>
  //     </div>

  //   );

  // const [name, setName] = useState("");

  //     return (
  //     <div>
  //     <form>
  //     <input
  //             type="text"
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //             placeholder="Your Name"
  //         />
  //     <p>{name}</p>
  //     </form>
  //     </div>
  // );

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log(`You have clicked the button ${count} times`);
    // },[count]);
    // return (
    //     <div>
    //         <button onClick={() => setCount(count + 1)}>Click me</button>
    //     </div>
    // );


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

export default UserName;
