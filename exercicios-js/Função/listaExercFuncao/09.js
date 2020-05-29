function sistemaNotas(nota) {
    if (nota > 100 || nota < 0){ return 'nota inválida' }
    if(nota < 38){ return `Reprovado nota: ${nota}` }
    let arredonda = Math.ceil(nota / 5)
    
    if ((arredonda * 5) - nota < 3) { return `Aprovado nota ${arredonda * 5}`}
    else { return `Aprovado nota ${nota}`}
}
console.log(sistemaNotas(84))
console.log(sistemaNotas(0))
console.log(sistemaNotas(38))
console.log(sistemaNotas(37))
console.log(sistemaNotas(99))
console.log(sistemaNotas(-8))

//Correção também é possível separar em duas funções ()
function sistema(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40){ console.log(`Aprovado com nota ${notaCorrigida}`)}
    else { console.log(`Reprovado com nota ${notaCorrigida}`)}
}

function arredondar(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    }else {
        return nota
    }
}
sistema(84)
sistema(38)
sistema(0)
sistema(99)
