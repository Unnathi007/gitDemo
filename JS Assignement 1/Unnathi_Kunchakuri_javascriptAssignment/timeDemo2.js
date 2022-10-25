// console.log("Before")
// setTimeout(()=>{console.log('Read a user from DB')},2000)
// console.log("after")

console.log("before")

const user= getUser(1,function(user){
    console.log('User',user);

});

//console.log(user)

console.log("after")

function getUser(id,callback){

    setTimeout(()=>{

        console.log("reading a user from database")

        callback({i_d:id,gitname:"josh"});

    },2000)

}


