// Email form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    const formMessage = document.getElementById('formMessage');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        // Basic email validation
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Disable submit button during processing
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Joining...';

        try {
            // Store email in localStorage for demo purposes
            // In production, this would be an API call to your backend
            const waitlist = JSON.parse(localStorage.getItem('obfuscaite_waitlist') || '[]');

            if (waitlist.includes(email)) {
                showMessage('This email is already on the waitlist!', 'error');
            } else {
                waitlist.push(email);
                localStorage.setItem('obfuscaite_waitlist', JSON.stringify(waitlist));

                // Clear form
                emailInput.value = '';

                showMessage('Success! You\'ve been added to the waitlist. We\'ll be in touch soon.', 'success');

                // Optional: Send to analytics or tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'waitlist_signup', {
                        'event_category': 'engagement',
                        'event_label': 'email_capture'
                    });
                }
            }
        } catch (error) {
            showMessage('Something went wrong. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Simple animation on scroll (optional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.problem-solution, .how-it-works, .waitlist');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});