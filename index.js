// Espera que o DOM seja totalmente carregado antes de executar os scripts
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleciona o botão "Fórum da Comunidade" e adiciona o evento de clique
    document.querySelector('.forum-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        window.location.href = 'forum.html'; // Redireciona para a página do fórum
    });

    // Navegação suave para os links do menu
    const navLinks = document.querySelectorAll('nav a[href^="#"], .footer-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Compensa o tamanho do header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle menu em dispositivos móveis (se você incluir um botão de menu no futuro)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            const nav = document.querySelector('nav');
            nav.classList.toggle('open');
        });
    }

    // Destacar link do menu ao rolar pela página
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
