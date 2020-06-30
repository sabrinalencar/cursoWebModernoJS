//cuidado p n confundir destructuring com declaracao de vetor
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] 
console.log(n1, n3, n5, n6) //10 9 undefined 0

// não muito usual por ser um codigo de dificil leitura, provavelmente seria melhor pegar o elemento pelo indice
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) //6