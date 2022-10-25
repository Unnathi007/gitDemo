class Product{
    pname
    price
    units
    constructor(pname,price,units){
        this.pname=pname
        this.price=price
        this.units=units
    }
    display(){
        console.log(`pname : ${pname} , price : ${price} , units :${units}`)
    }
}
function add(...parameters){
    let total=0;
    for(let i =0;i<parameters.length;i++){
        total+=parameters[i].units*parameters[i].price;
    }
    console.log(`Total : ${total}`);
}
let p1=new Product('prod1',2,30);
let p3=new Product('prod3',12,30);
let p2=new Product('prod2',34,130);
add(p1,p2,p3);