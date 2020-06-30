function MeuObjeto() {}
console.log(MeuObjeto.prototype)//{}

const obj1 = new MeuObjeto 
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
//Obj construidos a partir de funcao construtora tem o atrib proto apontando pro prototype daquela funcao
console.log(obj1.__proto__ === MeuObjeto.prototype)
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Olá meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // mudando de Object.prototype 
obj3.nome = 'obj3'
obj3.falar()

//Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)// não é undefined portanto o atributo __proto__ existe mas aponta pra nulo (Object.prototype não tem prototipo)