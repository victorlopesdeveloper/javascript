

function contador(){
    let inicio = document.querySelector('#iinicio')
    let fim = document.querySelector('#ifim')
    let passo = document.querySelector('#ipasso')
    let res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} &#x1F449`
            }
            
        }else{
            //Contagem regressiva
            for(c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += `&#x1F3F3`
        
    }
    
}
