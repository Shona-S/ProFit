 // Navbar scroll effect
 window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// CTA button hover effect
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'translateY(-3px)';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'translateY(0)';
});

