// Define the closure

var intialValue = function(value) {

    
    
    
        return {
    
        add: function(fnValue) {
    
            value += fnValue;
            return console.log(value);
    
        },
    
        sub: function(fnValue) {
    
            value -= fnValue;
    
            console.log(value);
    
        },
    
        mul: function(fnValue) {
    
            value *= fnValue;
    
            console.log(value);
    
        },
        div: function(fnValue) {
    
            value /= fnValue;
    
            console.log(value);
    
        },

        getFinal : function(){
            console.log(value);
        }
    
        }
    
    }
    
    
    var Rent = intialValue(300);
    
    Rent.add(200);
    
    Rent.sub(100);
    
    Rent.mul(5);
    
    Rent.div(2);
    
    Rent.getFinal();