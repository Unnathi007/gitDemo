import React, { Component } from "react";
import { useState , useEffect } from "react";
import useFetchData from "./useFetchData";
function LifeCycle() {
  const [count, increment] = useState(0);
  const {data} = useFetchData("https://api.github.com/users");
  console.log(data);
  var value = 0;
  useEffect(() => {
    console.log(`Clicked ${count} times`);
  },[count])
  return (
    <React.Fragment>
      <button onClick={() => increment(count + 1)}>Click Me</button>
    </React.Fragment>
  );
}
export default LifeCycle;