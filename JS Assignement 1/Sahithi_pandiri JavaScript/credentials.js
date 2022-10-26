function Validate(uname,pass){
    if(uname==='2' && pass==='PassW0rd@123'){
        console.log('sucessfull');
    }
    else{
        console.log('failed');
    }
    console.log(pass);
}
function Validate(uname,pass,id){
    if(uname==='2' && pass==='PassW0rd@123'){
        console.log('sucessfull');
    }
    else{
        console.log('failed');
    }
    console.log(pass);
    console.log(uname);
    console.log(id);
}
Validate(1,2);