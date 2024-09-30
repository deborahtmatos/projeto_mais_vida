document.addEventListener('DOMContentLoaded', () => {
    // Navegação suave para os links do menu
    const navLinks = document.querySelectorAll('nav a[href^="#"], .footer-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Evento de clique para o botão "Acessar Fórum da Comunidade"
    const forumLink = document.querySelector('.forum-link');
    if (forumLink) {
        forumLink.addEventListener('click', event => {
            event.preventDefault();
            alert('Você está prestes a acessar o fórum. Aguarde enquanto carregamos a página.');
            window.location.href = 'forum_discussao.html';
        });
    }

    // Eventos de clique para as Chamadas para Ação (CTAs)
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            button.classList.add('clicked'); // Adiciona um feedback visual
            setTimeout(() => button.classList.remove('clicked'), 300); // Remove após 300ms

            // Utiliza um switch para melhor legibilidade
            switch (button.id) {
                case 'discussao-button':
                    window.location.href = 'discussao.html';
                    break;
                case 'compartilhar-praticas-button':
                    window.location.href = 'compartilhar_praticas.html';
                    break;
                case 'customizar-dashboard-button':
                    window.location.href = 'customizacao_dashboard.html';
                    break;
            }
        });
    });

    // Destacar link do menu ao rolar pela página
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
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
