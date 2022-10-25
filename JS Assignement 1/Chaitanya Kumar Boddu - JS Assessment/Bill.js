class shopping{
    constructor(name,price,...units){
        this.name = name
        this.price = price
        this.units = units
    }

    displayTotal(){
        let sum = 0;
        for(let i=0;i < this.units.length;i++){
            sum =sum + this.price * this.units[i]
        }
        console.log(sum)

    }
}

let p1 = new shopping("soap",24,4,5,5,6,7,8)
p1.displayTotal()