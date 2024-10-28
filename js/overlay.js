const openModalButton = document.getElementById('openModalButton');
const overlay = document.getElementById('overlay');
const closeModalButton = document.getElementById('closeModalButton');

openModalButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});
