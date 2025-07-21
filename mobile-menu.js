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
                    // Clear inline styles but ensure centering is maintained
                    navLinks.style.position = '';
                    navLinks.style.top = '';
                    navLinks.style.left = '';
                    navLinks.style.right = '';
                    navLinks.style.transform = '';
                    navLinks.style.width = '';
                    navLinks.style.margin = '';
                    // Ensure menu is within viewport bounds
                    const rect = navLinks.getBoundingClientRect();
                    if (rect.left < 0 || rect.right > window.innerWidth) {
                        navLinks.style.left = '0';
                        navLinks.style.right = '0';
                        navLinks.style.margin = '0 auto';
                    }
                    // Add the active class after a small delay to ensure proper positioning
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            navLinks.classList.add('active');
                        });
                    });
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

        // Handle window resize to ensure menu stays centered
        window.addEventListener('resize', function() {
            if (navLinks.classList.contains('active') && window.innerWidth <= 768) {
                // Ensure menu stays centered on resize
                navLinks.style.left = '';
                navLinks.style.right = '';
                navLinks.style.margin = '';
                // Check bounds after resize
                requestAnimationFrame(() => {
                    const rect = navLinks.getBoundingClientRect();
                    if (rect.left < 0 || rect.right > window.innerWidth) {
                        navLinks.style.left = '0';
                        navLinks.style.right = '0';
                        navLinks.style.margin = '0 auto';
                    }
                });
            }
        });
    }
});