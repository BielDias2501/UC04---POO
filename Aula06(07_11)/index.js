const {Animal} = require ("./Animal")
const {Mamifero} = require ("./Mamifero")
const {Ave} = require ("./Ave")

let a1 = new Animal("Gabriel", 18)
let m1 = new Mamifero("Sérgio",59,"branco","AABB")
let ave1 = new Ave("Penguim",5, "Normal", "Não tem")

// console.log(a1.emitirSom())
a1.getInfo()
// console.log(m1.emitirSom())
m1.getInfo()
// console.log(ave1.emitirSom())
ave1.getInfo()

ave1.emitir()