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

// Image Slider
const slides = document.querySelector('#slides');
let index = 0;

function nextSlide() {
    index++;
    if (index >= slides.children.length) {
        index = 0; // Reset to first image
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 2000); // Change image every 2 seconds