export class student {
    id
    sname
    schoolfees
    constructor(id,sname,schoolfees) {
        this.id = id;
        this.sname = sname;
        this.schoolfees = schoolfees;
    }

    display() {
        console.log(`Id: ${this.id}\nName:${this.sname}\nAge:${this.schoolfees}`);
    }
}