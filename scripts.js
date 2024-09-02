document.addEventListener('DOMContentLoaded', function() {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    // Open Modal
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('open');
        });
    });

    // Close Modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.remove('open');
        });
    });

    // Close Modal when clicking outside of the content
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('open');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
document.body.classList.toggle('dark-mode', currentTheme === 'dark');
}

themeToggleButton.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
const isDarkMode = document.body.classList.contains('dark-mode');
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
const header = document.querySelector('header');
if (window.scrollY > 50) {
    header.classList.add('scrolled');
} else {
    header.classList.remove('scrolled');
}
});

// Menu Toggle Functionality
const menuToggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggleButton.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Close Menu When Clicking Outside
document.addEventListener('click', (e) => {
if (!navLinks.contains(e.target) && !menuToggleButton.contains(e.target)) {
    navLinks.classList.remove('active');
}
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
e.preventDefault();

// Clear previous errors
document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

// Get form values
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

let valid = true;

// Validate name
if (name === '') {
    document.getElementById('name-error').style.display = 'block';
    valid = false;
}

// Validate email
if (!validateEmail(email)) {
    document.getElementById('email-error').style.display = 'block';
    valid = false;
}

// Validate message
if (message === '') {
    document.getElementById('message-error').style.display = 'block';
    valid = false;
}

if (valid) {
    // Simulate form submission
    alert('Form submitted successfully!');
    // Replace the alert with actual form submission code, e.g., using fetch or XMLHttpRequest
    contactForm.reset();
}
});

function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}

// Progress Bars for Skills
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
const progress = item.getAttribute('data-progress');
const color = item.getAttribute('data-color');

const circle = item.querySelector('.progress-bar');
if (circle) {
    const radius = circle.getAttribute('r');
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
    circle.style.stroke = color;
}
});
});