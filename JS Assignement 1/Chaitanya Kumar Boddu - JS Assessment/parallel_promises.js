const p1 = new Promise((resolve) => {

    setTimeout(() => {

        console.log("executing P1")

    }, 2000)

})



const p2 = new Promise((resolve) => {

    setTimeout(() => {

        console.log("executing P2")

    }, 2000)

})



Promise.all([p1, p2])