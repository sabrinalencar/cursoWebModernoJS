/** De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras  */

function isBissexto(ano) {
    if(ano <= 0){ return false }
    else if(ano % 400 == 0) { return true }
    else if(ano % 100 == 0) { return false }
    else if(ano % 4 == 0) { return true }
    else { return false }
}
console.log(isBissexto(2020))
console.log(isBissexto(2000))
console.log(isBissexto(2016))
console.log(isBissexto(2019))