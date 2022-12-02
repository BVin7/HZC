//Menu hamburguer do header
const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral")

botaoMenu.addEventListener('click', evento => {
    const apareceLista = menu.classList;
    apareceLista.toggle('menu-lateral--ativo');
})
