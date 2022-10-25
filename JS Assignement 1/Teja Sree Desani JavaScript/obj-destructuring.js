const address={
    street: 'sarvodaya',
    city: 'nagarkurnool',
    country: 'inda'
}

const street = address.street
const city = address.city
const country = address.country
console.log('Street: ',street,'City: ',city,'Country: ',country);

const {street: st, city:ct, country:cy} = address
console.log('Street: ',street,'City: ',city,'Country: ',country);