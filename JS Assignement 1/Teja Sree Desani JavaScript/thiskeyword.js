const Person = {
    name: 'teja',
    walk(){
        console.log(this);
    }
}

Person.walk()

const pq = Person.walk.bind(Person)
pq()



const person={
    talk(){
        setTimeout(function(){
            console.log('this',this);
        },1000)
    }
}
person.talk()

let t=person.talk
t()



const person1={
    talk(){
        let self = this
        setTimeout(function(){
            console.log('self',self);
        },1000)
    }
}
person1.talk()

let q=person1.talk
q()

const person2={
    talk(){
        setTimeout(()=>{
            console.log('this',this);
        },1000)
    }
}
person2.talk()

console.log(typeof(Person));