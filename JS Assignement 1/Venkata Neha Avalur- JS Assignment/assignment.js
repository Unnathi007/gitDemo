export class ParamArray
{
    productName;
    price;
    units;

    constructor(productName,price,...params)
    {
        this.productName = productName;
        this.price = price;
        let total = 0;
        for(let i = 0;i < params.length;i++)
        {
            total += parseInt(params[i]);
        }
        this.units = total;
    }
    display()
    {
        console.log(`the total cost of ${this.productName} is ${this.price} is ${this.units * this.price}`);
    }
}

