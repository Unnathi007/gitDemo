const address = {
street : 'galli',
city : 'shehar',
country : 'desh'
}

const {street, city, country} = address
console.log(street, city, country)

const {st, ci, co} = address
console.log(st, ci, co)

const{street : str, city : cit, country : cou} = address
console.log(str, cit, cou)