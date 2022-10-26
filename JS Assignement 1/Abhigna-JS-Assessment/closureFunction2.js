var rentPrice= function(initialRent) {
    var rent = initialRent;
    //define private variables for the closure
    return {
        getRent: function(){
            return console.log(rent);
        },
        inRent: function(amount){
            rent+=amount;
            return console.log(rent);
        },
        deRent: function(amount)
        {
            rent-=amount;
            return console.log(rent);
        }
    }
}
var Rent=rentPrice(6000);
Rent.inRent(2000);
    Rent.deRent(1500);
    Rent.deRent(1000);    
    Rent.inRent(2000);    
    Rent.getRent();