   
var str="Javatpoint";  
  console.log("STR.CHARAT()", str.charAt(4));  
    

   
var str="Javatpoint";  
  console.log("STR.CHARAT()", str.charAt());//print first character  
   

   
var str="Javatpoint";  
  console.log("STR.LENGTH()",str.charAt(str.length-1));  
  


   
var web="Learn JavaScript on Javatpoint";  
  console.log("STR.IndexOf()",web.indexOf('a'));  
    

   
var web="Learn JavaScript on Javatpoint";  
  console.log("STR.IndexOf",web.indexOf('a',3));  
    


   
var web="Learn JavaScript on Javatpoint";  
  console.log(web.indexOf("Java"));  
  

    
var web="Learn JavaScript on Javatpoint";  
  console.log(web.indexOf("Java",7));  
   

   
var web="Learn JavaScript on Javatpoint";  
  console.log(web.indexOf("java"));  
    

console.log("*****STR.search*******")
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
  console.log(str.search("scripting"));  
  

   
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
  console.log(str.search(/Scripting/));   
    

   
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
  console.log(str.search(/Scripting/i));  
   

   
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
  console.log(str.search(/Javatpoint/));  
    


  console.log("*****STR.match*******")
   
var str="Javatpoint";  
  console.log(str.match(/Java/g));  
   


   
var str="Javatpoint";  
  console.log(str.match(/java/g));  
   

   
var str="Javatpoint";  
  console.log(str.match(/java/gi));  
    

   
var str="Javatpoint";  
  console.log(str.match(/[a-p]/g));  
    

   
var str="Javatpoint";  
  console.log(str.match(/[a-p]/));//return the first match  
  

   
var str="Javatpoint";  
  console.log(str.match("Java"));  
   

console.log("*****STR.replace*******")
var str="Javatpoint";  
  console.log(str.replace("tpoint","Script"));  
  

   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
  console.log(str.replace(/Node.js/g,"AngularJS"));  
    

   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
  console.log(str.replace(/Node.js/,"AngularJS")); //It will replace only first match.  
  

   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
  console.log(str.replace(/Node.JS/g,"AngularJS"));  
    

   
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
  console.log(str.replace(/Node.JS/gi,"AngularJS"));  
   


  console.log("*****STR.substring*******")   
var str="Javatpoint";  
  console.log(str.substring(0,4));  
  

   
var str="Javatpoint";  
  console.log(str.substring(4,5));  
  

   
var str="Javatpoint";  
  console.log(str.substring(5));  
   

   
var str="Javatpoint";  
  console.log(str.substring());  
  

   
var str = "JAVATPOINT";  
  console.log("str.toLowerCase ",str.toLowerCase());  
  

   
var str = "javatpoint";  
  console.log("str.toUpperCase ",str.toUpperCase());  
    

   
var str="Javatpoint";  
  console.log("str.valueOf ",str.valueOf());  
  

   
var s1="     javascript trim    ";  
var s2=s1.trim();  
  console.log("str.trim ",s2);  
  

   
var str="This is JavaTpoint website";  
  console.log("str.split ",str.split(" ")); //splits the given string.  
   

