const address={
    street:'hi',
    city:'hello',
    country:'where',
};

const street=address.street;
const city=address.city;
const country=address.country;
console.log("street-",street,"city-",city,"country-",country)

const {street: street1,city:city1,country:country1}=address;
console.log("street-",street1,"city-",city1,"country-",country1)