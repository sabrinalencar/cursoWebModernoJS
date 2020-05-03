const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if(x == 5){
        break
    }
    console.log(`ind ${x} = ${nums[x]}`)
}
// break causa desvio de fluxo pra fora do laço 

for (let y in nums) {
    if(y == 5){
        continue
    }
    console.log(`ind ${y} = ${nums[y]}`)
}
//continue faz pular um laço, vai para próxima repetição (For e While)

//criando rótulo para interromper um for especifico (Cuidado ao usar rotulos!)

externo: for (let a in nums) {
    for(let b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}