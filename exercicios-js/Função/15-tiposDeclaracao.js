console.log(soma(3,5))
// function declaration (o interpretador carrega primeiro as funcoes entao podemos chamá-la antes)
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(4,3))

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3,4))

