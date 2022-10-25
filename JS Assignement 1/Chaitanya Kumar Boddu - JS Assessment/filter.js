const arr = [

    {id : 1, status : true},

    {id : 2, status : false},

    {id : 3, status : true}

]



const trueVals = arr.filter(function (arr) {return arr.status})

const trueVals1 = arr.filter(job => arr.status)



console.log(trueVals)