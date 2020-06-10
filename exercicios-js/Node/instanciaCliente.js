// A e B compartilham do mesmo obj retornado
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// instancia nova retorna uma funcao, pra ter acesso ao obj preciso invocar a factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)// 3

contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)// 4 1