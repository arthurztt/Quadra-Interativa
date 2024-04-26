function abrirMenu(){
    let menuInicial = document.getElementById("menu-menor");
    let menuFinal  = document.getElementById("menu");
    //if para validação da função (Coloquei mais por medo de dar errado)
    if (menuFinal.classList.contains("menu-fechado")){
        menuFinal.classList.remove("menu-fechado");
        menuFinal.classList.add("menu");
        menuInicial.classList.add("menu-fechado");
    }
}
function fecharMenu(){
    let menuInicial = document.getElementById("menu-menor");
    let menuFinal  = document.getElementById("menu");
    //Mesmo caso do anterior, colocado para validação. Condicional simples.
    if (menuFinal.classList.contains("menu")){
        menuFinal.classList.remove("menu");
        menuFinal.classList.add("menu-fechado");
        menuInicial.classList.remove("menu-fechado");
    }
}