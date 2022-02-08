function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(248, 248, 110)'
    }else if( hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(3, 172, 194)'
    }else{
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(52, 78, 78)'
        document.body.style.color = 'rgb(5, 148, 1)'
        
    }
}