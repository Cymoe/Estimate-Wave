let lastScrollTop = 0;
const mainNav = document.querySelector('.main-nav');
const SCROLL_THRESHOLD = 50; // Amount of scroll before hiding nav

// Function to handle scroll behavior
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth > 768) {
        // Desktop behavior - hide/show entire nav pill
        if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
            // Scrolling down & past threshold - hide nav
            mainNav.style.transform = 'translateY(-150%)';
        } else {
            // Scrolling up or at top - show nav
            mainNav.style.transform = 'translateY(0)';
        }
    } else {
        // Mobile behavior - hide/show hamburger menu
        if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
            // Scrolling down & past threshold - hide hamburger
            mainNav.style.transform = 'translateX(150%)';
        } else {
            // Scrolling up or at top - show hamburger
            mainNav.style.transform = 'translateX(0)';
        }
    }
    
    lastScrollTop = scrollTop;
}

// Handle scroll events
window.addEventListener('scroll', handleScroll);

// Handle resize events to reset transforms appropriately
window.addEventListener('resize', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= SCROLL_THRESHOLD) {
        mainNav.style.transform = '';
    }
});

// Initial check on load
document.addEventListener('DOMContentLoaded', () => {
    mainNav.style.transform = '';
});
