// Navigatie logica voor mobiel
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Verander het icoontje als het menu open is
            if(navLinks.classList.contains('active')) {
                hamburger.innerHTML = '✕';
            } else {
                hamburger.innerHTML = '☰';
            }
        });
    }
});
