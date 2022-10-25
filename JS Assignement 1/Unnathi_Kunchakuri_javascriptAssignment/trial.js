const person={
    talk(){
    let self=this;
    setTimeout(function()=>{
    console.log("This",self)
    },2000)
    }
}
    
person.talk();
    
let t=person.talk;
t();
    