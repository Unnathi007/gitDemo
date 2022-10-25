const person={
    name:'Mosh',
    walk(){},
    talk(){},
    run(){
        console.log(this);
    }
};

person.talk();
person.run();

const targetMember= 'name';
person[targetMember]='John';
console.log(person.name)

//const run =person.run
//run()
//console.log(run)

//Using Bind
const run = person.run.bind(person);
run()