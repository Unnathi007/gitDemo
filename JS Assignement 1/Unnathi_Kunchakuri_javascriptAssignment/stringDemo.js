str=new String("Learn JavaScript on Javatpoint");
console.log("char at index 4 : ",str.charAt(4));

var str="Javatpoint";  
console.log("default working of charat : ",str.charAt());//print first character  
 

  
var str="Javatpoint";  
console.log("char at length -1 : ",str.charAt(str.length-1));  



  
var web="Learn JavaScript on Javatpoint";  
console.log("index of a char : ",web.indexOf('a'));  
  

  
var web="Learn JavaScript on Javatpoint";  
console.log("index of char after certain starting point : ",web.indexOf('a',3));  
  


  
var web="Learn JavaScript on Javatpoint";  
console.log("index of a substring : ",web.indexOf("Java"));  


  
var web="Learn JavaScript on Javatpoint";  
console.log("index of a string after certain index or starting point : ",web.indexOf("Java",7));  
 

  
var web="Learn JavaScript on Javatpoint";  
console.log("starting index of string when multiple substrings are present : ",web.indexOf("java"));  
  


  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log("search function : ",str.search("scripting"));  


  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log("str.search(/Scripting/) : ",str.search(/Scripting/));   
  

  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log("str.search(/Scripting/i) : ",str.search(/Scripting/i));  
 

  
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log("str.search(/Javatpoint/) : ",str.search(/Javatpoint/));  
  


  
var str="Javatpoint Java";  
console.log("str.match(/Java/g) : ",str.match(/Java/g));  
 


  
var str="Javatpoint";  
console.log("str.match(/java/g) : ",str.match(/java/g));  
 

  
var str="Javatpoint";  
console.log("str.match(/java/gi) : ",str.match(/java/gi));  
  

  
var str="Javatpoint";  
console.log("str.match(/[a-p]/g) :  ",str.match(/[a-p]/g));  
  

  
var str="Javatpoint";  
console.log("str.match(/[a-p]/) : ",str.match(/[a-p]/));//return the first match  


  
var str="Javatpoint";  
console.log("str.match('Java') : ",str.match("Java"));  
 

  
var str="Javatpoint";  
console.log("str.replace('tpoint','Script' : ",str.replace("tpoint","Script"));  


  
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log("str.replace(/Node.js/g,'AngularJS') : ",str.replace(/Node.js/g,"AngularJS"));  
  

  
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log("str.replace(/Node.js/,'AngularJS' : ",str.replace(/Node.js/,"AngularJS")); //It will replace only first match.  


  
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log("str.replace(/Node.JS/g,'AngularJS' : ",str.replace(/Node.JS/g,"AngularJS"));  
  

  
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log("str.replace(/Node.JS/gi,'AngularJS' : ",str.replace(/Node.JS/gi,"AngularJS"));  
 


  
var str="Javatpoint";  
console.log("str.substring(0,4) : ",str.substring(0,4));  


  
var str="Javatpoint";  
console.log("str.substring(4,5) : ",str.substring(4,5));  


  
var str="Javatpoint";  
console.log("str.substring(5) : ",str.substring(5));  
 

  
var str="Javatpoint";  
console.log("str.substring() : ",str.substring());  


  
var str = "JAVATPOINT";  
console.log("str.toLowerCase() : ",str.toLowerCase());  


  
var str = "javatpoint";  
console.log("str.toUpperCase() : ",str.toUpperCase());  
  

  
var str=1;//"Javatpoint";  
console.log(typeof(str));
console.log(typeof(str.valueOf()));
console.log("str.valueOf() : ",str.valueOf());  


  
var s1="     javascript trim    ";  
var s2=s1.trim();  
console.log("2 : trimed ",s2);  //removes white spaces at end and start


  
var str="This is JavaTpoint website";  
console.log("str.split(' ') : s",str.split(" ")); //splits the given string.  
 

