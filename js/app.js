let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

/* Menu de navegacion */
btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        activador = false;
    } else {
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador = true;
    }

});

/* Intercalar clase active */

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {

    element.addEventListener('click', (event) => {

        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });

        event.target.classList.add('activo');
    });
});

/* Efectos Scroll */
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    /* Mostrar y Ocultar menu */
    if (prevScrollPos > currenScrollPos) {

        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    } else {

        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    /* Mostrar y ocultar scroll estilos */
    let arriba = window.pageYOffset;

    if (arriba <= 600) {

        containerMenu.style.borderBottom = "none";
        goTop.style.right = "-100%";

    } else {

        containerMenu.style.borderBottom = "3px solid #B5884F";

        goTop.style.right = "0";
        goTop.style.transition = "0.5s";

    }

}

goTop.addEventListener('click', () => {
    document.body.scrollTop = 0; /* para safari */
    document.documentElement.scrollTop = 0; /* para chrome */
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 1000; /* para safari */
    document.documentElement.scrollTop = 1000; /* para chrome */
});

/* darle mas efecto al menu */
/* const enlaces2 = document.querySelectorAll('ul li a');
const btnMenu2 = document.querySelector('.btn-menu');
const menu2 = document.querySelector('.list-container');
let on_off = true;

enlaces2.forEach((link2) => {
    var links = link2.innerText;
    link2.dataset.text = links;
}) */