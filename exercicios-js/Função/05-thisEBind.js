//O this só não varia nunca numa função arrow

const pessoa = {
    saudacao: 'Bom dia!', 
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //undefined conflito de paradigmas: funcional e OO

//o argumento da funcao bind serve para usar sempre o dono daquele metodo quando o mesmo for chamado (this sera sempre o objeto que passou como parametro)
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //Bom dia!