// pessoa -> end 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' //mudo somente o dado que está dentro e não o endereço de memoria
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa = { nome: 'Ana' } //Erro! não pode atribuir outro objeto para const pessoa

Object.freeze(pessoa) //transformamos o objeto em si, constante!

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua C'
delete pessoa.nome
console.log(pessoa.nome)//Pedro
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)