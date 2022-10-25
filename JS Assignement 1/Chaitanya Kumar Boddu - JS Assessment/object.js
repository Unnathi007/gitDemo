car = {
    seats : 5,
    model : "Kia",
    price : 13,
    tyres : 4,

    performance: function(){
        console.log("120 KMPH");
    },
    
    mileage: function(){
        console.log("20KMPL");
    },

    addtyres: function(tyres){
       
        this.tyres = tyres;
    }

}

console.log(car.seats);
console.log(car['model']);
console.log(car.price);
car.performance();
car.mileage();
car.addtyres(5);
console.log(car.tyres)

building = {
    floors : 5,
    area : 300000,
    address : "Hyderabad",
    color : "blue",

    fireexit : function(){
        console.log("Fire Exit is Provided.")
    }
}

console.log(building.floors);
console.log(building['area']);

building.fireexit();
