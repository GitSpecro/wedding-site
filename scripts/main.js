document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
            
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        const storySection = document.querySelector('.story-section');

        if (storySection === null) {
            return;
        }
        
        if (isInViewport(storySection) && !storySection.classList.contains('visible')) {
            storySection.classList.add('visible');
        }
    }

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
        handleScroll();
    });

    const bgMusic = document.getElementById('bgMusic');

    function playMusicOnce() {
        bgMusic.play();
        // Remove all event listeners after first interaction
        document.removeEventListener('click', playMusicOnce);
        document.removeEventListener('touchstart', playMusicOnce);
        document.removeEventListener('scroll', playMusicOnce);
    }

    document.addEventListener('click', playMusicOnce);
    document.addEventListener('touchstart', playMusicOnce);
    document.addEventListener('scroll', playMusicOnce);
});