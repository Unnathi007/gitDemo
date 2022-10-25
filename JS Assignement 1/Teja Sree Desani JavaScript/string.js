let sen1 = 'sentence One'
let sen2 = new String('string 2')

console.log(sen1.charAt(5)) // char at index 5

console.log(sen2.charAt()) //start char

console.log(sen1.charAt(sen1.length-1)) //end char

console.log(sen1.indexOf('e')) //index of a char

console.log(sen1.indexOf('e',5)) // index of e from 5th index

 

var web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf("Java"));  
 
console.log(web.indexOf("Java",7));  
   
console.log(web.indexOf("java"));  
 

   
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search("scripting"));  
  
console.log(str.search(/Scripting/));   
   
console.log(str.search(/Scripting/i));  
  
console.log(str.search(/Javatpoint/));  
   

   
var str="Javatpoint";  
console.log(str.match(/Java/g));  
  
console.log(str.match(/java/g));  
  
console.log(str.match(/java/gi));  
   
console.log(str.match(/[a-p]/g));  
   
console.log(str.match(/[a-p]/));//return the first match  
 
console.log(str.match("Java"));  
  
console.log(str.replace("tpoint","Script"));  
 

   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str.replace(/Node.js/g,"AngularJS"));  
    
console.log(str.replace(/Node.js/,"AngularJS")); //It will replace only first match.  
  
console.log(str.replace(/Node.JS/g,"AngularJS"));  
   
console.log(str.replace(/Node.JS/gi,"AngularJS"));  
  


var str="Javatpoint";  
console.log(str.substring(0,4));  

console.log(str.substring(4,5));  
 
console.log(str.substring(5));  
  
console.log(str.substring());  
 

   
var str = "JAVATPOINT";  
console.log(str.toLowerCase());  
 
var str = "javatpoint";  
console.log(str.toUpperCase());  
   
var str="Javatpoint";  
console.log(str.valueOf());  
   
var s1="     javascript trim    ";  
var s2=s1.trim();  
console.log(s2);  
   
var str="This is JavaTpoint website";  
console.log(str.split(" ")); //splits the given string.  