// Pequena animação ao clicar nos projetos
const projetos = document.querySelectorAll('.project-card a');

projetos.forEach(link => {
    link.addEventListener('click', () => {
        alert("Você será redirecionado para o projeto!");
    });
});
