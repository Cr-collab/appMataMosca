var altura = null
var largura = null
var vida = 1
var tempo = 50


function ajustaTamanhoPalcoDeJogo() 
{

     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura,altura)
    
}

ajustaTamanhoPalcoDeJogo()

var cronometro = setInterval( function(){

    if( tempo <= 0)
    {
       clearInterval(cronometro)
       clearInterval(mosquito)
       window.location.href = "vitoria.html"
    }else{
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
    }

}  , 1000)

function posicionamentoRandomico() 
{ 
    if(document.getElementById('mosca'))
    {
        document.getElementById('mosca').remove()

         if(vida <= 3 ){
             document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"
             vida++
         }else{
            window.location.href = "fim_de_jogo.html"
         }

    }

posicaoX = Math.floor(Math.random()*largura) - 90
posicaoY = Math.floor(Math.random()*altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY



console.log(posicaoX,posicaoY)


var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = Classes() + " " + lado()
document.body.appendChild(mosca)
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
mosca.id = 'mosca'
mosca.onclick = function () {
    this.remove()
}



}


function Classes() 
{

    var random = Math.floor(Math.random() * 3)

    switch(random)
    {

        case 0:
              return 'mosca1'
        case 1:
            return'mosca2'
        case 2:
           
            return'mosca3'
    }
}


function lado() 
{
    var ladoAleatorio = Math.floor(Math.random() * 2)

      switch (ladoAleatorio)
      {
          case 0 :
              return 'ladoA'
           case 1 :
               return 'ladoB'   
      }
}
