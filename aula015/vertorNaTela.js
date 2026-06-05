let valores = [1 , 2, 3, 4 , 5, 6]

/*

for(let pos = 0; pos < valores.length; pos++){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}*/
// O for fez com que percoresse toda a array ate o tamanho dele, sendo assim mostrando cada elemento dentro da array

// SIMPLIFICANDO O FOR

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// OS DOIS CÓDIGOS TEM A MESMA FUNÇÃO

console.log(valores.indexOf(3)) // o indexOf() procura se tem o valor que eu escolher e diz qual a sua posição