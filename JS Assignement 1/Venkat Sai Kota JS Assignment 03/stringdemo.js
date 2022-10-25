console.log("***************************")
var str="Javatpoint";  
console.log(str.charAt(4));  
  
console.log("***************************")
var str="Javatpoint";  
console.log(str.charAt());//print first character  
 

console.log("***************************")  
var str="Javatpoint";  
console.log(str.charAt(str.length-1));  



console.log("***************************")  
var web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf('a'));  
  

console.log("****************************")  
var web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf('a',3));  
  


console.log("****************************")  
var web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf("Java"));  


console.log("****************************")  
var web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf("Java",7));  
 

  
console.log("****************************")
var web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf("java"));  
  

console.log("****************************")
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search("scripting"));  


console.log("****************************")  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search(/Scripting/g));   
  

console.log("****************************")  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search(/Scripting/i));  
 

console.log("****************************")  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search(/Javatpoint/));  
  


console.log("****************************") 

var str="Javatpoint";  
console.log(str.match(/Java/));
console.log(str.match(/Java/g))  
 


console.log("****************************")   
var str="Javatpoint";  
console.log(str.match(/java/g));  
 

console.log("****************************")   
var str="Javatpoint";  
console.log(str.match(/java/gi));  
  

console.log("****************************")   
var str="Javatpoint";  
console.log(str.match(/[a-p]/g));  
  

console.log("****************************")   
var str="Javatpoint";  
console.log(str.match(/[a-p]/));//return the first match  


 console.log("****************************")  
var str="Javatpoint";  
console.log(str.match("Java"));  
 

console.log("****************************")   
var str="Javatpoint";  
console.log(str.replace("tpoint","Script"));  


console.log("****************************")   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str.replace(/Node.js/g,"AngularJS"));  
  

 console.log("****************************")  
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str.replace(/Node.js/,"AngularJS")); //It will replace only first match.  


 console.log("****************************")  
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str.replace(/Node.JS/g,"AngularJS"));  
  

console.log("****************************")   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str.replace(/Node.JS/gi,"AngularJS"));  
 


 console.log("****************************")  
var str="Javatpoint";  
console.log(str.substring(0,4));  


 console.log("****************************")  
var str="Javatpoint";  
console.log(str.substring(4,5));  


console.log("****************************")   
var str="Javatpoint";  
console.log(str.substring(5));  
 

 console.log("****************************")  
var str="Javatpoint";  
console.log(str.substring());  


 console.log("****************************")  
var str = "JAVATPOINT";  
console.log(str.toLowerCase());  


 console.log("****************************")  
var str = "javatpoint";  
console.log(str.toUpperCase());  
  

 console.log("****************************")  
var str="Javatpoint";  
console.log(str.valueOf());  


 console.log("****************************")  
var s1="     javascript trim    ";  
var s2=s1.trim();  
console.log(s2);  


 console.log("****************************")  
var str="This is JavaTpoint website";  
console.log(str.split(" ")); //splits the given string.  
 

