class Game{

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



    displayGameDetails(id){

        console.log('id of the game : ', this.id)

    }



    displayGameDetails(name, genre){

        console.log(`name : ${this.name} genre : ${this.genre}`)

    }



    anotherOne(...parameters){

        for(let i = 0; i < parameters.length; i ++){

            console.log(parameters[i])

        }

    }

}



g1 = new Game(100, 'cod', 'battle royale')

let g2 = new Game(200, 'pubg', 'battle royale')

g1.displayGameDetails()

g1.displayGameDetails(1)

g1.displayGameDetails(1, 2)

g1.anotherOne(1, 2, 3, 'abc', 'caekjcn')