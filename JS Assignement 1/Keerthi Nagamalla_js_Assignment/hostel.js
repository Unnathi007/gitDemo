import {student} from "./studentclass.js"
export class hostel extends student{
    messfees=1000
    hostelfees=20000
    display1(){
        super.display()
        console.log(`messfees: ${this.messfees} hostelfees: ${this.hostelfees} totalfees: ${this.messfees+this.hostelfees+this.schoolfees}`)
    }
}