// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            // enquanto recebe os dados  
            res.on('data', dados => {
                resultado += dados
            })
    
            // finalizou
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// recurso do ES8
// Objetivo de simplificar o uso de promise

let obterAlunos = async () => {
    // aqui no corpo posso usar await
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna obj do tipo AsyncFunction

// Em cimda desse AsyncFunction que chamo a função then
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))