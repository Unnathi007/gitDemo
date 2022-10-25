const address={
    street:'gan',
    city:'hyd',
    country:'ind'
};
// const street=address.street;
// const city=address.city;
// const country=address.country;

const {street:s1,city:s2,country:s3}=address;//s1,s2,s3 are aliases for street city and country
console.log(s1)

// let cities=['hyd','chennai','bengaluru','pune']//Array destructuring
// let [a,b,...c]=cities
// console.log(c)