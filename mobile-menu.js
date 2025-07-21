document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    let navLinksOriginalParent = navLinks.parentElement;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            this.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // On mobile, move nav-links to body when opening to avoid transform issues
            if (window.innerWidth <= 768) {
                if (!isExpanded) {
                    // Opening menu - move to body
                    body.appendChild(navLinks);
                    // Force reflow to ensure styles are applied
                    navLinks.offsetHeight;
                    // Add the active class after a small delay to ensure proper positioning
                    setTimeout(() => {
                        navLinks.classList.add('active');
                    }, 10);
                } else {
                    // Closing menu
                    navLinks.classList.remove('active');
                    // Move back after animation completes
                    setTimeout(() => {
                        navLinksOriginalParent.appendChild(navLinks);
                    }, 300);
                }
                return; // Exit early to prevent double toggling
            }
            
            // Desktop behavior remains the same
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Move back to original parent if on mobile
                if (window.innerWidth <= 768 && navLinks.parentElement === body) {
                    setTimeout(() => {
                        navLinksOriginalParent.appendChild(navLinks);
                    }, 300);
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav') && !event.target.closest('.nav-links') && navLinks.classList.contains('active')) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Move back to original parent if on mobile
                if (window.innerWidth <= 768 && navLinks.parentElement === body) {
                    setTimeout(() => {
                        navLinksOriginalParent.appendChild(navLinks);
                    }, 300);
                }
            }
        });
    }
});