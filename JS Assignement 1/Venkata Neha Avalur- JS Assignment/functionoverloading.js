//function overloading and overriding does not work in js

class studentParam{
    constructor(sId,sName,age,branch){
        this.sId = sId
        this.sName = sName
        this.age = age
        this.branch = branch
    }
    display(){
        console.log(`Id1 : ${this.sId} \nName : ${this.sName} \nAge : ${this.age} \nBranch : ${this.branch} \n`);
    }
    display(sId){
        console.log(`Id2 : ${sId} \n`);
    }
    display(sId, sName){
        console.log(`Id3 : ${sId} \nName : ${sName} \n`);
    }
    display(...param){

        for(let i =0; i<param.length;i++){

            console.log(param[i]);

        }

    }
}

let s =new studentParam(103,"Karthik",22,"CSE")
s.display(101,'Neha')
s.display()
s.display(101)
s.display(102,'Neha',44,"ECE")