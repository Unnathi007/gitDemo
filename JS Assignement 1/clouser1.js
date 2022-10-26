// Define the closure

var rentPrice = function(initialRent) {

    var rent = initialRent;
    
    
    
        // Define private variables for
    
        // the closure
    
        return {
    
        getRent() {
    
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
    
    
    console.log(Rent)
    // Access the private methods
    
    Rent.incRent(2000);
    
    Rent.decRent(1500);
    
    Rent.decRent(1000);
    
    Rent.incRent(2000);
    
    Rent.getRent();