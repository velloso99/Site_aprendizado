// Ativando o menu mobile

function mostrarMenu() {
    $('nav#nav-esquerda ul.menu-principal')
        .css('display', 'flex')
        .addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'none');
    $('nav#nav-esquerda ul#icone-menu li#menux').css('display', 'flex');
}

function esconderMenu() {
    $('nav#nav-esquerda ul.menu-principal').css('display', 'none');

    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'flex');
    $('nav#nav-esquerda ul#icone-menu li#menux').css('display', 'none');
}

let controle = true;

$('nav#nav-esquerda ul#icone-menu li#menu').click(function () {
    if (controle === true) {
        mostrarMenu();
        controle = false;
    } else {
        esconderMenu();
        controle = true;
    }
});

$('nav#nav-esquerda ul#icone-menu li#menux').click(function () {
    esconderMenu();
    controle = true;
});










