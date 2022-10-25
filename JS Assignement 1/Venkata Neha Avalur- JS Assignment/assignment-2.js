// Create new file import class person
// In new file create class employ inherit person
// Add job role and organisation
// Export class emp
// Create index file
// Import emp into index.js
// Create object of emp

export class Person{
    //member data
    id
    pname
    age

    constructor(){
        this.id=1,
        this.pname='person-name',
        this.age=20,
        console.log(`Constructor Invoked`)
    }


    //member function
    display(){
        console.log(`ID: ${this.id} Name: ${this.pname} Age:${this.age} Salary:${this.salary=20000}`)
    }
}