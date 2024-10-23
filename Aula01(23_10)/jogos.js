class Jogos {
    constructor(titulo,genero,anolançamento){
      this.titulo = titulo
      this.genero = genero
      this.anolançamento = anolançamento  
    }
    getTitulo(){
        return this.titulo
    }
    getGenero(){
        return this.genero
    }
    getAnolançamento(){
        return this.anolançamento
    }
    setNome(titulo){
        this.titulo = titulo
    }
    exibirDados(){
        console.log(
        `
             Jogos \n
        Título: ${this.titulo},
        Genero: ${this.genero},
        Anolançamento: ${this.anolançamento},
 
        `
        )
}
}
let jogo01 = new Jogos ("CounterStrike","FPS",2000)
let jogo02 = new Jogos ("Fortnite","Battle Royale",2011)
let jogo03 = new Jogos ("Mario","Aventura",1985)
jogo01.exibirDados()
jogo02.exibirDados()
jogo03.exibirDados()