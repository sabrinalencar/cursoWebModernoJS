const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log (Number.isInteger(peso1))//descobrindo se tem um valor inteiro em peso1

const p1 = 9.8
const p2 = 6.7
const total = p1 * peso1 + p2 * peso2
const media = total / (peso1 + peso2)

console.log('Média com 2 casas decimais',media.toFixed(2)) 

console.log('Convertendo media pra string', media.toString())
console.log('Média em string e na base 2',media.toString(2))
console.log('Tipo da var media:', typeof media)

//Alguns cuidados com number
console.log(7/0) //Infinity
console.log("10"/2)//ele realmente divide o conteudo msm sendo uma string
console.log('3' + 2)//32 string tem preferencia, concatena
console.log(0.1 + 0.7) //0.7999999999
//console.log(10.toString) não consigo fazer com o numero literal



console.log(typeof Number) //function
