function tratarErroeLancar (erro) {
    //throw new Error('...')
    //throw 10 
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroeLancar(e)
    } finally {
        console.log('sempre executado')
    }
    
}

const obj = { name: 'Roberto '}
imprimirNomeGritado(obj)//cannot read property 'toUpperCase' of undefined