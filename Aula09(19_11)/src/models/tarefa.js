class Tarefas {
    #descricao
    #status

constructor(descricao,status){
    this.#descricao = descricao
    this.#status = status
    Object.freeze(this)
}
get getDescricao(){
    return this.#descricao
}
set setDescricao(descricao){
    this.#descricao = descricao
}
get getStatus(){
    return this.#status
}
getInfo(){
    console.log(`Descrição: ${this.getDescricao}, Status: ${this.getStatus}`)
}
finalizarTarefas(){
    this.#status = "Não finalizado"
}
}
module.exports = {Tarefas}