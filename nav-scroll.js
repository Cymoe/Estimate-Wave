let lastScrollTop = 0;
const mainNav = document.querySelector('.main-nav');
const SCROLL_THRESHOLD = 50; // Amount of scroll before hiding nav

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
        // Scrolling down & past threshold - hide nav
        // On mobile, we need to move it further to account for fixed positioning
        if (window.innerWidth <= 768) {
            mainNav.style.transform = 'translateX(150%)'; // Move right off screen on mobile
        } else {
            mainNav.style.transform = 'translateY(-150%)';
        }
    } else {
        // Scrolling up or at top - show nav
        mainNav.style.transform = 'translateY(0) translateX(0)';
    }
    
    lastScrollTop = scrollTop;
});
