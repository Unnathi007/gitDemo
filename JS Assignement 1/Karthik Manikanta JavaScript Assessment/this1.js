/*
const person={
    talk(){
        setTimeout(function(){
            console.log("this", this)
        },2000)
    }
}
person.talk()
*/

/*
const person={
    talk(){
        var self=this
        setTimeout(function(){
            console.log("self", self)
        },2000)
    }
}
person.talk()
*/

const person={
    talk(){
        setTimeout(()=>{
            console.log("this", this)
        },2000)
    }
}
person.talk()