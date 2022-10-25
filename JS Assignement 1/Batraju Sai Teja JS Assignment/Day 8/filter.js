const jobs = [
    {id : 1,isActive : true},
    {id : 2,isActive : false},
    {id : 3,isActive : true}
]

const activeJobs = jobs.filter(function(job) {return job.isActive});
const activeJobs1 = jobs.filter(job => !job.isActive)

console.log(activeJobs);
console.log(activeJobs1);