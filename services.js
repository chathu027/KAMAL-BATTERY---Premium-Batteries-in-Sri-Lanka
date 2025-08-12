document.addEventListener('DOMContentLoaded', function() {
    // Service Card Animation
    function animateServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Set initial state for animation
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    // Run animation on load
    animateServiceCards();

    // Warranty Section Animation
    function animateWarrantySection() {
        const warrantySection = document.querySelector('.warranty-content');
        
        warrantySection.style.opacity = '1';
        warrantySection.style.transform = 'translateY(0)';
    }

    // Set initial state for animation
    document.querySelector('.warranty-content').style.opacity = '0';
    document.querySelector('.warranty-content').style.transform = 'translateY(20px)';
    document.querySelector('.warranty-content').style.transition = 'all 0.5s ease';

    // Run animation on load
    animateWarrantySection();

    // Emergency CTA Button Effects
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'rotate(10deg) scale(1.1)';
            icon.style.backgroundColor = '#e67e22'; // Darker shade of primary color
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'rotate(0) scale(1)';
            icon.style.backgroundColor = 'var(--primary-color)';
        });
    });

    // Warranty Claim Button Click Event
    const warrantyBtn = document.querySelector('.warranty-text .btn');
    if (warrantyBtn) {
        warrantyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('You will be redirected to our warranty claim page. Please have your purchase details ready.');
            // In a real implementation, you would redirect to the warranty claim page
            // window.location.href = 'warranty-claim.html';
        });
    }
});







// Add this to services.js
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    const bookBtn = card.querySelector('.btn');
    if (bookBtn) {
        bookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = card.querySelector('h3').textContent;
            alert(`You've selected: ${serviceName}\nWe'll redirect you to our booking system.`);
            // window.location.href = `book-service.html?service=${encodeURIComponent(serviceName)}`;
        });
    }
});







// Add this to services.js
function updateEmergencyTimer() {
    const timerElement = document.createElement('div');
    timerElement.className = 'emergency-timer';
    timerElement.innerHTML = 'Estimated response time: <span id="responseTime">15-30</span> minutes';
    document.querySelector('.emergency-content').appendChild(timerElement);
    
    // Simulate changing response time
    setInterval(() => {
        const times = ['10-20', '15-30', '20-40', '5-15'];
        const randomTime = times[Math.floor(Math.random() * times.length)];
        document.getElementById('responseTime').textContent = randomTime;
    }, 10000);
}

// Call this function at the end of your DOMContentLoaded event
updateEmergencyTimer();






