const sequencia = {
    _valor: 1, //convenção 
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) 
        this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor) // 1 2 internamente ta chamando get
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)// 1000 1001
sequencia.valor = 900 // não vai atribuir pois é menor
console.log(sequencia.valor, sequencia.valor)