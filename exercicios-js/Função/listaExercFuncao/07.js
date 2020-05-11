// Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara
function Bhaskara(a, b, c) {
    let delta = (b * b) - (4 * a * c)
    if(delta < 0) return 'Delta é negativo'
    let x = []
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - Math.sqrt(delta)) / 2 * a
    x.push(x1)
    x.push(x2)
    return x

}

console.log(Bhaskara(2, 1, 3))
console.log(Bhaskara(1, -3, -10))
console.log(Bhaskara(1, 3, 2))
