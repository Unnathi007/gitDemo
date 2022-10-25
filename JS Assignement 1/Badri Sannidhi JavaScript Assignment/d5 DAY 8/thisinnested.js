// Case 1 : Before using self : log(this) gives details of selfTimeOut

// Case 2 : Using self : log(self) gives details of person

//

/*const person ={
    talk() {
        var self=this;
        setTimeout( function() {
           // console.log("this",this);
            console.log("self",self)
        },2000);
    }
};

person.talk();*/


const person ={
    talk() {
       
        setTimeout( () =>{
           console.log("this",this);
        }
        ,2000);
    }
};

person.talk();