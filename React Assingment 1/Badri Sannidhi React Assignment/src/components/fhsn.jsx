import { useState } from 'react';
//import React from 'react';
//import React, { Component } from 'react';


function Fhsn() {
  const [name, setName] = useState("Badri");

  const changeName = () => {
    setName("alphonse");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

export default Fhsn;
