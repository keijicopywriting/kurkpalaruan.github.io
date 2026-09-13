let navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach((link) => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
        navbar.classList.remove('active');
    }
});