document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const phone = form.querySelector('#phone');
            const company = form.querySelector('#company');
            const service = form.querySelector('#service');
            const projectValue = form.querySelector('#project-value');
            const timeline = form.querySelector('#timeline');
            const message = form.querySelector('#message');
            
            // Clear previous errors
            clearErrors();
            
            let isValid = true;
            
            // Validate name
            if (!name.value.trim()) {
                showError(name, 'Name is required');
                isValid = false;
            }
            
            // Validate email
            if (!email.value.trim()) {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            }
            
            // Validate phone
            if (!phone.value.trim()) {
                showError(phone, 'Phone number is required');
                isValid = false;
            } else if (!isValidPhone(phone.value)) {
                showError(phone, 'Please enter a valid phone number');
                isValid = false;
            }
            
            // Validate service
            if (!service.value) {
                showError(service, 'Please select a service type');
                isValid = false;
            }
            
            // Validate project value
            if (!projectValue.value) {
                showError(projectValue, 'Please select a project value range');
                isValid = false;
            }
            
            // Validate timeline
            if (!timeline.value) {
                showError(timeline, 'Please select a timeline');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                showSuccessMessage();
                form.reset();
            }
        });
    }
    
    function showError(field, message) {
        const formGroup = field.closest('.form-group');
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        formGroup.appendChild(error);
        field.classList.add('error');
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
        
        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isValidPhone(phone) {
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }
    
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <h3>Thank You!</h3>
            <p>Your consultation request has been received. We'll contact you within 24 hours to schedule your call.</p>
        `;
        
        form.parentElement.insertBefore(successDiv, form);
        form.style.display = 'none';
        
        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});