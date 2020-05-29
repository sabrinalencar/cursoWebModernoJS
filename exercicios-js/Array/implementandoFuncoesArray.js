// Desafio - implementar forEach
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

// Desafio - implementar map
Array.prototype.map2 = function(callback) {
    let newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i , this))
    }
    return newArray
}

// Desafio - implementar Filter
Array.prototype.filter2 = function(callback) {
    let filteredArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

const nums = [11, 34, 54, 12, 34, 13, 17, 25, 19]
let result = nums.map2(num => num + 10).filter2(num => num % 2) //[ 21, 23, 27, 35, 29 ]
console.log(result)
result.forEach2((num, indice) => console.log(`${indice + 1}: ${num}`)) //1: 21  2: 23  3: 27  4: 35  5: 29
