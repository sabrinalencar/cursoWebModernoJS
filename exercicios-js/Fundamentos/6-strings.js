const escola = "UFRJ"
const escola2 = "Cod3r"

console.log(escola.charAt(3)) // indice 3 -> J
console.log(escola.charCodeAt(3))//valor tabela ASCI da letra de ind 3
console.log(escola.indexOf('U'))//0
console.log(escola.indexOf('F'))//1

console.log(escola.substring(1))//FRJ
console.log(escola.substring(0,2))//vai do zero até indice 2 sem incluir o 2 Result: UF

console.log("Faculdade ".concat(escola).concat(' s2'))

console.log(escola.replace('U',3))//3FRJ

//REJEX
console.log(escola2.replace(/\d/,'e'))//substitui todos digitos do texto pela letra dada
console.log(escola.replace(/\w/g,'a'))//aaaa substitui tudo por letra e

//Legal e util!
console.log('Ana,Maria,Pedro'.split(',')) //transformando String em Array utilizando o separador (vírgula)