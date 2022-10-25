class sales{
    constructor(pname, price, ...units){
        this.pname=pname
        this.price=price
        this.units=units

        let total = 0
        let amount

        for(let i=0;i<units.length;i++){
            total+=units[i]
        }
        amount = price*total
        console.log(`Name: ${pname} Price: ${price} Units: ${total} Amount: ${amount}`);
    }
}

let t= new sales('book',10,1,2,3)
