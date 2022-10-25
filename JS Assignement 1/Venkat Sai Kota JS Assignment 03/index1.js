const person={
    name:'Mosh',
    k:0,
    walk(){
        // console.log(this.k)
        // this.k+=1
        // this.walk()
        console.log(this)
    },
    talk(){}
};
person.walk();

const walk=person.walk.bind(person)
walk();

