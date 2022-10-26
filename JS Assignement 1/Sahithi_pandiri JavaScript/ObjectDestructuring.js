const address={
    street:'vv',
    city:'telangana',
    country:'india',
    planet:'earth',
    talk(){
        let a=10
        console.log(this)
    }
}
const {street,city,country,talk}=address;
// console.log(street)
//console.log(planet)
//const t=address.talk
address.talk()
talk()
