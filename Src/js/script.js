function abrirMenu() {
  const menu = document.querySelector("aside.menu");
  const text = document.querySelectorAll(".text, .text-ok");
  const lateralButton = document.getElementById("lateralButton");
  const iconButton = document.querySelector(".button-img");
  //Tag main
  const main = document.querySelector("main");
  //Fazendo a verificação e deixando a barra lateral maior
  if (menu.style.width == "132px") {
    //Alterações da barra lateral
    menu.style.transition = "all 0.4s ease";
    menu.style.width = "282px";
    //Botão para a direita
    iconButton.src = "Src/icons/arrow-left-circle-fill.svg";

    //Tamanho do main
    main.style.transition = "all  0.5s ease ";
    main.style.width = "100%";
    //Alteração da posição do botão
    lateralButton.style.left = "250px";
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
    iconButton.src = "Src/icons/arrow-right-circle-fill.svg";
    lateralButton.style.left = "0px";
    //Alterações mains
    main.style.width = "100%";
    //para cada classe text dentro da function text ela remove as classes
    text.forEach(function (text) {
      text.style.transition = "all 0.5s ease";
      text.classList.add("text");
      text.classList.remove("text-ok");
    });
  }
}
//Função dos eventos. Adiciona uma classe para a lista ser visível e ou não, com verificador.
function openEve() {
  const ddHeader = document.querySelector("div#dd-events");
  const select = document.querySelector("div#events");
  const arrow = document.querySelector("img#arrow-eve");
  if (select.classList.contains("list-close")) {
    select.classList.remove("list-close");
    select.classList.add("list-open");
    ddHeader.style.borderBottomLeftRadius = "0px";
    ddHeader.style.borderBottomRightRadius = "0px";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.1s";
  } else {
    select.classList.add("list-close");
    select.classList.remove("list-open");
    ddHeader.style.borderBottomLeftRadius = "15px";
    ddHeader.style.borderBottomRightRadius = "15px";
    arrow.style.transform = "rotate(0deg)";
    arrow.style.transition = "0.1s";
  }
}
//Função dos esportes. Adiciona uma classe para a lista ser visível e ou não, com verificador.
function openEsp() {
  const ddHeader = document.querySelector("div#dd-sport");
  const select = document.querySelector("div#esport");
  const arrow = document.querySelector("img#arrow-esp");
  if (select.classList.contains("list-close")) {
    select.classList.remove("list-close");
    select.classList.add("list-open");
    ddHeader.style.borderBottomLeftRadius = "0px";
    ddHeader.style.borderBottomRightRadius = "0px";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.1s";
  } else {
    select.classList.add("list-close");
    select.classList.remove("list-open");
    ddHeader.style.borderBottomLeftRadius = "15px";
    ddHeader.style.borderBottomRightRadius = "15px";
    arrow.style.transform = "rotate(0deg)";
    arrow.style.transition = "0.1s";
  }
}
//Função do Reservar a quadra. Adiciona uma classe para a lista ser visível e ou não, com verificador.
function openRes() {
  const ddHeader = document.querySelector("div#dd-reserve");
  const select = document.querySelector("div#reserv ");
  const arrow = document.querySelector("img#arrow-res");

  if (select.classList.contains("list-close")) {
    select.classList.remove("list-close");
    select.classList.add("list-open");
    ddHeader.style.borderBottomLeftRadius = "0px";
    ddHeader.style.borderBottomRightRadius = "0px";
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.1s";
  } else {
    select.classList.add("list-close");
    select.classList.remove("list-open");
    ddHeader.style.borderBottomLeftRadius = "20px";
    ddHeader.style.borderBottomRightRadius = "20px";
    arrow.style.transform = "rotate(0deg)";
    arrow.style.transition = "0.1s";
  }
}

function openHors1() {
  const reserv = document.querySelector("div#reserv-manha");
  const arrow = document.querySelector("img#seta-manha");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transition = "0.3s";
    arrow.style.transform = "rotate(0deg)";
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.3s";
  }
}
function openHors2() {
  const reserv = document.querySelector("div#reserv-tarde");
  const arrow = document.querySelector("img#seta-tarde");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transition = "0.3s";
    arrow.style.transform = "rotate(0deg)";
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.3s";
  }
}
function openHors3() {
  const reserv = document.querySelector("div#reserv-almoco");
  const arrow = document.querySelector("img#seta-almoco");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transition = "0.3s";
    arrow.style.transform = "rotate(0deg)";
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transition = "0.3s";
    arrow.style.transform = "rotate(180deg)";
  }
}
function openHors4() {
  const reserv = document.querySelector("div#reserv-dps-aula");
  const arrow = document.querySelector("img#seta-dps-aula");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transition = "0.3s";
    arrow.style.transform = "rotate(0deg)";
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.3s";
  }
}
function openHors5() {
  const reserv = document.querySelector("div#reserv-livre");
  const arrow = document.querySelector("img#seta-livre");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transition = "0.3s";
    arrow.style.transform = "rotate(0deg)";
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.3s";
  }
}