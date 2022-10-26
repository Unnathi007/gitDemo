class studentParam{

    constructor(sId,sName,age,branch){
        this.sId = sId
        this.sName = sName
        this.age = age
        this.branch = branch
    }

    display(){
        console.log(`Id : ${this.sId} \nName : ${this.sName} \nAge : ${this.age} \nBranch : ${this.branch} \n`);
    }

    display(sId){
        console.log(`Id : ${this.sId} \n`);
    }

    display(sId, sName){
        console.log(`Id : ${this.sId} \nName : ${this.sName} \n`);
    }

}

let s =new studentParam(103,"Karthik",22,"CSE")
s.display(101)