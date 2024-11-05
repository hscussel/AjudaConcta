document.querySelectorAll('.estado').forEach(estado => {
    estado.addEventListener('click', function() {
        // Alterna a classe "selected" ao clicar em um estado
        estado.classList.toggle('selected');
        alert('Você clicou em ' + estado.getAttribute('title')); // Exibe o nome do estado
    });
});