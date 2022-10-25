
// const Person={
//     talk(){
//         setTimeout(()=>{
//             console.log("this",this)
//         },2000)
//     }
// }

// Person.talk()

// let p=Person.talk
// p()



const pen={
    talk(){
        setInterval(()=>{
            console.log('This',this);
        },2000)
    }

}

pen.talk()

let pq=pen.talk.bind(pen)
pq()
