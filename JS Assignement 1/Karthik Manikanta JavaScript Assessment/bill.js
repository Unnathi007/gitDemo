class billing{
    pname
    price
    units
    constructor(name,price,...parameters)
    {
        this.pname=name
        this.price=price
        this.units=parameters
    }
    Bill()
    {
        let amount
        let tunits=0
        for(let i=0;i<this.units.length;i++)
            tunits=tunits+this.units[i]
        amount=this.price*tunits
        console.log(`NAME: ${this.pname} PRICE: ${this.price} TUNITS: ${tunits} AMOUNT: ${amount}`)
    }
}

let b=new billing("Book",10,2,3,4,1,2)
b.Bill()

/*
class billing{
    bill(name,price, ...parameters)
    {
        let total=0
        let amount
        for(let i=0;i<parameters.length;i++)
            total=total+parameters[i];
        amount=price*total
        console.log(`NAME: ${name} PRICE: ${price} UNITS: ${total} AMOUNT: ${amount}`)
    }
}
let b=new billing()
b.bill("Book", 10, 5,6,6,3)
*/