let num = [1,2,3,4,5,6]

num.forEach(element => {
    console.log(square(element))
});

function square(ele)
{
    return ele * 10;
}