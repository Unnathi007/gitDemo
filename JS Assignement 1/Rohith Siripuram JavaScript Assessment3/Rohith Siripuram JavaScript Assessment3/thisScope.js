
// const person= {
//     name:'Rohith',
//     talk(){
//         var self=this
//         setTimeout(function() {
//             console.log("this",self);
//         }, 1000);
//     }
// }

// person.talk();

const person= {
    name:'Rohith',
    talk(){
        setTimeout(() => {
            console.log("this",this);
        }, 1000);
    }
}

person.talk();

