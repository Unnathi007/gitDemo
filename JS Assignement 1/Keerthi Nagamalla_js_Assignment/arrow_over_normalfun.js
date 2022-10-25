const jobs=[{id:1,isactive:true},{id:2,isactive:true},{id:3,isactive:false}];
const activejobs=jobs.filter(function(job){return job.isactive});
console.log(activejobs)
// const activejobs=jobs.filter(job=>job.isactive);