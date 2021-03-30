// header scrolled
let scrollPosition = window.scrollY;
const headerShell = document.getElementsByClassName('no-bg')[0];
const headerContent = document.getElementsByClassName('header-content__menu')[0];
const bodySHell = document.getElementsByTagName('body')[0];
const btnParentMenu = document.getElementsByClassName('parent-menu')[0];
const btnToggleMenu = document.getElementById('toggleMenu');

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
        headerShell.classList.add('header-shell--fixed');
    } else {
        headerShell.classList.remove('header-shell--fixed');
    }
});

btnToggleMenu.onclick = function(){
    headerContent.classList.toggle('is-show')
    bodySHell.classList.toggle('body-hidden')
}

btnParentMenu.onclick = function(){
    btnParentMenu.classList.toggle('is-show')
}