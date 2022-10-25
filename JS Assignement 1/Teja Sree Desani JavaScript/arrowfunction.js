const jobs=[
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]

const activejobs = jobs.filter(function(job) {return !job.isActive})
const activejobs1 = jobs.filter(job => job.isActive)

console.log(activejobs);
console.log(activejobs1);