// header scrolled
var scrollPosition = window.scrollY;
var logoContainer = document.getElementsByClassName('header-shell')[0];

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
        logoContainer.classList.add('header-shell--scrolled');
    } else {
        logoContainer.classList.remove('header-shell--scrolled');
    }
});



// each section added effect while scroll
// var revealerpoint = 150;
// window.addEventListener('scroll', reveal);
// reveal();

// function reveal() {
//     console.log("scrolling");
//     var revealers = document.querySelectorAll('.section-page');
//     for (var i = 0; i < revealers.length; i++) {
//         var windowheight = window.innerHeight;
//         var revealertop = revealers[i].getBoundingClientRect().top;
//         var revealerbottom = revealers[i].getBoundingClientRect().bottom;
//         if (revealertop < windowheight - revealerpoint) {
//             revealers[i].classList.add('active')
//         } //else {
//         //     revealers[i].classList.remove('active');
//         // };
//         // if (revealerbottom < 0 + revealerpoint) {
//         //     revealers[i].classList.remove('active');
//         // }
//     } 
// };