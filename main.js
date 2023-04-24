var button = document.getElementById('read-button');

button.addEventListener('click', function() {
    var card = document.querySelector('.card');
    card.classList.toggle('active'); // Verificar se está ativado, se não estiver, será ativado. Ou o contrario(para desativar)

    if (card.classList.contains('active')) {
        return button.textContent = 'Recolher';
    }
    button.textContent = 'Ler Mais' // Troca de texto do botão.
})

