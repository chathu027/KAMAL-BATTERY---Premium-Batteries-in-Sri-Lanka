// Contact Form Submission with AJAX
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create form data object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('subject', subject);
    formData.append('message', message);
    
    // Submit the form using AJAX
    fetch('https://formspree.io/f/xeoznrdz', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success message with user's name
            alert(`Thank you ${name} for contact us we will replay soon`);
            // Reset the form
            document.getElementById('contactForm').reset();
        } else {
            // Show error message
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert('Error: ' + data.errors.map(error => error.message).join(', '));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            });
        }
    })
    .catch(error => {
        // Show error message
        alert('Oops! There was a problem submitting your form');
    });
});

// Form Validation
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
});

// Phone Number Formatting
document.getElementById('phone').addEventListener('input', function(e) {
    // Format phone number as user types
    let phoneNumber = this.value.replace(/\D/g, '');
    
    if (phoneNumber.length > 0) {
        phoneNumber = phoneNumber.match(/.{1,2}/g).join(' ');
    }
    
    this.value = phoneNumber;
});

// Emergency Section Animation
function animateEmergencySection() {
    const emergencySection = document.querySelector('.emergency-content');
    
    emergencySection.style.opacity = '1';
    emergencySection.style.transform = 'translateY(0)';
}

// Set initial state for animation
document.querySelector('.emergency-content').style.opacity = '0';
document.querySelector('.emergency-content').style.transform = 'translateY(20px)';
document.querySelector('.emergency-content').style.transition = 'all 0.5s ease';

// Run animation on load
window.addEventListener('load', animateEmergencySection);