// Define the closure
var rentPrice = function(initialRent){
    //var rent = initialRent;
    // Define private variables for the closure
    return{
        getRent(){
            return console.log(initialRent);
        },
        incRent: function(amount) {
            initialRent += amount;
            console.log(initialRent);
        },
        decRent: function(amount) {
            initialRent -= amount;
            console.log(initialRent);
        },
        depRent: ()=>{
            initialRent =initialRent*0.95
            console.log(initialRent)
        }
    }
}

var Rent = rentPrice(8000);    
// Access the private methods
Rent.incRent(2000);
Rent.decRent(1500);
Rent.decRent(1000);
Rent.incRent(2000);
Rent.getRent();
Rent.depRent();