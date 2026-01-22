const yearSpan = document.querySelector('#year');
const modifiedSpan = document.querySelector('#modified');

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const title = document.querySelector('#site-title');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    menuButton.textContent = isOpen ? '✖' : '☰';

    if (window.innerWidth < 768) {
        title.style.display = isOpen ? 'none' : 'block';
    }
});
