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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active'); // This will transform the hamburger to X
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});