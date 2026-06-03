function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'imagem_1.webp')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'imagem_2.webp')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagem_3.webp')
            }else{
                //Idoso
                img.setAttribute('src', 'imagem_4.webp')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'imagem_5.webp')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'imagem_6.webp')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagem_7.webp')
            }else{
                //Idoso
                img.setAttribute('src', 'imagem_8.webp')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}