let open_menu_button = document.querySelector("img#lateralButton");
let open_hamburger_button = document.querySelector("div.hamburger-button-open");
let close_hamburger_button = document.querySelector("div#close-button");
let open_eve_button = document.querySelector("img#arrow-eve");
let open_esp_button = document.querySelector("img#arrow-esp");
let open_res_button = document.querySelector("img#arrow-res");
let open_horario_button_one = document.querySelector("div#drop-horario-1");
let open_horario_button_two = document.querySelector("div#drop-horario-2");
let open_horario_button_three = document.querySelector("div#drop-horario-3");
let open_horario_button_four = document.querySelector("div#drop-horario-4");
let open_horario_button_five = document.querySelector("div#drop-horario-5");
// --------------------------------------------- TESTE DE DATAS DO CALENDARIO DOS ESPORTES -------------------------------- //
const data = new Date().getDay();
const seg = document.querySelector("article.segunda");
const ter = document.querySelector("article.terca");
const qua = document.querySelector("article.quarta");
const qui = document.querySelector("article.quinta");
const sex = document.querySelector("article.sexta");
switch (data) {
  case 0:
    seg.style.display = "block";
    ter.style.display = "none";
    qua.style.display = "none";
    qui.style.display = "none";
    sex.style.display = "none";
    break;
  case 1:
    seg.style.display = "block";
    ter.style.display = "none";
    qua.style.display = "none";
    qui.style.display = "none";
    sex.style.display = "none";
    break;
  case 2:
    seg.style.display = "none";
    ter.style.display = "block";
    qua.style.display = "none";
    qui.style.display = "none";
    sex.style.display = "none";
    break;
  case 3:
    seg.style.display = "none";
    ter.style.display = "none";
    qua.style.display = "block";
    qui.style.display = "none";
    sex.style.display = "none";
    break;
  case 4:
    seg.style.display = "none";
    ter.style.display = "none";
    qua.style.display = "none";
    qui.style.display = "block";
    sex.style.display = "none";
    break;
  case 5:
    seg.style.display = "none";
    ter.style.display = "none";
    qua.style.display = "none";
    qui.style.display = "none";
    sex.style.display = "block";
    break;
  case 6:
    seg.style.display = "block";
    ter.style.display = "none";
    qua.style.display = "none";
    qui.style.display = "none";
    sex.style.display = "none";
    break;
  default:
    seg.style.display = "block";
    ter.style.display = "none";
    qua.style.display = "none";
    qui.style.display = "none";
    sex.style.display = "none";
    break;
}
// --------------------------------------------- FIM DO TESTE  -------------------------------- //
open_menu_button.addEventListener("click", function () {
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
    lateralButton.classList.remove("lateralButtonRight");
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
    lateralButton.classList.remove("lateralButtonLeft");
    //para cada classe text dentro da function text ela remove as classes
    text.forEach(function (text) {
      text.classList.add("text");
      text.classList.remove("text-ok");
    });
  }
});

//Função para a brir o menu lateral responsivo
open_hamburger_button.addEventListener("click", function () {
  const menu = document.querySelector("nav");
  menu.classList.add("opened");
  menu.classList.remove("closed");
});
//Função para o X fechar a barra de eventos
close_hamburger_button.addEventListener("click", function () {
  const menu = document.querySelector("nav");
  menu.classList.remove("opened");
  menu.classList.add("closed");
});
//Função dos eventos. Adiciona uma classe para a lista ser visível e ou não, com verificador.
open_eve_button.addEventListener("click", function () {
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
});
//Função dos esportes. Adiciona uma classe para a lista ser visível e ou não, com verificador.
open_esp_button.addEventListener("click", function () {
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
});
//Função do Reservar a quadra. Adiciona uma classe para a lista ser visível e ou não, com verificador.
open_res_button.addEventListener("click", function () {
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
});

open_horario_button_one.addEventListener("click", function () {
  const drop = document.querySelector("div#drop-horario-1");
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
});
open_horario_button_two.addEventListener("click", function () {
  const drop = document.querySelector("div#drop-horario-2");
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
});
open_horario_button_three.addEventListener("click", function () {
  const drop = document.querySelector("div#drop-horario-3");
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
});
open_horario_button_four.addEventListener("click", function () {
  const drop = document.querySelector("div#drop-horario-4");
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
});
open_horario_button_five.addEventListener("click", function () {
  const drop = document.querySelector("div#drop-horario-5");
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
});

// DARK MODE
document.addEventListener("DOMContentLoaded", () => {
  // seu código aqui

  const btnDarkModeToggle = document.getElementById("btn_tema");
  const themeSystem = localStorage.getItem("themeSystem") || "light";

  // Aplica o tema salvo ao carregar a página
  defineCurrentTheme(themeSystem);

  // Alterna o tema ao mudar o botão
  btnDarkModeToggle.addEventListener("change", () => {
    let currentTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("themeSystem", newTheme);
    defineCurrentTheme(newTheme);
  });

  // Função para definir o tema
  function defineCurrentTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    btnDarkModeToggle.checked = theme === "dark";
  }
});
