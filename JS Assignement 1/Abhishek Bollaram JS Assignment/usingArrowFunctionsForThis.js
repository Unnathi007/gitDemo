const person = {
    talk() {
        setTimeout(() => {
            console.log('this', this)
        }, 2000) 
    }
}

person.talk()