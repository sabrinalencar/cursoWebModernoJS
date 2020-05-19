const pai = { nome: 'Edson', corCabelo: 'preto' }

const filha = Object.create(pai)
filha.nome = 'Sabrina'
console.log(filha.corCabelo)
filha.corCabelo = 'Castanho Claro'

const filho = Object.create(pai, {
    nome: { value: 'Guilherme', writable: false, enumerable: true }
})

console.log(filho.nome)
filho.nome = 'Pedro'
console.log(`${filho.nome} tem cabelo ${filho.corCabelo}`)
//por padrão lista atributos que foram setados  
console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (let key in filho) {
    filho.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}