console.log("before")
getUser(1, function(user){
    console.log("user",user)
    }
);
console.log("after")
console.log(user)

function getUser(id,callback){
    
    setTimeout(()=>{
        console.log("Reading db");
        
        callback({id:id,name:"hiname"})
        return{id: id,name:"hiname"};

    },4000);
}

//doenot work