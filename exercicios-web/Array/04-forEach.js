// A função callback passada no forEach recebe 3 parâmetros (elemento, indice, array)

const aprovados = ['Agatha', 'Bruno', 'Rafael', 'Theo']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
})

aprovados.forEach(aprovado => console.log(aprovado))

const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)
