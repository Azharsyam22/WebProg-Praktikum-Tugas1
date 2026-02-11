document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    const badge = document.querySelector('.reveal-bottom');
    const title = document.querySelector('.reveal-left');
    const buttons = document.querySelector('.reveal-right');

    setTimeout(() => {
        navbar.style.opacity = "1";
        navbar.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        if (badge) badge.classList.add('reveal-active');
        if (title) title.classList.add('reveal-active');
        if (buttons) buttons.classList.add('reveal-active');
    }, 700);


    const heroText = "Web Developer & Multimedia Enthusiast. Menciptakan solusi digital yang estetis dan fungsional.";
    const heroEl = document.querySelector('.typing-hero');

    function typeWriter(element, text, i = 0) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1), 35);
        }
    }

    if (heroEl) setTimeout(() => typeWriter(heroEl, heroText), 2000);


    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Terima kasih! Pesan Anda telah terkirim.");
            contactForm.reset();
        });
    }
});