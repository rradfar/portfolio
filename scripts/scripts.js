const navToggleBtn = document.getElementById('nav-toggle-btn');
const navMenu = document.getElementById('nav-menu');

const toggleMenu = () => {
  navToggleBtn.classList.toggle('open');
  navMenu.classList.toggle('open');
}
