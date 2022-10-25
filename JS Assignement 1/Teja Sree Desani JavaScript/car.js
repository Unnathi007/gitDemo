car={
    brand:'rolls roys',
    cost:'1 cr',
    nameplate:123,
    speed:()=>console.log('pickups fast'),
    displayifo:()=>console.log(`this.brand: ${car.brand}    cost: ${car.cost}   nameplate: ${car.nameplate}`)
}

console.log(car.brand)
console.log(car['cost'])
car.speed()
car.displayifo()

