// não aceita repetição e não é indexado
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)// repetições ignoradas