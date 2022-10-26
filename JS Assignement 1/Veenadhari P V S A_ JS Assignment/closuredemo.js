function mulfn(){
    var mul =9
    return function(val){
        mul =mul*val;
        return mul
    }
}

var mul = mulfn();
console.log(mul(10))


///////////////////////////////////////////////////////////////////
// Define the closure

var rentPrice = function(initialRent) {
    var rent = initialRent;
        // Define private variables for
        // the closure
        return {
        getRent: function() {
            return console.log(rent);
        },
    
        incRent: function(amount) {
            rent += amount;
            console.log(initialRent);
        },
    
        decRent: function(amount) {
            rent -= amount;
            console.log(rent);
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