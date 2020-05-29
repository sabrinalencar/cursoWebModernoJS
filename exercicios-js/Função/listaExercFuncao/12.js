function fatorial(n) {
    if(n == 0) { return 1 } 
    let fatorial = 1
    while(n > 1) {
        fatorial *= n
        n = n - 1
    }
    return fatorial
}

console.log(fatorial(3))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(5))


// Recursiva
function fatorialRecursivo (n) {
    if(n == 0) { return 1 }
    else { return n * fatorialRecursivo(n - 1)}
}

console.log(fatorialRecursivo(10))