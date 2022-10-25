const person = {
    a : "balu",
    talk() {
        //let self = this
        setTimeout(() => {
            console.log("this",this)

        },1000);
    }
}

person.talk();