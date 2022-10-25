person={
    id:2,
    name:'Marimo KenshiSan',
    age:20,
    favline : function()  {
        console.log("Kusso cookuu")
    },

    display : function() {
        console.log(`${this.name}`)
        return 'Nanimo kawatta'
    }
}


console.log(person.age) // when using the value
console.log(person['name']) // to set value of key 
let zoro=person.display()
console.log(zoro)
person.favline()