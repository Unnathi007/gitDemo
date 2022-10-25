const jobs=[
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false},
];

const activeJobs = jobs.filter(function(job){ return job.isActive;});
const activeJob = jobs.filter(job => job.isActive)

const person = {
    talk(){
        // var self = this;
        // setTimeout(function(){
            setTimeout(()=>{
            console.log("this",this);
            // console.log("self",self);
        },1000);
    }
};

person.talk();