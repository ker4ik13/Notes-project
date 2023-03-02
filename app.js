let button = document.querySelector('.button'); 

button.addEventListener('click', () => {
    button.classList.toggle('dark-btn'),
    document.querySelector('.title').classList.toggle('dark-text'),
    document.body.classList.toggle('dark-mode');
});