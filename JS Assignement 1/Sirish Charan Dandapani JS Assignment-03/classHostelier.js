import { Student } from "./classStudent.js";

export class Hostelier extends Student {
    messfees
    hostelfees
    constructor(id, sname, schoolfees, section, messfees, hostelfees) {
        super(id, sname, schoolfees, section, messfees, hostelfees)
        this.messfees = 3000
        this.hostelfees = 10000
    }
    calTotalfees() {
        return this.schoolfees + this.hostelfees + this.messfees
    }
}

