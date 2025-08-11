'use strict'

//array de objetos (JSON)
const imagens = [
    {
        //chave    //valor da chave  
        nome: "ASTRALIS",
        url: "./img/astralis.png"
    },
    {
        //chave    //valor da chave  
        nome: "FAZE",
        url: "./img/faze.png"
    },
  
    {
        //chave    //valor da chave  
        nome: "VIRTUS PRO",
        url: "./img/vp.png"
    },
  
    {
        //chave    //valor da chave  
        nome: "ENCE",
        url: "./img/ence.png"
    },
  
    {
        //chave    //valor da chave  
        nome: "NAVI",
        url: "./img/navi.png"
    },
  
    {
        //chave    //valor da chave  
        nome: "MIBR",
        url: "./img/mibr.png"
    },
  
    {
        //chave    //valor da chave  
        nome: "FURIA",
        url: "./img/furia.png"
    },
  
    {
        //chave    //valor da chave  
        nome: "IMPERIAL",
        url: "./img/imperial.png"
    },

    {
        //chave    //valor da chave  
        nome: "G2",
        url: "./img/g2.png"
    }
  
]

function criarLegenda (srcLegenda) {
    const galeria = document.getElementById('legenda')
    
    legenda.src = srcLegenda.nome
}

function carregarLegenda () {
    const galeria = document.getElementById('legenda')

    imagens.forEach (criarLegenda)
}

function criarImagens (srcImagem) {
    const galeria = document.getElementById('galeria')
        const imagem = document.createElement('img') 

        imagem.src = srcImagem.url
       
        galeria.appendChild(imagem)
}

function carregarImagens(){
    const galeria = document.getElementById('galeria')

    imagens.forEach (criarImagens)
    imagens.forEach (criarLegenda)
}

carregarImagens()
carregarLegenda()