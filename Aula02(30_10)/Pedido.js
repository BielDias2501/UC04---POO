const {Produto} = require("./Produto");

class Pedido{
    #produtos
    constructor(){
        this.#produtos = []
        Object.freeze(this)
    }
    adicionarProduto(produto){
        if(produto instanceof Produto){
            this.#produtos.push(produto)
        }else{
            console.log("Somento objetos do tipo Produto podem ser adicionados!")
        }
    }    
        mostrarPedido(){
            console.log("Resumo do pedido")
            this.#produtos.forEach(produto =>{
                console.log(produto.getInfoPruduto())
            })
        }
    }

module.exports = {Pedido}