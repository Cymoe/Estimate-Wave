let lastScrollTop = 0;
const header = document.querySelector('header');
const SCROLL_THRESHOLD = 50; // Amount of scroll before hiding nav

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
        // Scrolling down & past threshold - hide nav
        header.style.transform = 'translateY(-150%)';
    } else {
        // Scrolling up or at top - show nav
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});
