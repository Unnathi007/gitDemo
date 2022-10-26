class sales {
    product
    constructor(product) {

        this.product = product;
    }

    calculateSales(product, price, ...units) {

        let sum = 0

        for (let i = 0; i < units.length; i++) {

            sum += units[i]
        }

        console.log(`product name: ${product} \n Price: ${price} \n Total price: ${sum * price}`);
    }
}

let obj = new sales("thickshake");

obj.calculateSales("nutella brownie", 45, 15, 30, 43, 50);