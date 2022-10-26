
function add(num1,num2){
    console.log(`sum of ${num1} and ${num2} is ${num1+num2}`);
    let sumContainer = document.getElementById('sum');
    sumContainer.textContent = `sum of ${num1} and ${num2} is ${num1+num2}`
}

function callAdd(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    add(num1, num2);
}

