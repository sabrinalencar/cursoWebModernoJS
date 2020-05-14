// Notação literal
const obj = {}
console.log(obj)

// Object em JS
console.log(typeof Object, typeof new Object)//function object
const obj2 = new Object
console.log(obj2)

// Funções construtoras (mesma forma da acima mas com uma função sua)
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook',2999.98, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Sabrina', 11400, 5)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Victoria'
console.log(filha)

//Uma funçao famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)