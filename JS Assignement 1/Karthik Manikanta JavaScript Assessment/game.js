export class Game{
    // cannot use let, var or const while declaring variables inside the class
    id
    name
    genre
    
    constructor(){
        this.id = 420
        this.name = 'angry birds'
        this.genre = 'arcade'
        console.log('the constructor is invoked')
    }
    // function keyword is not used to create a method
    displayGameDetails(){
        console.log(`id : ${this.id} name : ${this.name} genre : ${this.genre}`)
    }
}

//let g = new Game()
//g.displayGameDetails()