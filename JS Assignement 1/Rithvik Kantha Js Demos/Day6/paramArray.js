class sales{
    productName
    constructor(productName){
        this.productName = productName;
    }
    calculateSales(productName,price,...unitsPurchased){
        let sum = 0
        for(let i=0;i<unitsPurchased.length;i++){
            sum+=unitsPurchased[i]
        }
        console.log(`product name: ${productName} \n Price: ${price} \n Total price: ${sum*price}`);
    }
}
let obj = new sales("milkshake");
obj.calculateSales("choco", 45 , 10,32,43,455);