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

// Countdown Timer Function
function updateCountdown() {
    const weddingDate = new Date("April 4, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;
    
    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    const countdownContainer = document.getElementById("countdown-container");
            
    // If the countdown is over
    if (timeLeft < 0) {
        countdownContainer.innerHTML = "<div class='countdown-number'>Dit is die groot dag!</div>";
        return;
    }
    
    // Set the content of the countdown with properly structured items
    countdownContainer.innerHTML = `
    <div class="countdown-item">
        <div class="countdown-number">${days}</div>
        <div class="countdown-label">Dae</div>
    </div>
    <div class="separator">:</div>
    <div class="countdown-item">
        <div class="countdown-number">${hours}</div>
        <div class="countdown-label">Ure</div>
    </div>
    <div class="separator">:</div>
    <div class="countdown-item">
        <div class="countdown-number">${minutes}</div>
        <div class="countdown-label">Minute</div>
    </div>
    <div class="separator">:</div>
    <div class="countdown-item">
        <div class="countdown-number">${seconds}</div>
        <div class="countdown-label">Sekondes</div>
    </div>
    `; 
}

// Update the countdown every second
updateCountdown(); // Run once immediately
const timerInterval = setInterval(updateCountdown, 1000);

// Scroll reveal function
document.addEventListener('DOMContentLoaded', function() {
    const storySection = document.querySelector('.story-section');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Function to handle scroll events
    function handleScroll() {
        if (isInViewport(storySection) && !storySection.classList.contains('visible')) {
            storySection.classList.add('visible');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial state (in case the section is already in view)
    handleScroll();
});