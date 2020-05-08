/**class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
*/
//Tranformando a Classe acima em função construtora
function Pessoa (nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}
const p = new Pessoa('Joao')
p.falar()