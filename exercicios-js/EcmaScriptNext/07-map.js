const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)// undefined
// Temos que usar get
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'objeto'],
    [123, 'numeros']
])

// forEach no map recebe como parametro valor e chave
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))// has -> função que diz se está presente
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

// chaves não podem ser repetidas e são sobrescritas
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)