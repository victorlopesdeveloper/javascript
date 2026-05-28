//OPERADORES RELACIONAIS 

/*
> (Sinal de maior que)
< (Sinal de menor que )
>= (Sinal de maior ou igual)
<= (Sinal de menor ou igual)
== (Sinal de igual)
!= (Sinal de diferente)

obs: O resultado do valor de um operador relacional sempre será um valor booleano (True ou False)
*/

5 > 2 // Operador de maior que // resultado: true
7 < 4 // Operador de menor que // resultado: false
8 >= 8 // Operador de maior ou igual // resultado: true
9 <= 7 // Operador de menor ou igual // resultado: false
5 == 5 // Operador de igual no javascript // resultado: true
4 != 4 // Operador de diferente // resultado: false

var n1 = 10
var n2 = 5
var n3 = 3
var n4 = 8
var n5 = 10

n1 > n2 // true // 10 é maior que 5
n1 < n2 //false // 10 não é menor do que 5
n2 + n3 < n4 // false // 5 + 3 = 8 não é menor que  8
n2 + n3 >= n4 // true // 5 + 3 = 8 não é maior que 8 mas é igual
n1 == n5 // true // 10 é igual a 10

// OPERADOR RELACIONAL DE IDENTIDADE

/*
=== (estritamente igual)
!== (estritamente diferente)
*/

10 === 10 // true, pois os dois valores são igual e os dois dados são iguais, nesse caso dois type number
10 === '10' // false, pois os valores são iguais porém o primeiro e tipo number e o segundo e tipo string

10 !== 10 // false, eles não são diferentes pois os valores e tipos são iguais
10 !== '10' // true, pois os valores são igual, porém os tipos são diferentes

