 
let str="Javatpoint"; 
console.log(str.charAt(4));
console.log(str.charAt());//print first character  
console.log(str.charAt(str.length-1)); 

let web="Learn JavaScript on Javatpoint";  
console.log(web.indexOf('a'));  
console.log(web.indexOf('a',3));  
console.log(web.indexOf("Java"));
console.log(web.indexOf("Java",7));  
console.log(web.indexOf("java"));  

let str1="JavaScript is a scripting language. Scripting languages are often interpreted";    
console.log(str1.search("scripting"));  
console.log(str1.search(/Scripting/)); 
console.log(str1.search(/Scripting/i));  
console.log(str1.search(/Javatpoint/));

let str2="Javatpoint"; 
console.log(str2.match(/Java/g)); 
console.log(str2.match(/java/g));
console.log(str2.match(/java/g)); 
console.log(str2.match(/java/gi)); 
console.log(str2.match(/[a-p]/g));  
console.log(str2.match("Java"));  
console.log(str2.replace("tpoint","Script"));

let str3 = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework."; 
console.log(str3.replace(/Node.js/g,"AngularJS")); 
console.log(str3.replace(/Node.js/,"AngularJS")); //It will replace only first match.  
console.log(str3.replace(/Node.JS/g,"AngularJS"));   
console.log(str3.replace(/Node.JS/gi,"AngularJS"));   

let str4 = "Javatpoint";  
console.log(str4.substring(0,4));
console.log(str4.substring(0,4));  
console.log(str4.substring(4,5));
console.log(str4.substring(5));
console.log(str4.substring());
console.log(str4.toLowerCase());
console.log(str4.toUpperCase());
console.log(str4.valueOf());  

let s1="     javascript trim    ";  
let s2=s1.trim();  
console.log(s2);

let str5 = "This is JavaTpoint website"; 
console.log(str.split(" ")); //splits the given string.  



