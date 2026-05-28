//OPERADORES ARITMÉTICOS E ATRIBUIÇÃO

var soma = 5 + 2 // (+) Operador de soma // resultado: 5 + 2 = 7
var subtracao = 5 - 2 // (-) Operador de subtração // resultado: 5 - 2 = 3
var multiplicacao = 5 * 2 // (*) Operador de multiplicação // resultado: 5 * 2 = 10
var divisao = 5 / 2 // (/) Operador de divisão //resultado: 5 / 2 = 2.5
var modulo = 5 % 2 // (%) Operador de módulo (ou resto de divisão) // resultado: 5 % 2 = 1 (cabe duas vezes 2 no cinco e sobra 1 que é o modulo da operação )
var exponenciacao = 5 ** 2 // Operador de exponenciação (ou potenciação) // resultado: 5 ** 2 = 25 ( 5 * 5 = 25, o mesmo que 5 elevado a 2)

//PRECEDÊNCIA DA PRIORIDADE DOS OPERADORES NAS OPERAÇÕES 

/*
1º.  ()
2º.  **
3º.  * / %
4º.  + -
*/

//ATRIBUIÇÃO SIMPLES EX:

var a = 5 + 3 // resultado: 8
var b = a % 5 // resultado: 3 // 5 só cabe uma vez em 8 e sobra 3 que é o resultado
var c = 5 * b ** 2 // resultado: 45 // calculo: 5 * (b ** 2(sendo assim 3 que é o valor de b elevado ao quadrado que dá 9)) -> 5 * 9 = 45
var d = 10 - a / 2 // resultado: 6 // calculo: 10 - (8 que é o valor de a / 2) -> 10 - 4 = 6
var e = 6 * 2 / d // resultado: 2 // calculo: 6 * 2 / 6 = 2
var f = b % e + 4 / e // resultado: 3 // primeiro faz b que no caso é 3 % de e que é 2 e sobra (1), depois faz 4 / e que é 2 que dá 2, depois faz 1 + 2 = 3

//AUTO-ATRIBUIÇÕES

var n = 3
n = n + 4 // agora n esta valendo 3 + 4 = 7
n = n - 5 // agora n esta valendo 7 - 5 = 2
n = n * 4 // agora n esta valendo 2 * 4 = 8
n = n / 2 // agora n esta valendo 8 / 2 = 4
n = n ** 2 // agora n esta valendo 4 elevado a 2 = 16
n = n % 5 // agora n esta valendo 1 porque a divisão de 16 / 5 para sobrar um numero interio é 3, pois 3 * 5 é igual a 15 e sobra 1

//SIMPLIFICANDO (só serve se a variável receber ela mesma)

var n = 3
n += 4 // agora n esta valendo 3 + 4 = 7
n -= 5 // agora n esta valendo 7 - 5 = 2
n *= 4 // // agora n esta valendo 2 * 4 = 8
n /= 2 // agora n esta valendo 8 / 2 = 4
n **= 2 // agora n esta valendo 4 elevado a 2 = 16
n %= 5 // agora n esta valendo 1 porque a divisão de 16 / 5 para sobrar um numero interio é 3, pois 3 * 5 é igual a 15 e sobra 1

//INCREMENTO

var x = 5
x = x + 1 //também pode ser declarado como x++
x = x - 1 //também pode ser declarado como x--