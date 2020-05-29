console.log(typeof Array, typeof new Array, typeof [])//function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']//sobrescrevi (let)
console.log(aprovados[0])
console.log(aprovados[3])//undefined

aprovados[3] = 'Paulo'
aprovados.push('Rafael')
console.log(aprovados.length)//5

aprovados[9] = 'João'
console.log(aprovados.length)//10
console.log(aprovados[8] === undefined)//true
console.log(aprovados)

//Algumas funções do Array
//SORT
aprovados.sort()//altera o array ordenando-o 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])//undefined
console.log(aprovados[2])

//SPLICE
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2)//(indice, qts elementos quero excluir)
console.log(aprovados)//Bia
aprovados.splice(1, 0, 'Elemento 1', 'Elemento 2' )
console.log(aprovados)
aprovados.splice(1, 1, 'Elemento 1 novo')
console.log(aprovados)