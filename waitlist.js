// Waitlist form handler
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.querySelector('.waitlist-form');
    const emailInput = document.querySelector('.waitlist-email');
    const submitButton = document.querySelector('.waitlist-submit');
    
    if (waitlistForm) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            // Basic email validation
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            // For MVP, just show success message
            // In production, this would submit to your backend
            emailInput.value = '';
            submitButton.textContent = 'Welcome Aboard! 🎉';
            submitButton.style.background = '#28a745';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = 'Reserve My Spot';
                submitButton.style.background = '';
            }, 3000);
            
            // Track this in your analytics if you have it
            console.log('Waitlist signup:', email);
        });
        
        // Handle enter key
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitButton.click();
            }
        });
    }
});