const person ={
    talk(){
        var self =this;
        setTimeout(function(){
            console.log("this", self);
        },1000)
    }
};
person.talk();


const person2 ={
    walk(){
        //var self =this;
        setTimeout(()=>{
            console.log("this", this);
            //console.log('lol');
        },1000)
    }
};
 person2.walk();
const t=person2.walk.bind(person2);
t();