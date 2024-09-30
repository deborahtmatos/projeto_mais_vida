document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"], .footer-nav a[href^="#"]');

    // Navegação suave para os links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
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

            // Define comportamento para cada botão específico
            if (button.textContent.includes('Contribuir com uma Discussão')) {
                window.location.href = 'contribuir.html';
            } else if (button.textContent.includes('Compartilhar Boas Práticas')) {
                window.location.href = 'compartilhar_praticas.html';
            } else if (button.textContent.includes('Customizar Dashboard')) {
                window.location.href = 'customizacao_dashboard.html';
            }
        });
    });

    // Destacar link do menu ao rolar pela página
    window.addEventListener('scroll', () => {
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
