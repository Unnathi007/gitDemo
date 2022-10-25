let a1=[1,2,3,4,5,6]
let a2=[1,'abc',true,69.69]
let a3=['abc',"bcd","cde",'fri']

let a4= new Array(7,8,9,10)
let a5= new Array('a','sad','happy')

/*for(let i=0;i<a1.length;i++)
    console.log(a1[i])

    for(let i=0;i<a2.length;i++)
    console.log(a1[i])

    for(let i=0;i<a3.length;i++)
    console.log(a1[i])
    
    for(let i=0;i<a4.length;i++)
    console.log(a1[i])

    for(let i=0;i<a5.length;i++)
    console.log(a1[i])


a5.forEach(a => {if(a.startsWith('s')) console.log(a)})*/


a1.splice(0,3)
console.log(a1)