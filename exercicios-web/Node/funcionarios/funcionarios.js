const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //client http -> faz requisiçoes pra obter informaçoes de algo remoto

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salário ?
    const funcMenorSalario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(funcMenorSalario)
})

