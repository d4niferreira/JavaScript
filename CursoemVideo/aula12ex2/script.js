function verificar(){ 
    
    var date = $('#date-input').val().split("-");
    console.log(date, $('#date-input').val())
    var day = date[2];
    var month = date[1];
    var year = date[0];
    console.log(`Nascimento em ${day}/ ${month}/ ${year}`);
     
    //imagem do signo
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    //verificar signo
    var dia = Number(day)
    var mes = Number(month)
    var resultado = document.getElementById('signo')
    
    if( dia  > 20 && mes == 1 || dia < 19 && mes == 2){ 
        resultado.innerHTML = 'Seu signo é Aquário </br>'
        img.setAttribute('src','imagens/aquario.jpg')
    }else if( dia  > 18 && mes == 2 || dia < 21 && mes == 3){ 
        console.log('Peixes')
        resultado.innerHTML = 'Seu signo é Peixes </br>'
        img.setAttribute('src','imagens/peixes.jpg')
    }else if( dia  > 20 && mes == 3 || dia < 21 && mes == 4){
        console.log('Áries')
        resultado.innerHTML = 'Seu signo é Áries </br>'
        img.setAttribute('src','imagens/aries.jpg')
    }else if( dia  > 20 && mes == 4 || dia < 21 && mes == 5){
        console.log('Touro')
        resultado.innerHTML = 'Seu signo é Touro </br>'
        img.setAttribute('src','imagens/touro.jpg')
    }else if( dia  > 20 && mes == 5 || dia < 21 && mes == 6){
        console.log('Gêmeos')
        resultado.innerHTML = 'Seu signo é Gêmeos </br>'
        img.setAttribute('src','imagens/gemeos.jpg')
    }else if( dia  > 20 && mes == 6 || dia < 23 && mes == 7){
        console.log('Câncer')
        resultado.innerHTML = 'Seu signo é Câncer </br>'
        img.setAttribute('src','imagens/cancer.jpg')
    }else if( dia  > 22 && mes == 7 || dia < 23 && mes == 8){
        console.log('Leão')
        resultado.innerHTML = 'Seu signo é Leão </br>'
        img.setAttribute('src','imagens/leao.jpg')
    }else if( dia  > 22 && mes == 8 || dia < 23 && mes == 9){
        console.log('Virgem')
        resultado.innerHTML = 'Seu signo é Virgem </br>'
        img.setAttribute('src','imagens/virgem.jpg')
    }else if( dia  > 22 && mes == 9 || dia < 23 && mes == 10){
        console.log('Libra')
        resultado.innerHTML = 'Seu signo é Libra </br>'
        img.setAttribute('src','imagens/libra.jpg')
    }else if( dia  > 22 && mes == 10 || dia < 22 && mes == 11){
        console.log('Escorpião')
        resultado.innerHTML = 'Seu signo é Escorpião </br>'
        img.setAttribute('src','imagens/escorpiao.jpg')
    }else if( dia  > 22 && mes == 11 || dia < 22 && mes == 12){
        console.log('Sagitário')
        resultado.innerHTML = 'Seu signo é Sagitário </br>'
        img.setAttribute('src','imagens/sagitario.jpg')
    }else if( dia  > 21 && mes == 12 || dia < 21 && mes == 1){
        console.log('Capricórnio')
        resultado.innerHTML = 'Seu signo é Capricórnio </br>'
        img.setAttribute('src','imagens/capricornio.jpg')
    }else{  
        console.log('ERRO!')
    }
    img.style.textAlign = 'center'
    resultado.appendChild(img)
}
