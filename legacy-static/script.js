// ============================================
// MANOJ REDDY POREDDY - DEVOPS PORTFOLIO
// Interactive JavaScript Functionality
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initContactForm();
    initBackToTop();
    initSkillProgressBars();
    initLanguageProgressBars();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// TYPING ANIMATION
// ============================================

function initTypingAnimation() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const roles = [
        'Senior DevOps Developer',
        'Site Reliability Engineer',
        'Cloud Infrastructure Expert',
        'DevSecOps Specialist',
        'Kubernetes Architect',
        'CI/CD Pipeline Engineer'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(type, 1000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(`
        .section-header,
        .about-text,
        .code-window,
        .skill-card,
        .timeline-item,
        .cert-card,
        .education-card,
        .contact-card
    `);
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SKILL PROGRESS BARS
// ============================================

function initSkillProgressBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => observer.observe(card));
}

// ============================================
// LANGUAGE PROGRESS BARS
// ============================================

function initLanguageProgressBars() {
    const languageItems = document.querySelectorAll('.language-item');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.language-progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    languageItems.forEach(item => observer.observe(item));
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    const formSuccess = document.getElementById('formSuccess');
    
    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        const formGroup = nameInput.closest('.form-group');
        
        if (name.length < 2) {
            formGroup.classList.add('error');
            nameError.textContent = 'Name must be at least 2 characters';
            return false;
        } else {
            formGroup.classList.remove('error');
            nameError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const formGroup = emailInput.closest('.form-group');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            formGroup.classList.add('error');
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            formGroup.classList.remove('error');
            emailError.textContent = '';
            return true;
        }
    }
    
    function validateSubject() {
        const subject = subjectInput.value.trim();
        const formGroup = subjectInput.closest('.form-group');
        
        if (subject.length < 3) {
            formGroup.classList.add('error');
            subjectError.textContent = 'Subject must be at least 3 characters';
            return false;
        } else {
            formGroup.classList.remove('error');
            subjectError.textContent = '';
            return true;
        }
    }
    
    function validateMessage() {
        const message = messageInput.value.trim();
        const formGroup = messageInput.closest('.form-group');
        
        if (message.length < 10) {
            formGroup.classList.add('error');
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        } else {
            formGroup.classList.remove('error');
            messageError.textContent = '';
            return true;
        }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Simulate form submission
            const submitButton = form.querySelector('.btn-submit');
            const originalText = submitButton.querySelector('span').textContent;
            
            submitButton.disabled = true;
            submitButton.querySelector('span').textContent = 'Sending...';
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                formSuccess.classList.add('show');
                form.reset();
                
                submitButton.disabled = false;
                submitButton.querySelector('span').textContent = originalText;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
                
                // In production, you would send the form data to your backend:
                /*
                const formData = {
                    name: nameInput.value,
                    email: emailInput.value,
                    subject: subjectInput.value,
                    message: messageInput.value
                };
                
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    // Handle success
                })
                .catch(error => {
                    // Handle error
                });
                */
            }, 1500);
        }
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Optimize scroll events
const optimizedScroll = throttle(() => {
    // Any additional scroll-based functionality
}, 100);

window.addEventListener('scroll', optimizedScroll);

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c👋 Hey there, curious developer!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Thanks for checking out the code!', 'color: #a855f7; font-size: 16px;');
console.log('%c💼 Interested in DevOps, Cloud Infrastructure, or Site Reliability?', 'color: #00ff88; font-size: 14px;');
console.log('%c📧 Let\'s connect: manojreddy9186@gmail.com', 'color: #00d9ff; font-size: 14px;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/manojreddyporeddy', 'color: #00d9ff; font-size: 14px;');
