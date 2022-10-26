class Bill{
    
    constructor(pname, price, ... parameters){
        this.pname = pname
        this.price = price
        this.units = parameters
    }
    totalAmt(){
        let sum = 0
        for(let i = 0; i < this.units.length; i ++){
            sum += this.units[i];
        }
        console.log('product name : ', this.pname)
        console.log('price of the product : ', this.price)
        console.log('no of units sold : ', sum)
        console.log('total cost : ', sum * this.price)
    }
}

let b = new Bill('IPhone', 60000, 2, 3, 5)
b.totalAmt()

/*
let b = new Bill()
b.totalAmt('IPhone', 60000, 2, 3, 5)

class Bill{
    totalAmt(productName, price, ... parameters){
        let sum = 0
        for(let i = 0; i < parameters.length; i ++){
            sum += parameters[i];
        }
        console.log('product name : ', productName)
        console.log('price of the product : ', price)
        console.log('no of units sold : ', sum)
        console.log('total cost : ', sum * price)
    }
}

let b = new Bill()
b.totalAmt('IPhone', 60000, 2, 3, 5)
*/