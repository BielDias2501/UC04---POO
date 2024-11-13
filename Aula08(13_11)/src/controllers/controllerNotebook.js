const {databaseNotebook} = require("../config/databaseNotebook")
const {Notebook} = require ("../models/Notebook")
class ControllerNotebook {
    adicionarNotebook(numeroDeSerie, marca, modelo, cor, preco){
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco)
            databaseNotebook.push(novoNotebook)
            console.log("Notebook adicionado com sucesso")
            return novoNotebook
        } catch (error) {
            console.error("Erro ao criar Notebook:",error.message)
        }
    }
    listarNotebook(){
        try {
            const notebooks = databaseNotebook.map( notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco 
            }))
            console.table(notebooks)
            } catch (error) {
                console.error("Erro ao listar notebooks",error.message)
        }
    }
    editarNotebook(){
        try {
            
        } catch (error) {
            
        }
    }
    excluirNotebook(){
        try {
            
        } catch (error) {
            
        }
    }
    excluirTodosNotebook(){
        try {
            
        } catch (error) {
            
        }
    }
}
module.exports = {ControllerNotebook}



