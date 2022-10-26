// fun1();
// var b=10
// console.log(a);

// function fun1(){

//   let  a=10;
// }

// 'use strict'
// x=10
// console.log(x);
function isBrowser() {
  
  // Check if the environment is Node.js
  if (typeof process === "object" &&
      typeof require === "function") {
      console.log('in node');
  }

  // Check if the environment is
  // a Service worker
  else if (typeof importScripts === "function") {
      return('in service worker');
  }

  // Check if the environment is a Browser
  else if (typeof window === "object") {
      return('in browser');
  }
}

// Calling a alert if the environment is Browser
// if (isBrowser()) {
//   alert("The Environment is Browser....")
// }
let s=isBrowser()
console.log(s);
