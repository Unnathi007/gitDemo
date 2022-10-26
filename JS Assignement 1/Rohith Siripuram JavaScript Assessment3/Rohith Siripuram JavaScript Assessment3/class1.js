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

let s = new studentDefault();  //using default constructor 
s.display();