// Seleciona o botão "Fórum da Comunidade" usando a classe forum-btn
document.querySelector('.forum-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.location.href = 'forum.html'; // Redireciona para a página do fórum
});
