const address = {
    street:"VV",
    city:"Hyderabad",
    country:"India"
}

const { street:st, city:ci, country:co} = address
console.log(st + " "+ci+" "+co)

let cities = ['hyd','chennai','bengaluru','pune']
let [a,b,...c] = cities

console.log(typeof(c))