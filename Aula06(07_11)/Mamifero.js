const {Animal} = require("./Animal")

class Mamifero extends Animal{
    #tipoPelo
    #habitat

constructor(nome,idade,tipoPelo,habitat){
    super(nome,idade)
    this.#tipoPelo = tipoPelo
    this.#habitat = habitat
}    
    get gettipoPelo(){
        return this.#tipoPelo
    }
    set settipoPelo(tipoPelo){
        this.#tipoPelo = tipoPelo
    }
    get gethabitat(){
        return this.#habitat
    }
    set sethabitat(habitat){
        this.#habitat = habitat
    }
    emitirSom(){
        console.log ("O mamífero ruge ou grunhe")
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de Pelo: ${this.gettipoPelo}, ${this.gethabitat}`)
    }
} 
module.exports = {Mamifero}
