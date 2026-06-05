//FUNÇÃO QUE RETORNA SE O NÚMERO É PAR OU IMPAR

function parimp(n){// n é o parâmetro
    if(n%2 == 0){ // tudo que tem dentro da function é a ação
        return 'par'
    }else{
        return 'impar'// o retorno é a que for validade nesse caso do numero 13 o retorno e impar
    }
}
let resposta = parimp(13) // parimp é o chamada
console.log(resposta)