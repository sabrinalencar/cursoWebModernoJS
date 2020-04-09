console.log(Math.ceil(6.1))//notacao ponto p acessar ceil do obj Math

const obj1 = {}
obj1.nome = 'Bola'
// similar a obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()