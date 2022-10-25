const person={
    i:0,
    talk(){
        setTimeout(()=>{
            console.log("this",this)
        },1000);
    }
}
person.talk();