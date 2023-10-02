document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.getElementById("openMenuBtn");
    const menu = document.getElementById("menu");
    const inicioSection = document.getElementById("Inicio");
    const formularios = document.querySelectorAll('.formulario');

    function mostrarFormulario(id) {
        if (id === 'Inicio') {
            inicioSection.style.display = 'block';
        } else {
            inicioSection.style.display = 'none';
        }

        formularios.forEach(formulario => {
            if (formulario.id === id) {
                formulario.style.display = 'block';
            } else {
                formulario.style.display = 'none';
            }
        });
    }

    const btnInicioNav = document.getElementById('btnInicioNav');
    const btnRoteirizacao = document.getElementById('btnRoteirizacao');
    const btnAgendaGestores = document.getElementById('btnAgendaGestores');
    const btnMapaClientes = document.getElementById('btnMapaClientes');
    const btnDivisao = document.getElementById('btndivisao'); // Novo botão "Divisão"

    // Adicione um novo evento para o botão "Divisão"
    btnDivisao.addEventListener('click', function () {
        mostrarFormulario('divisaoForm'); // Substitua 'divisaoForm' pelo ID correto da nova div
        menu.classList.remove("open");
    });

    btnInicioNav.addEventListener('click', function () {
        mostrarFormulario('Inicio');
        menu.classList.remove("open");
    });
    btnRoteirizacao.addEventListener('click', function () {
        mostrarFormulario('roteirizacaoForm');
        menu.classList.remove("open");
    });
    btnAgendaGestores.addEventListener('click', function () {
        mostrarFormulario('agendaGestoresForm');
        menu.classList.remove("open");
    });
    btnMapaClientes.addEventListener('click', function () {
        mostrarFormulario('mapaClientesForm');
        menu.classList.remove("open");
    });

    mostrarFormulario('Inicio');
});

document.addEventListener("DOMContentLoaded", function () {
    const btnGerentes = document.getElementById("btnGerentes");
    const btnSupervisores = document.getElementById("btnSupervisores");
    const btnVendedores = document.getElementById("btnVendedores");
    const btnRotas = document.getElementById("btnRotas");
    
    const conteudoGerentes = document.getElementById("conteudoGerentes");
    const conteudoSupervisores = document.getElementById("conteudoSupervisores");
    const conteudoVendedores = document.getElementById("conteudoVendedores");
    const conteudoRotas = document.getElementById("conteudoRotas");
    
    btnGerentes.addEventListener("click", function () {
        ocultarTodosConteudos();
        conteudoGerentes.style.display = "block";
    });
    
    btnSupervisores.addEventListener("click", function () {
        ocultarTodosConteudos();
        conteudoSupervisores.style.display = "block";
    });
    
    btnVendedores.addEventListener("click", function () {
        ocultarTodosConteudos();
        conteudoVendedores.style.display = "block";
    });
    
    btnRotas.addEventListener("click", function () {
        ocultarTodosConteudos();
        conteudoRotas.style.display = "block";
    });
    
    function ocultarTodosConteudos() {
        const conteudos = document.querySelectorAll(".conteudo");
        conteudos.forEach(function (conteudo) {
            conteudo.style.display = "none";
        });
    }
});