const {Animal} = require("./Animal")

class Cachorro extends Animal{
    #raca
    constructor(nome,raca){
        super(nome)//UTILIZAR O CONSTRUTOR DA CLASSE ANIMAL
        this.#raca = raca
    }

    emitirSom(){
        console.log(`Meu nome é ${this.getNome}, sou da raça ${this.#raca}, e emito um som au au!`)
    }
}

module.exports = {Cachorro}