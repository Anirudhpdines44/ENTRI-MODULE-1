document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const feedbackElement = document.getElementById('contact-feedback');

    // Handle Contact Form Submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        if (!contactForm.checkValidity()) {
            event.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }

        // Simulate form submission success
        
        // 1. Show success message (using a custom modal/alert replacement)
        feedbackElement.classList.remove('d-none', 'alert-danger');
        feedbackElement.classList.add('alert-success');
        feedbackElement.innerHTML = '<strong>Success!</strong> Your message has been sent. I will get back to you shortly.';
        
        // 2. Clear the form fields
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // 3. Hide the message after 5 seconds
        setTimeout(() => {
            feedbackElement.classList.add('d-none');
        }, 5000);
    });

    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('aria-valuenow') + '%';
                progressBar.style.width = width;
                observer.unobserve(progressBar); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    progressBars.forEach(bar => {
        // Ensure initial width is 0 for the animation to work correctly on load
        bar.style.width = '0%';
        observer.observe(bar);
    });
});