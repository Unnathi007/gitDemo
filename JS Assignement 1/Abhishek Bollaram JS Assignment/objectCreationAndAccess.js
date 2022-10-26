// object creation
person = {
    peru : 'arya',
    id : 120,
    house : 'stark',
    square : function(num){
        return num * num
    },
    
    cube : function(num){
        console.log(`${num} power 3 = ${this.square(num) * num}`)
    }
    
}
console.log(person.peru)
console.log(person['house'])
console.log(person)
console.log(person.square(2))
person.cube(4)

show = {
    title : 'Game of Thrones',
    characters : 'Jon Snow, Daenerys Targaryen, Cersei Lannister, Jaime Lannister, Tyrion Lannister',
    rating : 8.5,
    getShowDetails : () => console.log(`name : ${show.title} rating : ${show.rating} characters : ${show.characters}`),
    recommend : function(pr){
        if(pr == 1)
        console.log('Highly recommend!')
        else if( pr == 2)
        console.log('one time watch')
        else
        console.log('do not watch!')
    }
}
show.getShowDetails()
show.recommend(1)