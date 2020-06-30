/**
 * Comparacao simples e comparacao restrita
 * A primeira compara valor, a segunda compara valor e tipo.
 * Geralmente mais adequado usar o estritamente igual
 */

 console.log('01)', '1' == 1) //true
 console.log('02)', '1' === 1) //string != number false
 console.log('03)', '3' != 3) //false
 console.log('04)', '3' !== 3) //true 

 console.log('05)', 3 < 2) //false
 console.log('06)', 3 > 2) //true
 console.log('07)', 3 <= 2) //false
 console.log('08)', 3 >= 2) //true

 const d1 = new Date(0) //data origem JS
 const d2 = new Date(0)
 //Lembrando que d1 e d2 guardam enderecos de memoria
 console.log('09)', d1 === d2) //false 
 console.log('10)', d1 == d2) //false
 console.log('09)', d1.getTime() == d2.getTime()) //true

 console.log('12)', undefined == null) //true
 console.log('13)', undefined === null) //false