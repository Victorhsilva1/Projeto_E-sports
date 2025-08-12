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

function criarItemGaleria(imagem) {
    const galeria = document.getElementById('galeria');

    
    const itemGaleria = document.createElement('div');
    itemGaleria.classList.add('item-galeria');


    const novaImagem = document.createElement('img');
    novaImagem.src = imagem.url;
   

  
    const legenda = document.createElement('span');
    legenda.classList.add('legenda');
    legenda.textContent = imagem.nome;

    
    itemGaleria.appendChild(novaImagem);
    itemGaleria.appendChild(legenda);

   
    galeria.appendChild(itemGaleria);
}

function carregarGaleria() {
    imagens.forEach(criarItemGaleria);
}

carregarGaleria();

