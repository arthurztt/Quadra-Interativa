function abrirMenu() {
  const menu = document.querySelector("aside.menu");
  const text = document.querySelectorAll(".text, .text-ok");
  const lateralButton = document.getElementById("lateralButton");
  const iconButton = document.querySelector(".button-img");
  //Fazendo a verificação e deixando a barra lateral maior
  if (menu.classList.contains("menu-close")) {
    //Alterações da barra lateral
    menu.classList.add("menu-open");
    menu.classList.remove("menu-close");
    //Botão para a direita
    iconButton.src = "Src/icons/arrow-left-circle-fill.svg";
    //Alteração da posição do botão
    lateralButton.classList.add("lateralButtonleft");
    lateralButton.classList.remove("lateButtonRight");
    //para cada classe text dentro da function text ela adiciona as classes
    text.forEach(function (text) {
      text.classList.remove("text");
      text.classList.add("text-ok");
    });
  } else {
    //Alterações da barra lateral
    menu.classList.remove("menu-open");
    menu.classList.add("menu-close");
    //Botão para a esquerda
    iconButton.src = "Src/icons/arrow-right-circle-fill.svg";
    //O botão de volta para o lugar de origem
    lateralButton.classList.add("lateralButtonRight");
    lateralButton.classList.remove("lateButtonLeft");
    //para cada classe text dentro da function text ela remove as classes
    text.forEach(function (text) {
      text.classList.add("text");
      text.classList.remove("text-ok");
    });
  }
}
//Função para a brir o menu lateral responsivo
function openHamb() {
  const menu = document.querySelector("nav");
  menu.classList.add("opened");
  menu.classList.remove("closed");
}
//Função para o X fechar a barra de eventos
function closeHamb() {
  const menu = document.querySelector("nav");
  menu.classList.remove("opened");
  menu.classList.add("closed");
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
  const drop = document.querySelector("div#drop1");
  const reserv = document.querySelector("div#reserv-manha");
  const arrow = document.querySelector("img#seta-manha");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transform = "rotate(0deg)";
    drop.classList.add("drop-border");
    drop.classList.remove("drop-off-border");
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    drop.classList.add("drop-off-border");
    drop.classList.remove("drop-border");
  }
}
function openHors2() {
  const drop = document.querySelector("div#drop2");
  const reserv = document.querySelector("div#reserv-tarde");
  const arrow = document.querySelector("img#seta-tarde");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transform = "rotate(0deg)";
    drop.classList.add("drop-border");
    drop.classList.remove("drop-off-border");
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    drop.classList.add("drop-off-border");
    drop.classList.remove("drop-border");
  }
}
function openHors3() {
  const drop = document.querySelector("div#drop3");
  const reserv = document.querySelector("div#reserv-almoco");
  const arrow = document.querySelector("img#seta-almoco");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transform = "rotate(0deg)";
    drop.classList.add("drop-border");
    drop.classList.remove("drop-off-border");
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    drop.classList.add("drop-off-border");
    drop.classList.remove("drop-border");
  }
}
function openHors4() {
  const drop = document.querySelector("div#drop4");
  const reserv = document.querySelector("div#reserv-dps-aula");
  const arrow = document.querySelector("img#seta-dps-aula");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transform = "rotate(0deg)";
    drop.classList.add("drop-border");
    drop.classList.remove("drop-off-border");
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    drop.classList.add("drop-off-border");
    drop.classList.remove("drop-border");
  }
}
function openHors5() {
  const drop = document.querySelector("div#drop5");
  const reserv = document.querySelector("div#reserv-livre");
  const arrow = document.querySelector("img#seta-livre");
  if (reserv.classList.contains("reserv-close")) {
    reserv.classList.remove("reserv-close");
    reserv.classList.add("reserv-open");
    arrow.style.transform = "rotate(0deg)";
    drop.classList.add("drop-border");
    drop.classList.remove("drop-off-border");
  } else {
    reserv.classList.add("reserv-close");
    reserv.classList.remove("reserv-open");
    arrow.style.transform = "rotate(180deg)";
    drop.classList.add("drop-off-border");
    drop.classList.remove("drop-border");
  }
}
