let coracao1 = document.getElementById('coracao1')
let coracao2 = document.getElementById('coracao2')
let coracao3 = document.getElementById('coracao3')
let cxCoracao = document.querySelector('.cx-coracao')
let n = 0
let n6 = 0

function coracaoAnimado(){
    if (n === 0){
        coracao1.style.width = 30+'px'
        coracao2.style.width = 30+'px'
        coracao3.style.width = 30+'px'
        coracao1.style.height = 30+'px'
        coracao2.style.height = 30+'px'
        coracao3.style.height = 30+'px'
        n+=1
    }else if(n === 1){
        coracao1.style.width = 30.2+'px'
        coracao2.style.width = 30.2+'px'
        coracao3.style.width = 30.2+'px'
        coracao1.style.height = 30.2+'px'
        coracao2.style.height = 30.2+'px'
        coracao3.style.height = 30.2+'px'
        n+=1
    }else if(n === 2){
        coracao1.style.width = 30.4+'px'
        coracao2.style.width = 30.4+'px'
        coracao3.style.width = 30.4+'px'
        coracao1.style.height = 30.4+'px'
        coracao2.style.height = 30.4+'px'
        coracao3.style.height = 30.4+'px'
        n+=1
    }else if(n === 3){
        coracao1.style.width = 30.6+'px'
        coracao2.style.width = 30.6+'px'
        coracao3.style.width = 30.6+'px'
        coracao1.style.height = 30.6+'px'
        coracao2.style.height = 30.6+'px'
        coracao3.style.height = 30.6+'px'
        n+=1
    }else if(n === 4){
        coracao1.style.width = 30.8+'px'
        coracao2.style.width = 30.8+'px'
        coracao3.style.width = 30.8+'px'
        coracao1.style.height = 30.8+'px'
        coracao2.style.height = 30.8+'px'
        coracao3.style.height = 30.8+'px'
        n+=1
    }else if(n === 5){
        coracao1.style.width = 31+'px'
        coracao2.style.width = 31+'px'
        coracao3.style.width = 31+'px'
        coracao1.style.height = 31+'px'
        coracao2.style.height = 31+'px'
        coracao3.style.height = 31+'px'
        n+=1
    }else if(n === 6){
        coracao1.style.width = 30.8+'px'
        coracao2.style.width = 30.8+'px'
        coracao3.style.width = 30.8+'px'
        coracao1.style.height = 30.8+'px'
        coracao2.style.height = 30.8+'px'
        coracao3.style.height = 30.8+'px'
        n+=1
    }else if(n === 7){
        coracao1.style.width = 30.6+'px'
        coracao2.style.width = 30.6+'px'
        coracao3.style.width = 30.6+'px'
        coracao1.style.height = 30.6+'px'
        coracao2.style.height = 30.6+'px'
        coracao3.style.height = 30.6+'px'
        n+=1
    }else if(n === 8){
        coracao1.style.width = 30.4+'px'
        coracao2.style.width = 30.4+'px'
        coracao3.style.width = 30.4+'px'
        coracao1.style.height = 30.4+'px'
        coracao2.style.height = 30.4+'px'
        coracao3.style.height = 30.4+'px'
        n+=1
    }else if(n === 9){
        coracao1.style.width = 30.2+'px'
        coracao2.style.width = 30.2+'px'
        coracao3.style.width = 30.2+'px'
        coracao1.style.height = 30.2+'px'
        coracao2.style.height = 30.2+'px'
        coracao3.style.height = 30.2+'px'
        n=0
    }

    let cxOver = document.getElementById('cx-over')

    if(n6 > 0 && n6 < 11){
        let p = document.createElement('p')
        p.innerHTML= 'Você faleceu!!!'
        p.style.color="red"
        cxOver.appendChild(p)
        n6+=1
    }
}

setInterval(coracaoAnimado, 110)

let n2 = 0


cxCoracao.addEventListener('click', (e)=>{
   
    let cxOver = document.getElementById('cx-over')

    if(e.target.className === 'coracao'){
        e.target.src="imagens/caveira.png"
        e.target.classList.remove('coracao')
        n2+=1
    }
    
    if(n2===3){ 
        cxOver.style.display="block"
        n6+=1
        n2=0
    }
})