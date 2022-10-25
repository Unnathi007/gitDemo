function add()
{
    let n1=document.getElementById("n1").value
    let n2=document.getElementById("n2").value
    let n3=parseInt(n1,10)+parseInt(n2,10);
    document.getElementById("n3").value=n3;
}