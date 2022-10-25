const address={
    street : "James" ,
    city : "",
    country : "",
    continent : "Asia"

};

//Conventional
/*const street = address.street;
const c= address.city;
const cont = address.cont;*/
//Destructuring

const { street , city ,country} = address
console.log(street)

const {continent:cont} = address
console.log(cont);