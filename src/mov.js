// conecta o js a um elemento do html/ nesse caso substituí o parágrafo com a id texto e substituí pelo texto abaixo
const elemento = document.getElementById("texto");
//inicia o loop em 0 
  let i = 0;
  //pega o texto /texto.length = conta a quantidade de caracteres que tem na id="texto"(ex: casa = 4) 
  function escreverTexto(texto) {
    //determina os parâmetros do laço/ enquanto o texto for menor que a quantidade de caracteres ele vai continuar imprimindo na tela
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++; // finaliza o loop
      setTimeout(() => escreverTexto(texto), 50);// determina a velocidade de exibição do texto declarado na função escreverTexto.
    }
  }
  escreverTexto("Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus recusandae et maxime impedit rerum aspernatur explicabo cumque animi ducimus magnam delectus modi pariatur beatae dolores obcaecati, voluptatem fugit illo possimus!");