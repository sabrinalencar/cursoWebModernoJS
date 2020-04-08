let numero = 1
{ 
    let numero = 2
    console.log("dentro = ", numero)//2
}
console.log("fora = ", numero)//1
/*
(Let da preferencia pro bloco, procura variavel "numero" no escopo mais interno, se tem ok senao procura no escopo maior)
 variaveis definidas com let têm escopo global, escopo de função e escopo de bloco! */
