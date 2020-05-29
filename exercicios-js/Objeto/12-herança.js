console.log(typeof String) //function
console.log(typeof Array) //function
console.log(typeof Object) //function
//toda funcao tem um prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')// split transforma em array, reverse é uma funcao de array e join junta em string novamente
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

/**
 * Tenha cuidado ao adicionar novos comportamentos, sobrescrever um existente nem se fala!!!
 * String.prototype.toString = function(){
 *      return 'Sobrescrevi toString, lasquei tudo'
 *  }
 */