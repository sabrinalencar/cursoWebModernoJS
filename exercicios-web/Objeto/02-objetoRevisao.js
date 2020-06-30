//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco 
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 124
        }
    },
    condutores: [{
        nome:'Junior',
        idade:19
    }, {
        nome: 'Ana',
        idade: 18
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000 //acessando com operador ponto
carro['proprietario']['endereco']['logradouro'] = 'Avenida C' //acessando com strings pode ser interessante em alguns momentos
console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

//Atencao ao tentar acessar uma propriedade de algo indefinido vai gerar Erro

delete carro.condutores
console.log(carro.condutores)//undefined
console.log(carro.condutores.length)//Erro