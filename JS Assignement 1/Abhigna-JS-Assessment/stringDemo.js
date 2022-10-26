let sentence = "new sentence" 
let sentence2 = new String("Learn JavaScript on Javatpoint");

console.log(sentence2.charAt(2));
console.log(sentence2.charAt());
console.log(sentence2.charAt(sentence2.length-1));
console.log(sentence2.indexOf('a'));
console.log(sentence2.indexOf('a',3));
console.log(sentence2.indexOf("java"));
console.log(sentence2.indexOf("java",7))
console.log(sentence2.indexOf("java"));
console.log(sentence2.search("on"));
console.log(sentence2.search("is"))
console.log(sentence2.search(/Learn/))
console.log(sentence2.search(/Learn/i))
console.log(sentence2.search(/Java/))
console.log(sentence2.match(/Java/g));
console.log(sentence2.match(/java/gi));
console.log(sentence2.replace("Learn","learn"));
console.log(sentence2.replace(/Java/g,"jAvA"));
console.log(sentence2.replace(/jAvA/gi,"java"));
console.log(sentence2.substring(0,4));
console.log(sentence2.substring());
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());
console.log(sentence2.valueOf());
console.log(sentence2.trim());
console.log(sentence2.split());