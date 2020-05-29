const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()//remove ultimo elemento!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos) //Hamilton, Alonso, Bottas, Raikkonen, Verstappen

//Slice = pedaço (Diferente de Splice!)
const algunsPilotos = pilotos.slice(2) //novo array
console.log(algunsPilotos) //Bottas, Raikkonen, Verstappen

const algunsPilotos2 = pilotos.slice(1, 4) // não inclui ind 4
console.log(algunsPilotos2)//Alonso, Bottas, Raikkonen
