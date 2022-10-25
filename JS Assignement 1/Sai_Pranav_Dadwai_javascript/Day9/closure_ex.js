function mul(){
    var m =10;
    return function(val){
        m =m*val
        return m;
    }
}
var mult = mul();
console.log(mult(16));


// Define the closure

var rentPrice = function(initialRent) {

    //var rent = initialRent;
    
    
    
        // Define private variables for
    
        // the closure
    
        return {
    
        getRent: function() {
    
            return console.log(initialRent);
    
        },
    
        incRent: function(amount) {
    
            initialRent += amount;
    
            console.log(initialRent);
    
        },
    
        decRent: function(amount) {
    
            initialRent -= amount;
    
            console.log(initialRent);
    
        }
    
        }
    
    }
    
    
    
    var Rent = rentPrice(85000);
    
    
    
    // Access the private methods
    
    Rent.incRent(20000);
    
    Rent.decRent(15000);
    
    Rent.decRent(10050);
    
    Rent.incRent(20090);
    
    Rent.getRent();





    const person ={
        name:'lol',
        walk(){},
        Talk(){}

    };
    person.Talk();

    const  target='name';
    person[target]='john';
    
    console.log(person)