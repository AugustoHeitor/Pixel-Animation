let cxAviso = document.getElementById('cx-aviso')
let aviso = document.getElementById('aviso')
let contador = document.getElementById('contador')
let caixa = document.getElementById('cx-caixa')

addEventListener('click', (e)=>{
    if(e.target.className === "gold"){
        let contadorValor = document.getElementById('contador').innerHTML
        let valorInteiro = parseInt(contadorValor)
        valorInteiro+=1
        contador.innerHTML = valorInteiro
        e.target.style.display="none"
        cxAviso.style.display="block"
        setTimeout(function() {
            cxAviso.style.display="none";
          }, 500)
    }

    let contadorValor = document.getElementById('contador').innerHTML

    if(contadorValor === '4'){
        setTimeout(function() {
            aviso.innerHTML="Caixa Desbloqueada!!"
            cxAviso.style.display="block";
            caixa.style.display="block";
          }, 2000)
    }

    
})