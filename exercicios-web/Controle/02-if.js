/** JS desconsidera identação, bloco if sem chaves considera apenas 1 sentença
*/
function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')//sempre executa
}
teste1(6)//Final
teste1(8)// 8 Final

function teste2(num) {
    if(num > 7);{ //cuidado com ';'
        console.log(num)
    }
}
//imprime ambos os numeros!
teste2(6)//6
teste2(8)//8