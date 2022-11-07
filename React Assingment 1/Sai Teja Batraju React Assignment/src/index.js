import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import React, { Component } from 'react';


function App() {
    const [inputValue, setInputValue] = useState("");
    var count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);