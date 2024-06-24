// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate progress bars
window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (barTop < windowHeight) {
            bar.style.width = value;
        }
    });
});

// Project filter functionality
const filterButtons = document.querySelectorAll('.filter-controls button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Animate progress bars
window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (barTop < windowHeight) {
            bar.style.setProperty('--progress-value', value);
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.personal-story',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 2000,
        easing: 'easeInOutQuad'
    });

    // JavaScript for toggling modes
    const lightModeBtn = document.getElementById('light-mode');
    const darkModeBtn = document.getElementById('dark-mode');
    const customModeBtn = document.getElementById('custom-mode');
    const root = document.documentElement;

    lightModeBtn.addEventListener('click', () => {
        root.setAttribute('data-theme', 'light');
    });

    darkModeBtn.addEventListener('click', () => {
        root.setAttribute('data-theme', 'dark');
    });

    customModeBtn.addEventListener('click', () => {
        root.setAttribute('data-theme', 'custom');
    });
});

