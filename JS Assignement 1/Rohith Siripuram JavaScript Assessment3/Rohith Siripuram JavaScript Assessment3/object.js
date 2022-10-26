
//object : it collection of key and values

student = {
    sid : 12,
    name : 'Rohith',
    address : 'hyd',
    getNameAddress : function(){
        return this.name+" "+this.address
    },
    getSidName: () => student.sid+" "+student.name,
    getAllDetails : () => console.log(`sid = ${student.sid} name = ${student.name} address = ${student.address}`),   
}

car = {
    carID : 123,
    carName : 'Swift',
    price : 590000,
    carNumber : 'TS21F2453',
    getNamePrice : function() {console.log(`car name = ${this.carName} and price = ${this.price}`);},
    getAllDetails : () => car.carID+" "+car.carName+" "+car.price+" "+car.carNumber
}

//to access values
console.log(student.name);
console.log(student['address']);
console.log(student.getNameAddress());
console.log(student.getSidName());
student.getAllDetails()