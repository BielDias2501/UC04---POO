const { databaseNotebook } = require('../../../Aula08(13_11)/src/config/databaseNotebook');
const { databaseTarefas } = require ('../config/databaseTarefas');
const { Tarefas } = require('../models/tarefa');
const { TarefasPessoais } = require('../models/tarefaspessoais');
const { TarefasProfissionais } = require('../models/tarefasprofissionais');

class ControllerTarefas{
    adicionarTarefas(descricao,prioridade,data,tipo){
        try {
            const novaTarefa = new Tarefas(descricao,prioridade,data,tipo);
            databaseTarefas.push(novaTarefa);
            console.log("Tarefa adicionada com sucesso!");
            return novaTarefa
        } catch (error) {
            console.error("Erro ao adicionar Tarefa", error.message);
        }
    }
    listarTarefas(){
        try {
            const Tarefass = databaseTarefas.map( Tarefa => ({
                descricao: Tarefa.getDescricao,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco
            }))
            console.table(notebooks);
        } catch (error) {
            console.error("Erro ao listar notebooks", error.message);
        }
    }
}





module.exports = {ControllerTarefas}