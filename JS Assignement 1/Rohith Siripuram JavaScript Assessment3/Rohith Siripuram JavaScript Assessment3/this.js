const person = {
    name:"Rohith",
    fun(){
        console.log(this);
    }
}

person.fun()

const walk = person.fun;

walk();