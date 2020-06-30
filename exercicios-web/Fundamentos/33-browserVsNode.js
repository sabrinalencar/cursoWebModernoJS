/**Codigo para ser usado no console do browser*/
window
this
this === window
var a = "texto"
window.a //texto
var a = 123
window.a
let b = 123
window.b //undefined
this.b
b //123
const c = 456
window.c //undefined
c //456
function f1() {
    return this === window
}
f1()/true
window.f1()//true
this.f1()//true
const f2 = () => console.log( this === window)
f2()//true
this.f2() //is not a function
/** Constantes e variaveis declaradas com Let não vão pro escopo global (window) */



let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)//3
console.log(global.b)//123
console.log(this.c)//456
console.log(module.exports.c)//456
console.log(module.exports === this)//true
console.log(module.exports) //{ c: 456, d: false, e:'teste} 

//criando uma variavel sem let e var
abc = 3 // nao faça isso! nao coloque variaveis no escopo global
console.log(global.abc)//3