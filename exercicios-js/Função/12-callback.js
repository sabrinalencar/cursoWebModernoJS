const notas = [7.7, 8.0, 6.5, 3.6, 9.0, 7.4]

//Sem callback (lembrar de usar For In)
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
} 
console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas3)

//Outra opcao 
const notasMenorQue7 = nota => nota < 7
const notasBaixas = notas.filter(notasMenorQue7)
