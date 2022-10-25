function scopes(){

    for(var a=1;a<=5;a++)
    {
        console.log(a);
    }
    console.log(a);
   // console.log(b);
   for(let b=1;b<=5;b++)
    {
        console.log(b);
    }
    console.log(b);

}

scopes()