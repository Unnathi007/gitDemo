const Person={
    talk(){
        setTimeout(function(){
            console.log("this",this)},1000
        )
    }
}
Person.talk();
const Person1={
    talk(){
        setTimeout(()=>{
            console.log("this",this)},1000)
    }
}
Person1.talk();