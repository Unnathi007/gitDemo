let array1= [1,2,3,4,5,6,7,8,9,10]

let array2 =  new Array(1,true,'unnathi',12.80,'sumana')

let array3 = ['sai','sahithi']



for(let i=0;i<array1.length;i++){

    console.log(array1[i]);

}

//print only even numbers

array1.forEach(a => { if(a%2==0) console.log(a)})



array2.forEach(a => { if(a.toString().startsWith('s')) console.log(a)})