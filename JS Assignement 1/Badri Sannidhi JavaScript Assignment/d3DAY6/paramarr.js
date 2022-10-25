class Product{
    name
    price
    totSales(name,price,...parameters)
    {
        this.name=name
        this.price=price
        let units=0
        for(let i=0;i<parameters.length;i++)
            units+=parameters[i]
        return units*this.price    
    }
}


let p1= new Product()
console.log(p1.totSales('manga',300,1,2,3))