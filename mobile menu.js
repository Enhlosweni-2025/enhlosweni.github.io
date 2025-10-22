// mobile-menu.js - Updated for Enhlosweni website
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Only run if elements exist (for pages with the new navbar)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Toggle mobile menu
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const hamburger = this.querySelector('.hamburger');
            if (hamburger) {
                this.classList.toggle('active');
            }
        });

        // Close menu when clicking on navigation links (mobile only)
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside (mobile only)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                const isClickInsideNav = document.querySelector('.navbar').contains(event.target);
                const isMenuToggle = menuToggle.contains(event.target);
                
                if (!isClickInsideNav && !isMenuToggle && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
    
    // Portfolio filter functionality (for portfolio page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach((button) => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach((btn) => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                console.log('Filtering by: ' + this.textContent);
                // Add your actual filtering logic here
            });
        });
    }
    
    // FAQ functionality (for contact page)
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                faqItem.classList.toggle('active');
            });
        });
    }
    
    // Contact form handling (for contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Here you would typically send the form data to a server
                console.log('Form submitted:', { name, email, subject, message });
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});
