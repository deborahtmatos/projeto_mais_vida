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

    // Evento de clique para o botão de "Começar Customização"
    document.querySelector('.btn-upload').addEventListener('click', function (event) {
        event.preventDefault();
        
        // Simula o processo de upload com um alert para o usuário
        alert('Vamos começar! Por favor, escolha um arquivo CSV para iniciar a customização do dashboard.');

        // Cria dinamicamente um campo de input para upload do arquivo CSV
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = '.csv';
        inputFile.style.display = 'none'; // Mantém o campo oculto
        document.body.appendChild(inputFile);

        // Dispara o clique do input para que o usuário possa selecionar o arquivo
        inputFile.click();

        // Adiciona um evento de mudança ao input para processar o upload
        inputFile.addEventListener('change', function () {
            if (inputFile.files.length > 0) {
                alert('Arquivo CSV "' + inputFile.files[0].name + '" carregado com sucesso! Agora você poderá configurar seus gráficos.');
                
                // Depois do upload, guia o usuário para a configuração dos gráficos
                // Aqui, poderia ser um redirecionamento ou a exibição de uma nova seção/modal para configuração dos gráficos
                // Exemplo: Mostrar a seção de configuração
                document.querySelector('.assistente-content').innerHTML += `
                    <div class="configuracao-container">
                        <h3>Configuração de Gráficos</h3>
                        <p>Agora, escolha os tipos de gráficos que você deseja visualizar para seus dados.</p>
                        <button class="btn-configurar">Configurar Gráficos</button>
                    </div>
                `;
                
                // Adiciona um evento de clique ao botão de configuração
                document.querySelector('.btn-configurar').addEventListener('click', function () {
                    alert('Opções de configuração de gráficos serão exibidas em breve.');
                    // Aqui você pode adicionar lógica para guiar o usuário para configuração interativa dos gráficos
                });
            } else {
                alert('Nenhum arquivo selecionado. Por favor, tente novamente.');
            }

            // Remove o campo de input do DOM depois que o processo é concluído
            document.body.removeChild(inputFile);
        });
    });
});
