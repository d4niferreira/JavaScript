var numeros = []
var num = document.getElementById('numero')
var valores = document.getElementById('numadd')
var resultado = document.getElementById('resultados')

function adicionar() {
    resultado.innerHTML = ''  
    let n = Number(num.value)
    let find = numeros.indexOf(n) // retorna -1 se nao encontrar o valor
    let tamanho = num.value.length
    console.log(tamanho)
    if ((n >= 1 && n <= 100) && find == -1 && tamanho != 0) {
        numeros.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        valores.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    console.log(`Nosso vetor é ${numeros}`)
}

function analisar() {
    if (numeros.length != 0) {  
        resultado.innerHTML = ''  
             
        //---------------total de numeros cadastrados--------------------------------
        let tamanhoN = numeros.length
        resultado.innerHTML += `<p> Ao todo, temos ${tamanhoN} números cadastrados </p>`
        //----------------maior valor informado -------------------------------------
        let max = numeros.reduce(function (a, b) {
            return Math.max(a, b)
        })
        resultado.innerHTML += `<p> O maior valor informado foi ${max}</p>`
        //-----------------menor valor informado ------------------------------------
        let min = numeros.reduce(function (a, b) {
            return Math.min(a, b)
        })
        resultado.innerHTML += `<p> O menor valor informado foi ${min} </p>`

        //---------------soma dos valores --------------------------------------------
        let soma =0
        for(let c=0;  c < numeros.length ;c++){
            console.log(`c ${c}`)
            soma += numeros[c]
        }
        resultado.innerHTML += `<p> Somando todos os valores, temos: ${soma} </p>`

        //--------------media dos valores --------------------------------------------
        let media = soma / tamanhoN
        resultado.innerHTML +=` <p> A média dos valores digitado é ${media}</p>`

        resultado.style.font = 'normal 12pt Arial'
    } else {
        window.alert("Por favor, adicione um número")
    }
}