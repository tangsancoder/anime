// Countdown Timer Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown date (7 hours, 13 minutes, 56 seconds from now)
    const now = new Date();
    const countdownDate = new Date(now.getTime() + (7*60*60*1000) + (13*60*1000) + (56*1000));
    
    // Update the countdown every second
    const timer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countdownDate - now;
        
        // Time calculations for hours, minutes and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);

    // Mobile menu toggle (if needed)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        const mainNav = document.querySelector('.main-nav');
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.nft-card, .artwork-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.replace('rotate', 'translateY(-10px) rotate');
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace('translateY(-10px) ', '');
            this.style.boxShadow = '';
        });
    });
});