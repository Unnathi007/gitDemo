class Game{
    // cannot use let, var or const while declaring variables inside the class
    // declaring members or class variables in a class is not mandatory
    // as they can be declared in the constructor itself

    constructor(id, gameName, genre){
        this.id = id
        this.name = gameName
        this.genre = genre
        console.log('the constructor is invoked')
    }
    // function keyword is not used to create a method
    displayGameDetails(){
        console.log(`id : ${this.id} name : ${this.name} genre : ${this.genre}`)
    }
}

g1 = new Game(100, 'cod', 'battle royale')
let g2 = new Game(200, 'pubg', 'battle royale')
g1.displayGameDetails()
g2.displayGameDetails()