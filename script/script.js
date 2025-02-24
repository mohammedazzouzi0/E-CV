// Retrieve the dynamic text element
const textElement = document.getElementById('dynamicText');
const toggleButton = document.createElement('button');
const sentences = [
    "We are software developers.",
    "We specialize in networking.",
    "We love computer science.",
    "We design amazing infographics."
];
let sentenceIndex = 0;
let charIndex = 0;
let erasing = false;







// Typewriter effect function
function typeEffect() {
    if (!textElement) return;

    const currentSentence = sentences[sentenceIndex];

    if (!erasing && charIndex < currentSentence.length) {
        textElement.textContent += currentSentence[charIndex];
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (erasing && charIndex > 0) {
        textElement.textContent = currentSentence.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        erasing = !erasing;
        if (!erasing) {
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

// Create the theme toggle button
toggleButton.id = 'theme-toggle';
toggleButton.innerHTML = '☀️'; 
document.body.appendChild(toggleButton);

// Load user's theme preference from localStorage
const userPreference = localStorage.getItem('theme');
if (userPreference) {
    document.body.classList.toggle('light-mode', userPreference === 'light');
    toggleButton.innerHTML = userPreference === 'light' ? '🌑' : '☀️';  
}
// Add event listener for theme toggle
toggleButton.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    toggleButton.innerHTML = isLightMode ? '🌑' : '☀️'; // Toggle icon
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

// Navbar scroll effect
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.reveal');

    function reveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check in case elements are already in view
});


document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll('.reveal-zoomout');

    function reveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check in case elements are already in view
});

function sendEmailtoassou() {
    window.location.href = "mailto:assou-ami@upf.ac.ma";
}
function sendEmailtohimmi() {
    window.location.href = "mailto:himmi-moh@upf.ac.ma";
}
function sendEmailtoazzouzi() {
    window.location.href = "mailto:azzouzi-moh@upf.ac.ma";
}


document.addEventListener('DOMContentLoaded', function() {
    const navs = ['nav1', 'nav2'];

    navs.forEach(navClass => {
        const buttons = document.querySelectorAll(`.input.${navClass} .value`);
        const sections = document.querySelectorAll(`.inside-nav.${navClass}`);

        // Make the first button and section active by default
        if (buttons.length > 0 && sections.length > 0) {
            buttons[0].classList.add('active');
            sections[0].classList.add('active');
        }

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = button.textContent.trim().toLowerCase().replace(/ /g, '-');
                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });

                // Remove active class from all buttons
                buttons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a');
        
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const currentDropdown = this.parentElement;
                
                // Close other dropdowns
                dropdowns.forEach(d => {
                    if (d !== currentDropdown) {
                        d.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                currentDropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});