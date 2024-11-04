class Dado {
    #face
    constructor() {
        this.#face = face;
    }
    rolar(){
        return Math.floor(Math.random() * this.#face)
    }

get getFace(){
    return this.#face = face
}
set setFace(face){
    this.#face = face
}
}

module.exports = {Dado}