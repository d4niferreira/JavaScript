function tabelaT(){

    var numero = document.getElementById("num")
    var resultado = document.getElementById("resultado")
    
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        resultado.innerHTML = ''
        for(var c = 1; c <=10; c++){  
            let item = document.createElement('p')
            let texto = document.createTextNode(`${n} x ${c} = ${n*c}`)
            item.appendChild(texto)
            item.style.margin = '5px'

            resultado.appendChild(item)
            resultado.style.font = 'normal 12pt Arial'
            
            //tentei colocar o texto diretamente como appendChild do resultado e nao deu certo 

        }
    }
}