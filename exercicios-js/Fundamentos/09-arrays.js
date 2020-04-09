const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[4])//indice n existe (undefined)

//em JS posso adicionar em qualquer posicao
valores[4] = 10
valores[10] = 5
console.log(valores)//[ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 5 ]


// Funções Push, Pop e Delete
valores.push('teste', null,false)
console.log(valores)
console.log(valores.pop())//retira o ultimo e  retorna esse valor (false)
delete valores[0]
console.log(valores)
/**<1 empty item>,
  8.9,
  6.3,
  9.2,
  10,
  <5 empty items>,
  5,
  'teste',
  null ]
*/

console.log(typeof valores)//object
