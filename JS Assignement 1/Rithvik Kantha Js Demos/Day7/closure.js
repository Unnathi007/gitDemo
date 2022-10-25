// Define the closure

// var rentPrice = function(initialRent) {

//    // var rent = initialRent;
//             function display() {
//                 return console.log(initialRent);
//             }
//             function increment(amount) {
//                 initialRent += amount;
//                 console.log(initialRent);
//             }
//             function decrement(amount) {
//                 initialRent -= amount;
//                 console.log(initialRent);
//             }

//     }

//     var Rent = rentPrice(8000);
    
    // Access the private methods
// myFunction();
// console.log( a );

// function myFunction() {
//   a = 4;
// } 

// const person = {
//     name:"elon",
//     walk() {
//         console.log(this)
//     }
// }
// const person={

//     name:'Mosh',

//     k:0,

//     walk(){
//         console.log(this.k)

//     },

//     talk(){}

// };

// person.walk()
// let b = person.walk;
// b()
const person = {
    talk(){
        setTimeout(()=>{
            console.log("this", self)
        
        },4000)
    }
}
person.talk()