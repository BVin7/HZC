//Menu hamburguer do header
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector(".menu-lateral")

botaoMenu.addEventListener('click', evento => {
    const apareceLista = menu.classList;
    apareceLista.toggle('menu-lateral--ativo');
})
