// setInterval dispara a funcao que esta no parametro de acordo com o tempo dado em miliseg
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa 
//NaN NaN NaN NaN NaN NaN pois o this não é oq esperamos já que nao estamos invocando a funcao diretamente e sim o setInterval (podemos corrigir com bind ou com uma const)