class Veiculo{
    #ano
    #marca
    constructor(marca, ano){
        this.#marca = marca
        this.#ano = ano
        Object.freeze(this)
    }

    get getMarca(){
        return this.#marca
    }
    set setMarca(marca){
        this.#marca = marca
    }
    get getAno(){
        return this.#ano
    }
    set setAno(ano){
        this.#ano = ano
    }
    getInfo(){
        console.log (`Ano: ${this.getAno}, Marca: ${this.getMarca}`)
    }
    calcularValor(){
        throw new Error('Método calcularValor() deve ser implementado.')
    }
}
module.exports = {Veiculo}