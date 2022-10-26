const person = {
    talk() {
        const self = this
        setTimeout(function() {
            console.log('this', self)
        }, 2000)
    }
}

person.talk()