console.log("before")

const p=getUser(1)

p.then(user=>console.log(user));

console.log("after")

function getUser(id){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("reading a user from a database")

            resolve({id:1,gitusername:"keerthi"})

        },2000)

    })

}