var rentPrice = function (inititalRent){
var rent=inititalRent;
    return {
        getRent : function(){
            return console.log(rent);
        },
        incRent: function(amount){
            rent+=amount;
            console.log(rent);
        },
        decRent: function(amount){
            rent-=amount;
            console.log(rent);
        }
    }
}

var p= rentPrice(100)
p.getRent()
p.incRent(100)
p.decRent(100)