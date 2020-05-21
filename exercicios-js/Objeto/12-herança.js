console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//toda funcao tem um prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
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