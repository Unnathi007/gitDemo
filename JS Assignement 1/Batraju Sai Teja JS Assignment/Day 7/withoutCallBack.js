console.log("Before");
let user = f1(1);
console.log(user);
console.log("After");

function f1(id){
    setTimeout(() => {
        console.log("Reading a user data");
        return "data is fetched";
    },2000);
}