class Lancamento {
    constructor(nome, valor){
        this.nome = nome //criando atrib nome no obj que recebe nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDeGas = new Lancamento('Gás', -150)
const auxilioEmergencial = new Lancamento('Auxilio', 600)

const contas = new CicloFinanceiro(5, 2020)
contas.addLancamento(salario, contaDeLuz, contaDeGas, auxilioEmergencial)
console.log(contas.sumario())