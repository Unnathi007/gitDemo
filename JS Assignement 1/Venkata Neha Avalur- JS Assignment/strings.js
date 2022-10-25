// let str="Javatpoint";  
// console.log(str.charAt(4));  
//Answer=t

// let str="Javatpoint";  
// console.log(str.charAt());//print first character  
//Answer=J

// let str="Javatpoint";  
// console.log(str.charAt(str.length-1));  
//Answer=t


// let web="Learn JavaScript on Javatpoint";  
// console.log(web.indexOf('a'));  
//Answer = 2

// let web="Learn JavaScript on Javatpoint";  
// console.log(web.indexOf('a',3));  
// answer=7

// let web="Learn JavaScript on Javatpoint";  
// console.log(web.indexOf("Java"));  
//Answer = 6

// let web="Learn JavaScript on Javatpoint";  
// console.log(web.indexOf("Java",7));  
//Answer = 20

  
// let web="Learn JavaScript on Javatpoint";  
// console.log(web.indexOf("java"));  
//Answer = -1

// let str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search("scripting"));  
//Answer = 16

  
// let str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search(/Scripting/));   
//Answer = 36

  
// let str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search(/Scripting/i));  
//Answer = 16

  
// let str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search(/Javatpoint/));  
//Answer = -1
  
// let str="Javatpoint";  
// console.log(str.match(/Java/g));  
//Answer =['Java']

  
// let str="Javatpoint";  
// console.log(str.match(/java/g));  
//Answer = null

  
// let str="Javatpoint";  
// console.log(str.match(/java/gi));  
//Answer =['Java']
  
// let str="Javatpoint";  
// console.log(str.match(/[a-p]/g));  
//Answer = ['a', 'a', 'p', 'o', 'i', 'n']
  

// let str="Javatpoint";  
// console.log(str.match(/[a-p]/));//return the first match  
//Answer = ['a', index: 1, input: 'Javatpoint', groups: undefined]

  
// let str="Javatpoint";  
// console.log(str.match("Java"));  
//Answer = ['Java', index: 0, input: 'Javatpoint', groups: undefined]
 
 
// let str="Javatpoint";  
// console.log(str.replace("tpoint","Script"));  
//Answer = JavaScript


  
// let str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
// console.log(str.replace(/Node.js/g,"AngularJS"));  
//Answer =  Learn AngularJS on Javatpoint. AngularJS is a well-known JavaScript framework.
  

  
// let str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
// console.log(str.replace(/Node.js/,"AngularJS")); //It will replace only first match.  
//Answer =  Learn AngularJS on Javatpoint. Node.js is a well-known JavaScript framework.

  
// let str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
// console.log(str.replace(/Node.JS/g,"AngularJS"));  
//Answer  Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.

  
// let str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
// console.log(str.replace(/Node.JS/gi,"AngularJS"));  
//Answer= Learn AngularJS on Javatpoint. AngularJS is a well-known JavaScript framework.

  
// let str="Javatpoint";  
// console.log(str.substring(0,4));
//Answer = Java

  
// let str="Javatpoint";  
// console.log(str.substring(4,5));  
//Answer = t


// let str="Javatpoint";  
// console.log(str.substring(5));  
//Answer = point
 
  
// let str="Javatpoint";  
// console.log(str.substring());  
//Answer = Javatpoint

 
// let str = "JAVATPOINT";  
// console.log(str.toLowerCase());  
//Answer= javatpoint
  
// let str = "javatpoint";  
// console.log(str.toUpperCase());  
//Answer = JAVATPOINT

  
// let str="Javatpoint";  
// console.log(str.valueOf());  
//Answer =Javatpoint


  
// let s1="     javascript trim    ";  
// let s2=s1.trim();  
// console.log(s2);  
//Answer = javascript trim


let str="This is JavaTpoint website";  
console.log(str.split(" ")); //splits the given string.  
//Answer = ['This', 'is', 'JavaTpoint', 'website']