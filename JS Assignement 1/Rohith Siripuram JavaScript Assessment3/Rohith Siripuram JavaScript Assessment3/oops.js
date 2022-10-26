class studentDefault{
    sId
    sName
    age
    branch

    constructor(){
        this.sId = 101;
        this.sName = "Rohith"
        this.age = 21
        this.branch = "CSE"
    }

    display(){
        console.log(`Id : ${this.sId} \nName : ${this.sName} \nAge : ${this.age} \nBranch : ${this.branch} \n`);
    }
}

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

let s1 = new studentDefault();  //using default constructor 
s1.display();

let s2 = new studentParam(102,"Akash",20,"ECE") //using parameterized contructor
s2.display();
