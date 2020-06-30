//usando operador destructuring e parametros padroes
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//usando um objeto 
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 })) //usa o parametro padrao  max = 1000
console.log(rand({})) //min = 0 e max = 1000
// erro console.log(rand()) tentando desestruturar algo undefined