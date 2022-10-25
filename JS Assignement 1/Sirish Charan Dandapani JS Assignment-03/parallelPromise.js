const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("executing P1")
    }, 2000)
})
const p2 = new Promise((promise, reject) => {
    setTimeout(() => {
        reject("execution p2")
    }, 2000)
})

let value = Promise.all([p1, p2])
console.log(value)