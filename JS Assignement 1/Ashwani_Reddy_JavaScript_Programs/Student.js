export class Student
{
    id
    name
    section
    fees
    constructor()
    {
        this.id=101
        this.name='Ashwani'
        this.section='B'
        this.fees=80000
    }
    display()
    {
        console.log(`id:${this.id}\nName:${this.name}\nSection:${this.section}\nFees:${this.fees}\n`)
    }
}