function abrirMenu() {
  const menu = document.querySelector("aside.menu");
  const text = document.querySelectorAll(".text, .text-ok");
  const lateralButton = document.getElementById("lateralButton");
  const iconButton = document.querySelector(".button-img")
  //Tag main 
  const main = document.querySelector("main");
  //Fazendo a verificação e deixando a barra lateral maior
  if (menu.style.width == "132px") {
    //Alterações da barra lateral
    menu.style.transition = "all 0.4s ease"; 
    menu.style.width = "282px";
    //Botão para a direita
    iconButton.src =("Src/images/arrow-left-circle-fill.svg") 
    
    //Tamanho do main 
    main.style.transition = "all  0.5s ease ";
    main.style.width = "1070px";
    //Alteração da posição do botão 
    lateralButton.style.marginLeft = "150px";
    lateralButton.style.transition = "all 0.3s ease";
    //para cada classe text dentro da function text ela adiciona as classes
    text.forEach(function (text) {
      text.style.transition = "all 0.5s ease";
      text.classList.remove("text");
      text.classList.add("text-ok");
    });
  } else {
    //Alterações da barra lateral 
    menu.style.transition = "all 0.4s ease";
    menu.style.width = "132px";
    //Botão para a esquerda 
    iconButton.src =("Src/images/arrow-right-circle-fill.svg") 
    lateralButton.style.marginLeft ="0px"
    //Alterações mains
    main.style.width = "1220px";
    //para cada classe text dentro da function text ela remove as classes
    text.forEach(function (text) {
      text.style.transition = "all 0.5s ease";
      text.classList.add("text");
      text.classList.remove("text-ok");
    });
  }
}