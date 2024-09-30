// Espera que o DOM seja totalmente carregado antes de executar os scripts
document.addEventListener('DOMContentLoaded', function () {

    // Função para pré-visualizar o post da discussão
    function previewPost() {
        const titulo = document.getElementById('titulo').value.trim();
        const categoria = document.getElementById('categoria').options[document.getElementById('categoria').selectedIndex].text;
        const conteudo = document.getElementById('conteudo').value.trim();

        if (titulo === '' || conteudo === '') {
            alert('Por favor, preencha o título e o conteúdo antes de pré-visualizar.');
            return;
        }

        const previewSection = document.getElementById('preview-section');
        const previewContent = document.getElementById('preview-content');

        previewContent.innerHTML = `
            <h3>${titulo}</h3>
            <p><strong>Categoria:</strong> ${categoria}</p>
            <p>${conteudo}</p>
        `;

        previewSection.style.display = 'block';
        window.scrollTo({
            top: previewSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Função para editar o post
    function editPost() {
        const previewSection = document.getElementById('preview-section');
        previewSection.style.display = 'none';
        window.scrollTo({
            top: document.querySelector('.contribuir-section').offsetTop - 50,
            behavior: 'smooth'
        });
    }

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

    // Associar a função de pré-visualização ao botão
    const previewButton = document.querySelector('.preview-button');
    if (previewButton) {
        previewButton.addEventListener('click', previewPost);
    }

    // Associar a função de editar ao botão de edição
    const editButton = document.querySelector('.edit-button');
    if (editButton) {
        editButton.addEventListener('click', editPost);
    }
});
