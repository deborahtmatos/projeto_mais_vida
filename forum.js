// Espera que o DOM seja totalmente carregado antes de executar os scripts
document.addEventListener('DOMContentLoaded', function () {

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

    // Evento de clique para o botão de "Acessar Fórum da Comunidade"
    document.querySelector('.forum-link').addEventListener('click', function (event) {
        event.preventDefault();
        alert('Você está prestes a acessar o fórum. Aguarde enquanto carregamos a página.');
        window.location.href = 'forum_discussao.html'; // Redireciona para a página específica do fórum
    });

    // Eventos de clique para as Chamadas para Ação (CTAs) da seção do fórum
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const buttonText = button.textContent;

            // Define o comportamento para cada botão específico
            if (buttonText.includes('Contribuir com uma Discussão')) {
                alert('Você será redirecionado para iniciar uma nova discussão.');
                window.location.href = 'nova_discussao.html';
            } else if (buttonText.includes('Compartilhar Boas Práticas')) {
                alert('Você será redirecionado para compartilhar suas boas práticas.');
                window.location.href = 'compartilhar_praticas.html';
            } else if (buttonText.includes('Customizar Dashboard')) {
                alert('Você será redirecionado para a página de customização do Dashboard.');
                window.location.href = 'customizacao_dashboard.html';
            }
        });
    });

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
