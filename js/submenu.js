const categoria = document.getElementById('submenu-masc');
const subMenu = document.getElementsByClassName('submenu');

// funções
function abrir () {
    subMenu.classList.add('active');
};
// function manterAberto (){
//     subMenu.classList.add('active');
// };

// function fechar (){
//     subMenu.classList.remove('active');
// };

categoria.addEventListener('click', abrir())

// categoria.addEventListener('mouseenter', function(){
//     subMenu.classList.add('active')
// })
// categoria.addEventListener('mouseleave', function(){
//     subMenu.classList.remove('active')
// })