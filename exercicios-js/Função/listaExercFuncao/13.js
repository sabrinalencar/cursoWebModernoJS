function diaUtil (diaSemana) {
    switch(diaSemana){
        case 1: return 'Fim de Semana' 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: return 'Dia Util'
        case 7: return 'Fim de Semana'
        default: return 'Dia Inválido'
    }
}
console.log(diaUtil(1))//Domingo
console.log(diaUtil(2))
console.log(diaUtil(3))
console.log(diaUtil(4))
console.log(diaUtil(5))
console.log(diaUtil(6))
console.log(diaUtil(7))//Sabado