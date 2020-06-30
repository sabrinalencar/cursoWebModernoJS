const nome = 'Sabrina'
const concatenar = 'Olá ' + nome + ':)'


const template = `
    Olá
    ${nome} 
    :)`
console.log(concatenar,template)
//Template suporta quebra de linhas

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) //1 + 1 = 2

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`) //chamou a funcao up com parametro cuidado