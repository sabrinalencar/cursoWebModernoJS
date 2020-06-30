for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// for In -> percorre indice
for(let i in assuntosEcma) {
    console.log(i)
}

// for Of -> percorre valor
for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])
// percorrendo arrays
for(let assunto of assuntosMap) {
    console.log(assunto)
}
// percorrendo chaves
for(let chave of assuntosMap.keys()) {
    console.log(chave)
}
// percorrendo valores
for(let valor of assuntosMap.values()) {
    console.log(valor)
}
// entries + destructuring
for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch,vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}