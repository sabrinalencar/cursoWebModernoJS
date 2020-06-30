function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Promisse rodando')
    .then(frase => frase.concat('!?!!')) // trata a resposta
    .then(outraFrase => console.log(outraFrase))
    //.catch(e => console.log(e)) // trata o erro