let num = [5, 8, 2, 9, 3]

//num[5] = 11 // ADICIONA UM ITEM NA POSIÇÃO 5 DA ARRAY

num.push(7) // ADICIONA UM ITEM AO FINAL DA ARRAY

num.sort() // VAI FAZER COM QUE TODOS OS ELEMENTOS NUMEROS FIQUEM EM ORDEM CRESCENTE


console.log(num[0]) // MOSTRA O NUMERO QUE ESTÁ NO INDICE 0, QUE NESSE CASO É O 2 POIS USEI O .sort(), PARA COLOCAR OS ELEMENTOS EM ORDEM CRESCENTE
console.log(`O tamanho do array ${num.length}`) // o .length serve para ver qual o tamanho da variavel
console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(8) // Ele está na posição 4 porque eu ordenei os valores usando o .sort()
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

