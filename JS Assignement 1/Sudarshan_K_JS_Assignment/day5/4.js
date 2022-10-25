// Define the closure

var rentPrice = function(initialRent) {
    var rent = initialRent;
    function helo(){
        console.log("hi")
     }
        // Define private variables for
        // the closure
        return {
        getRent: function() {
            return console.log(rent);
        },
        incRent: function(amount) {
            rent += amount;
            console.log(rent);
        },
        decRent: function(amount) {
            rent -= amount;
            console.log(rent);
        }
        }
    }
    var Rent = rentPrice(8000);
    
    
    
    // Access the private methods
    var r = rentPrice.helo;   //works
    //Rent.helo();        //doesnt work


    Rent.incRent(2000);
    
    Rent.decRent(1500);
    
    Rent.decRent(1000);
    
    Rent.incRent(2000);
    
    Rent.getRent();