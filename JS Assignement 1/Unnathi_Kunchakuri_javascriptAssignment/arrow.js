const jobs=[
    
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true }
];
const activeJobs1=jobs.filter(function(job){return job.isActive;});
const activeJobs=jobs.filter(job=>job.isActive);
console.log(activeJobs);
const person={
    talk(){
        var self=this;
        setTimeout(function(){
            console.log("this",self)
        },1000);
    }
};
const person3={
    talk(){
        var self=this;
        setTimeout(function(){
            console.log("this",self)
        },1000);
    }
};
const person1={
    talk(){
        //var self=this;
        setTimeout(()=>{
            console.log("this",this)
        },1000);
    }
};
person.talk();