// const jobs=[
//     {id:1,isActiveTrue:true},
//     {id:1,isActiveTrue:true},
//     {id:1,isActiveTrue:true}

// ]

// const activeJobs=jobs.filter(function(job){return job.isActiveTrue})
// const activeJob=jobs.filter((job)=> job.isActiveTrue)

///////////////////////////////////////////////////////////////////////////////

//Working with this
const person={
    talk(){
        var self=this
        setTimeout(()=>{
            console.log("self",self)
        },500)
    }
}

person.talk()