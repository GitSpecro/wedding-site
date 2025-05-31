// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.addEventListener("click", (e) => {
if (!navLinks.contains(e.target) && e.target !== menuToggle) {
    navLinks.classList.remove('active');
}
});

// Close menu when scrolling
window.addEventListener("scroll", () => {
    navLinks.classList.remove('active');
});