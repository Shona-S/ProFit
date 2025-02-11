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
if (ctaButton) {
    ctaButton.addEventListener('mouseover', () => {     
        ctaButton.style.transform = 'translateY(-3px)'; 
    });
    ctaButton.addEventListener('mouseout', () => {     
        ctaButton.style.transform = 'translateY(0)'; 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            this.classList.toggle('active'); // Toggle active class for hamburger icon
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
});
