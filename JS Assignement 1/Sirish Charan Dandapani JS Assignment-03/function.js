function square(a) {
    console.log(`Normal function ${a*a}`)
}

let hello = function square(a) {
    console.log(`Name function: ${a*a}`)
}

let hello1 = function (a) {
    console.log(`Nameless function: ${a*a}`)
}

let hello2 = (a) => console.log(`Arrow function: ${a*a}`)

hello(3)
hello1(3)
hello2(3)

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true},
]

const activeJobs = jobs.filter(function(job) { return job.isActive })
const activeJobs1 = jobs.filter(job => job.isActive)
console.log(activeJobs)

const perosn = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000)
    }
}

perosn.talk()