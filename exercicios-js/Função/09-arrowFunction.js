/** O this de uma arrow function é o this associado ao contexto em que a funcao foi escrita */
let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(this)//false "O this não é o this"
comparaComThis(global)//true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//false
comparaComThis(obj)//true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//false
comparaComThisArrow(module.exports)//true

//Bind não tem mais força que a Arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//false
comparaComThisArrow(module.exports)//true

