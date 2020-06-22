// ES06 - 2015  ES07 - 2016  ES08 - 2017

// let e const 
{
    var a = 2
    let b = 3
    console.log('b:',b) // let tem escopo de bloco só é visível aqui
}
console.log('a:',a)// var não tem escopo de bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)
console.log(`${produto} 
é 
caro`)

// Destructuring + operador rest (rest params)
const [l, e, t, ...ras] = "string"
console.log(l, e, t, ras) // s t r ['i', 'n', 'g']

const [x, y] = [1, 2]
console.log('X e Y',x, y)
const [, b, c] = [1, 2, 3]
console.log('b e c',b, c)

const { idade: i, nome: name } = { nome: 'Sabrina', idade: '20' }
console.log(i, name)