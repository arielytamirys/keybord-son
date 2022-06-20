function tocaSom (idElementoAudio) {
   const element  = document.querySelector(idElementoAudio);

  if( element != null && element.localName === 'audio'){
    element.play();
  }
  
  else{
  console.log('elemento não encontrado ou seletor invalido');
  }


} 
// lista teclas,querySelectorall chama esta lista
const listadeTeclas = document.querySelectorAll ('.tecla');



//while enquanto

//for - para                                            contador++ é o encremento
for (let contador = 0; contador < listadeTeclas.length; contador++)
{

const tecla = listadeTeclas[contador];
const instrumento = listadeTeclas[contador].classList[1];

const idAudio = `#som_${instrumento}`;

  tecla.onclick = function (){
    tocaSom(idAudio);
  }  
                             //evento
  tecla.onkeydown = function (event) {

    if (event.code ==='Space'  || event.code === 'Enter'){
    tecla.classList.add('ativa');
  }
  
  }

  tecla.onkeyup = function() {
    tecla.classList.remove('ativa');

  }

}
 