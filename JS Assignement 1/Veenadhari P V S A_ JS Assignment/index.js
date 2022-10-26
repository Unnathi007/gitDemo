import {Student,Hostelier} from "./Student.js"

let tf =new Hostelier()
tf.totalfees()

class dayScholar extends Student {
    id
    fees
    constructor(){
        super()
        this.id=90
        this.fees=2000
    }

    feesCalc(){
        let sum=this.schoolfees+this.fees
        console.log(`sum : ${sum}`)
    }
}

let ds= new dayScholar
ds.feesCalc()