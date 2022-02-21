let passoRight = -100
let passoLeft = 2000
let n3 = 0
let n4 = 0
let n5 = 0
let personagem = document.getElementById('personagem')
personagem.classList.add('personagemRight')
let personagemVivo = 'vivo'


function personagemAndar(){

    if(personagemVivo != 'morto'){
        if(passoRight < 2000){
            if (n3 === 0){
                passoRight+=20
                personagem.src="imagens/personagemRight1.png"
                personagem.style.left=`${passoRight}px`
                n3+=1
            }else if(n3 === 1){
                passoRight+=20
                personagem.src="imagens/personagemRight2.png"
                personagem.style.left=`${passoRight}px`
                n3=0
            }
        }
    
        if(passoRight === 2000){
            passoLeft = 2000
            personagem.classList.remove('personagemRight')
            personagem.classList.add('personagemLeft')
            passoRight+=1
        }
    
        if(passoRight === 2001){
            if(n4 === 0){
                passoLeft+=-20
                personagem.src="imagens/personagemLeft1.png"
                personagem.style.left=`${passoLeft}px`
                n4+=1
            }else if(n4 === 1){
                passoLeft+=-20
                personagem.src="imagens/personagemLeft2.png"
                personagem.style.left=`${passoLeft}px`
                n4=0
            }
        }
    
        if(passoLeft === -2000){
            passoRight = -100
            personagem.classList.remove('personagemLeft')
            personagem.classList.add('personagemRight')
            passoLeft-=1
        }
    }

    if(personagemVivo === "morto"){
        let cxOver = document.getElementById('cx-over')
        if(n5 <= 10){
            let p = document.createElement('p')
            p.innerHTML= 'Você cometeu assassinato!!!'
            p.style.color="red"
            cxOver.appendChild(p)
            n5+=1
        }

        if(n5 === 1){
            cxOver.style.display="block"
        }
    }
}

personagem.addEventListener('click', (e)=>{
    if(e.target.className === 'personagemRight'){
        personagem.src="imagens/personagemMortoRight.png"
        personagemVivo = 'morto'
    }
    if(e.target.className === 'personagemLeft'){
        personagem.src="imagens/personagemMortoLeft.png"
        personagemVivo = 'morto'
    }
})

setInterval(personagemAndar, 100)
