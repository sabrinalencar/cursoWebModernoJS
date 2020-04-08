var numero = 1
{
    var numero = 2
    console.log("dentro = ", numero)//2
}
console.log("fora = ", numero)//2 pois está no msm escopo (blloco nao muda escopo somente em função)
/* variaveis definidas com var têm escopo global e escopo de função */