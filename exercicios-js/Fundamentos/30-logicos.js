//Tenho 2 trabalhos pro fds, dependendo do sucesso na realizacao deles poderei comprar coisas diferentes 

function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    const comprarTv32 = trab1 != trab2 //Xor
    const manterSaudavel = !comprarSorvete
    
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } 
}
/**
 * Repare que o return acima contem um obj criado de uma forma reduzida, nao precisa ficar repetindo chave valor (novo recurso ES2015)
 * { comprarSorvete: comprarSorvete, comprarTv50: comprarTv50 , ... }
 */

 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))