function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6)

function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeiroEuFalo()//nao imprime pois é undefined
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1) //imprime
seForVerdadeiroEuFalo(' ')//imprime
seForVerdadeiroEuFalo([])//imprime
seForVerdadeiroEuFalo([1, 2])//imprime
seForVerdadeiroEuFalo('?')//imprime