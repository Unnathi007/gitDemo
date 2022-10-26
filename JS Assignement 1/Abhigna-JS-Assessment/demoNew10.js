const jobs=[
    {id:1 , isActive:true},
    {id:2 , isActive:true},
    {id:3 , isActive:false},
];

const activeJobs= jobs.filter(function(job){
    return job.isActive;
})
console.log(activeJobs);
const ActiveJobs=jobs.filter(job=>!job.isActive);
console.log(ActiveJobs);
console.log("-----------------");
const person={
   
    talk(){
        var self=this;
        setTimeout(function(){
            console.log("self",self);
        },2000)
    }
}
person.talk();
console.log("-----------------");
const person2={
   
    talk(){
        setTimeout(()=>{
            console.log("this",this);
        },2000)
    }
}
person2.talk();