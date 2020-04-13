const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa!') // cuidado! (como é fracamente tipada vai deixar passar esse tipo de dado e ainda fará a comparação)