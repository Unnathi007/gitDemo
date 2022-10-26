setTimeout(greet(sayName,'john'),2000)
sayName('john')
function greet(callback,name){
    console.log("hello wolrd")
    callback(name);
}
function sayName(name){
    console.log("hello",name)
}
