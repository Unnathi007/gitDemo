
let body = document.getElementById('body')

function changeColor(event){
    let ele=event.target.id.toString();
    if(ele=="red") body.style.backgroundColor="red";
    else body.style.backgroundColor="green";
}

