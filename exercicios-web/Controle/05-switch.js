const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: 
            console.log('Nota Inválida')
    }
}
// o break evita que uma vez que ele entra em uma sentença entre em todas outras abaixo dela 
//switch nao suporta intervalos nem numeros quebrados
imprimirResultado(8.9)
imprimirResultado(1)
imprimirResultado(8)
imprimirResultado(-1)
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)

