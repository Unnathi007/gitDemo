var str = "Javatpoint";
console.log(2, str.charAt(4));
var str = "Javatpoint";
console.log(4, str.charAt()); //print first character  
var str = "Javatpoint";
console.log(6, str.charAt(str.length - 1));
var web = "Learn JavaScript on Javatpoint";
console.log(8, web.indexOf('a'));
var web = "Learn JavaScript on Javatpoint";
console.log(10, web.indexOf('a', 3));
var web = "Learn JavaScript on Javatpoint";
console.log(12, web.indexOf("Java"));
var web = "Learn JavaScript on Javatpoint";
console.log(14, web.indexOf("Java", 7));
var web = "Learn JavaScript on Javatpoint";
console.log(16, web.indexOf("java"));
var str = "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(18, str.search("scripting"));
var str = "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(20, str.search(/Scripting/));
var str = "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(22, str.search(/Scripting/i));
var str = "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(24, str.search(/Javatpoint/));
var str = "Javatpoint";
console.log(26, str.match(/Java/g));
var str = "Javatpoint";
console.log(28, str.match(/java/g));
var str = "Javatpoint";
console.log(30, str.match(/java/gi));
var str = "Javatpoint";
console.log(32, str.match(/[a-p]/g));
var str = "Javatpoint";
console.log(34, str.match(/[a-p]/)); //return the first match  
var str = "Javatpoint";
console.log(36, str.match("Java"));
var str = "Javatpoint";
console.log(38, str.replace("tpoint", "Script"));
var str = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
console.log(40, str.replace(/Node.js/g, "AngularJS"));
var str = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
console.log(42, str.replace(/Node.js/, "AngularJS")); //It will replace only first match.  
var str = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
console.log(44, str.replace(/Node.JS/g, "AngularJS"));
var str = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
console.log(46, str.replace(/Node.JS/gi, "AngularJS"));
var str = "Javatpoint";
console.log(48, str.substring(0, 4));
var str = "Javatpoint";
console.log(50, str.substring(4, 5));
var str = "Javatpoint";
console.log(52, str.substring(5));
var str = "Javatpoint";
console.log(54, str.substring());
var str = "JAVATPOINT";
console.log(56, str.toLowerCase());
var str = "javatpoint";
console.log(58, str.toUpperCase());
var str = "Javatpoint";
console.log(60, str.valueOf());
var s1 = "     javascript trim    ";
var s2 = s1.trim();
console.log(63, s2);
var str = "This is JavaTpoint website";
console.log(65, str.split(" ")); //splits the given string.  