const {Animal} = require ("./Animal")

class Ave extends Animal{
    #tipoBico
    #capacidadeVoo

constructor(nome,idade,tipoBico,capacidadeVoo){
    super(nome,idade)
    this.#tipoBico = tipoBico
    this.#capacidadeVoo = capacidadeVoo
}    
    get gettipoBico(){
        return this.#tipoBico
    }
    set settipoBico(tipoBico){
        this.#tipoBico = tipoBico
    }
    get getcapacidadeVoo(){
        return this.#capacidadeVoo
    }
    set setcapacidadeVoo(capacidadeVoo){
        this.#capacidadeVoo = capacidadeVoo
    }
    emitirSom(){
        console.log ("A ave canta ou pia")
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de Bico: ${this.gettipoBico}, ${this.getcapacidadeVoo}`)
    }
} 
module.exports = {Ave}
