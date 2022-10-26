class Shop{
    totalPrice(productName,price,...units){
        let s=0;
    units.forEach(element => {
         s=s+element   
        });
        console.log(price*s);
    }
}
let s= new Shop();
s.totalPrice("chocolate",10,10,10,10,10)
