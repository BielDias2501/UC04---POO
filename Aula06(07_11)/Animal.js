class Animal{

    #nome
    #idade
    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade
    }
    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        this.#nome = nome
    }
    get getIdade(){
        return this.#idade
    }
    set setidade(idade){
        this.#idade = idade
    }
    emitir(){
        console.log("O animal emite um som genérico")
    }
    getInfo(){
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}`)
    }
}
module.exports = {Animal}