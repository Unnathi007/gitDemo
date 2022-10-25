"use strict";
const address1={
    street:'1',
    city:'',
    country:''
};
const street1=address1.street;
const city1=address1.city;
const country1=address1.country;
const {street, city, country}=address1;
console.log(street1,city1, country1);

//array destructoring
let cities=['hyd','sec','bengaluru'];
let [a,b,...c]=cities;
console.log(c);