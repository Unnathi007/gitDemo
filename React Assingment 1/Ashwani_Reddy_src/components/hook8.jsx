//import useRef hook
import React, { useRef } from "react"
 
export default function Hook8() {
  //create a variable to store the reference 
  const nameRef = useRef();
 
  function handleSubmit(e) {
    //prevent page from reloading on submit
    e.preventDefault()
    //output the name
    console.log(nameRef.current.value)
  }
 
  return (
<div className="container">
<form onSubmit={handleSubmit}>
<div className="input_group">
<label>Name</label>
<input type="text" ref={nameRef}/>
</div>
<input type="submit"/>
</form>
</div>
  )
}

