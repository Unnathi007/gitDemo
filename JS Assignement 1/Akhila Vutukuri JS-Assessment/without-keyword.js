
/*fun1();
console.log(abcg);
function fun1(){
    abcg=10;
}
*/

/*const person ={
    name:"akhila",
    walk(){
       console.log(this)
    }
}

//person.walk();
var w = person.walk;
console.log(w());
*/

const person = {
    
    talk(){
        var a = this;
        setTimeout(function(){
            console.log(a)
        },2000);
    }
}

person.talk();




