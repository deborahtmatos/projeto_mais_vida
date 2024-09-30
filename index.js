document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });

        // Fechar o menu ao clicar fora dele (em dispositivos móveis)
        document.addEventListener('click', function (event) {
            if (navMenu.classList.contains('open') && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove('open');
            }
        });

        // Fechar o menu com a tecla Esc
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    }

    // Navegação suave para os links do menu
    const navLinks = document.querySelectorAll('nav a[href^="#"], .footer-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Verifique se o link é interno e o elemento alvo realmente existe
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });

                // Fechar menu ao clicar em um link no mobile
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                }
            }
        });
    });
});
