car = {
    name:'BMW',
    Model:'V6',
    Mileage:'12kmpl',
    Condition:'perfect',
    distanceCovered : () => { console.log("Distance travelled is 350km")},
    description : () => {console.log("It is an excellent car with four wheels")},
    Engine : () => {console.log("Perfect Engine")}
}

console.log(car);
car.distanceCovered();
car.Engine();