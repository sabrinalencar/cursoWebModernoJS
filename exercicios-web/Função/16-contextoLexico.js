const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() //Global
/** a funcao carrega consigo o contexto em que ela foi escrita, e nao em que foi executada */