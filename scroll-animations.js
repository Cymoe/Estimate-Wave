// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const animatedElements = [
        { selector: '.testimonial-card', class: 'fade-in-up', delay: 100 },
        { selector: '.pain-item', class: 'fade-in-up', delay: 100 },
        { selector: '.benefit-card', class: 'fade-in-up', delay: 100 },
        { selector: '.feature-card', class: 'fade-in-up', delay: 100 },
        { selector: '.comparison-grid', class: 'fade-in', delay: 0 },
        { selector: '.faq-item', class: 'fade-in-up', delay: 50 },
        { selector: '.stats .stat-item', class: 'fade-in-up', delay: 150 },
        { selector: '.trust-badge', class: 'fade-in', delay: 100 }
    ];

    // Add initial hidden state
    animatedElements.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.transitionDelay = `${index * config.delay}ms`;
        });
    });

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    animatedElements.forEach(config => {
        const elements = document.querySelectorAll(config.selector);
        elements.forEach(el => observer.observe(el));
    });
});