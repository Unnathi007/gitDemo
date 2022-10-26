console.log('Before')
getUser(1,function(user){
    console.log(user)
})
console.log("after")
function getUser(id,callBack){
    setTimeout(()=>{
        console.log("reading")},2000)
        
    }
