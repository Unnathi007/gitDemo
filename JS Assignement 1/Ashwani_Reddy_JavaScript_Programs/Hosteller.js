import {Student} from './Student.js'

export class Hosteller extends Student
{
    MessFee
    HostelFee
    constructor()
    {
        super()
        this.MessFee=10000
        this.HostelFee=40000
    }
    calculate()
    {
        console.log(`Total Fees = ${this.HostelFee+this.MessFee+this.fees}\n`)
    }
}