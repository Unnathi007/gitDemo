class Product{
    constructor(pname, unit, price) {
        this.pname = pname
        this.unit = unit
        this.price = price
    }
}

function calculateTprice(...parameter) {
    let Tprice = 0
    parameter.forEach((a)=> { Tprice = Tprice + a.unit * a.price})
    console.log(Tprice)
}

let pro1 = new Product("slkdaf", 3, 30)
let pro2 = new Product("qwoier", 3, 30)
let pro3 = new Product(",xvcm", 3, 30)
let pro4 = new Product("wmsadf", 6, 20)

calculateTprice(pro1, pro2, pro3, pro4)