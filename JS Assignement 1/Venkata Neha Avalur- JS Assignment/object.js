//object
//properties and values
person={
    id:1,
    name:'neha',
    age:12,
    work : function(){
        console.log('person does some work')
    },
    display: function(){
        console.log(`id : ${this.id} name: ${this.name} age: ${this.age}`);
    },
    person: function(i){
        id=i;
        console.log(id)
    }
    // display : () => console.log(`id : ${person.id} name: ${person.name} age: ${person.age}`)
}
let pi=person
person.person(1000)
 //this: represents current object
//two different ways to access the properties of an object
//dot notation
//[] square bracket notation
console.log(person.id)
console.log(person['name'])
console.log(person.age)
person.work()
person.display()
console.log(typeof(person))
console.log(pi.id)
console.log(typeof(pi))
//get data from html document, data from elements of html then assign to the properties of the object use []

let array1=[1,2,3,4,5,6]
let array2=['venkata','neha','avalur','aakash','sudarshan','lakshmi']
let array3=[1,true,'neha',12, 34]

let array4=new Array(1,2,3,4,5,6)
let array5=new Array('abc','efg','hij','klm','nop','qrs')

for(let i=0;i<array1.length;i++){
    console.log(array1[i])
}

array1.forEach(a => {if (a %2 == 0) console.log(a)})
array2.forEach(a => {if (a.startsWith('s')) console.log(a)})

let children = array1.concat(array2); 
console.log(children)

let children1 = array1.concat(array2, array3);
children1.forEach(a=>{console.log(a)})

let myBest = array1.slice(-3, -1);
myBest.forEach(a=>{console.log(a)})


let citrus = array3.slice(1, 3);
citrus.forEach(a=>{console.log(a)})

array3.splice(2, 0, "Lemon", "Kiwi");
array3.forEach(a=>{console.log(a)})

array4.splice(2, 2);
array4.forEach(a=>{console.log(a)})

let array7 = ['sai','unnathi','sirish','lakshmi']
console.log(array7)

array7.splice(10,0,'samatha','rohith')
let newarray10=array7
console.log(newarray10)

let array9=["one","two"]
let array10=["three","four"]

//spread operator
let newarray=[...array9,"hello world",...array10] 
console.log(newarray)

//spread operator with objects
person={
    id:1,
    name:'demo'
};

let anotherperson={...person,job:'consultant',email:'someone@gmail.com'}
console.log(anotherperson)

 

let numarray1=[1,2,3,4,5,6,7,8,9]
let [p,q,...r]=numarray1;
console.log(p)
console.log(q)
console.log(r)

