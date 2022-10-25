console.log("before")
const user= getUser(1)
console.log(user)

function getUser(id){
    
    setTimeout(()=>{
        console.log("Reading db");
        return{id: id,name:"hinam"};

    },4000);
}

//doenot work\