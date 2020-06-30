function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}
//random gera um valor entre 0 e 1, quando der 0 * intervalo +min = min; quando der 1*(max-min)+min = max
let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao sorteada foi ${opcao}`)
}
console.log('Até a proxima')