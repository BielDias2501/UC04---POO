const {Animal} = require("./Animal")

class Cachorro extends Animal{
    #raca
    constructor(raca){
        super()//UTILIZAR O CONSTRUTOR DA CLASSE ANIMAL
        this.#raca = raca
    }

    emitirSom(){
        console.log(`${this.#nome} Faz au au!`)
    }
}