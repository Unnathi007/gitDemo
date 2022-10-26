class Product{

    constructor(pName,price){
        this.pName = pName
        this.price = price
    }

    totalSales(units){
        let totalUnits=0
        for(let i=0;i<units.length;i++){
            totalUnits = totalUnits+units[i]
        }
        console.log(`Total sales : ${this.price*totalUnits}`);
    }
}

let product = new Product("Pen",5)

product.totalSales([2,3])

