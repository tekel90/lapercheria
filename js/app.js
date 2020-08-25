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
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador = true;
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
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
    document.body.scrollTop = 850; /* para safari */
    document.documentElement.scrollTop = 850; /* para chrome */
});

function openMap(evt, suc) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(suc).style.display = "block";
    evt.currentTarget.className += " active";
}

/* abrir un mapa automatico */
document.getElementById("defaultOpen").click();