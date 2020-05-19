const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)// {} prototipo pai
// prototipo aponta para Object prototype
console.log(ferrari.__proto__ === Object.prototype)//true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null )// true O prototipo do Object.prototype é nulo

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)// function
console.log(Object.prototype, MeuObjeto.prototype)// {}