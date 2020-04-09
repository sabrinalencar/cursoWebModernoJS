let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)//1
console.log(!!isAtivo)//true

console.log("os verdadeiros...")
console.log(!!3)//true
console.log(!!-1)//true
console.log(!!' ')//true, (string c espaco)
console.log(!![])//true (vetor)
console.log(!!Infinity)//true
isAtivo = 33
console.log(!!(isAtivo = 33))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))//false

console.log("obs..")
console.log(!!('' || null || 0 || ' ' ))//true
console.log('' || null || 0 || 'epa' || ' ')//epa (retorna primeiro valor vdd)