function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
let opcao = 0
//obrigatoriamente vai executar uma primeira repetição
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao sorteada foi ${opcao}`)
} while(opcao != -1)

console.log('Até a proxima')