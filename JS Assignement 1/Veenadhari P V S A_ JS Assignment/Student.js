export class Student{
    id
    name
    section
    schoolfees

    constructor(){
        this.id=1
        this.name="nannu"
        this.section="A"
        this.schoolfees=10000

    }
    display(){
        console.log(` ${this.id} ${this.name} ${this.section}`)
    }
}

export class Hostelier extends Student{
    messfees
    hostelfees

    constructor(){
        super()
        this.messfees=100
        this.hostelfees=500
    }

    totalfees(){
        let fees=this.messfees+this.hostelfees+this.schoolfees
        console.log(fees)
    }
}