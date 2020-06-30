// par chave/valor, podemos ter a mesma chave em contextos diferentes 
const saudacao = 'ola' //contexto lexico 1

function exec() {
    const saudacao = 'faala'
    return saudacao
}

const cliente = {
    nome: 'Sabrina',
    idade: 20,
    peso: 49,
    endereco: {
        logradouro: 'Rua Rosa',
        numero: 25
    },
    amigos: {
        nome: 'Bruna'// nao dá conflito 
    }
}

console.log(saudacao)//ola
console.log(exec())//faala
console.log(cliente)