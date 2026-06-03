function carregar(){

var msg = document.querySelector('#msg')

var foto = document.querySelector('#imagem')

var data = new Date()

var hora = data.getHours()

msg.innerHTML = `Agora são <strong>${hora}</strong> horas`

if(hora >=0 && hora < 12){
    //bom dia
    foto.src = 'manha-circular.webp'
    document.body.style.background = '#f5cf6e'
} else if(hora < 18){
    //boa tarde
    foto.src = 'tarde-circular.webp'
    document.body.style.background = '#7F81AA'
}else{
    //boa noite
    foto.src = 'noite-circular.webp'
    document.body.style.background = '#141917'

}


}