// OPERADORES LÓGICOS

/*
! (negação) // transforma a condição no oposto dela
&& (conjunção/ "e" lógico) // as duas condições tem que ser verdadeira
|| (disjunção/ "ou" lógico) // uma das duas condições tem que ser verdadeira
*/

// ORDEM DE PRIORIDADE DOS OPERADORES LÓGICOS
// 1º (!)
// 2º (&&)
// 3º (||)

var a = 5
var b = 8

true && false // false 
true || false // true
!true // false
!false // true

// Juntando operadores
// Sempre que se juntar operadores a sequência de prioridades fica primero aritméticos, depois relacionais e por ultimo lógicos 

a > b && b % 2 == 0
/*

Primeiro faz os operadores aritméticos:  b % 2 -> 8 ao quadrado -> 8 * 8: 64
a > b && 64 == 0
Depois faz os operadores relacionais: a > b -> 5 > 8 -> false e 64 == 0 -> false
false && false
Por último faz os operadores lógicos: false && false -> false

*/
a <= b || b / 2 == 2
/*

Primeiro faz os operadores aritméticos: b / 2 -> 8 / 2 -> 4
a <= b || 4 == 2
Depois faz os operadores relacionais: a <= b -> 5 <= 8 -> true e 4 == 2 -> false
true || false
Por último faz os operadores lógicos: true || false -> true

*/

//EXEMPLOS DE USO REAL

idade >= 15 && idade <= 17 // a idade está entre 15 e 17?

estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?

salario > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?


