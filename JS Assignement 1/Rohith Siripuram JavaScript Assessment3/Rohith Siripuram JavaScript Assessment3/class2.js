class studentParam{
    sId
    sName
    age
    branch

    constructor(sId,sName,age,branch){
        this.sId = sId
        this.sName = sName
        this.age = age
        this.branch = branch
    }

    display(){
        console.log(`Id : ${this.sId} \nName : ${this.sName} \nAge : ${this.age} \nBranch : ${this.branch} \n`);
    }
}

let s = new studentParam(102,"Rohith",20,"ECE") //using parameterized contructor
s.display();