// const person = {
//     talk(){
//         setTimeout(function(){
//             console.log("this",self);
//         },3000);
//     }
// };

// person.talk();

// Alternatives for accessing this

const person = {
    talk(){
        setTimeout(() => {
            console.log("this",this);
        },3000);
    }
};

person.talk();