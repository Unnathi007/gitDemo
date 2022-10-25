const jobs=[
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false}
];

const activeJobs = jobs.filter(function(job){return job.isActive;})
const activeJobs1 = jobs.filter(job => job.isActive==false)

console.log(activeJobs)
console.log(activeJobs1)