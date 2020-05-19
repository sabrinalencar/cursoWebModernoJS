// Cadeia de protótipos (prototype chain)
//Setando com __proto__ (ES2015)
const avo = { atrib1: 'A' } //tem Object.prototype como prototipo
const pai = { __proto__: avo, atrib2: 'B', atrib3: 3 }
const filho = { __proto__: pai, atrib3: 'C' }
console.log(filho.atrib0, filho.atrib1, filho.atrib2, filho.atrib3) //undefined A B C

const carro = {
    velAtual: 0, 
    velMax: 200,
    acelerar(delta) {
        if( this.velAtual + delta <= this.velMax ){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40', 
    status() {
        return `${this.modelo}: ${super.status()}` // auxilia a não reescrever o status novamente
    }
}
//Funçao importante!! Setando com setPrototypeOf
Object.setPrototypeOf(ferrari, carro) //(objeto, prototipo)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)//modelo Vmax
console.log(volvo)// modelo status()
volvo.acelerar(100)
console.log(volvo.status())// V40: 100 km/h de 200 km/h
ferrari.acelerar(300)
console.log(ferrari.status())