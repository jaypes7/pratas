// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Product image gallery
function initializeGallery() {
    const mainImage = document.querySelector('.main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage && thumbnails) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Store current main image
                const currentMainSrc = mainImage.src;
                
                // Smooth transition for image swap
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = thumb.src;
                    mainImage.style.opacity = '1';
                }, 300);
            });
        });
    }
}

// Mobile menu toggle
function initializeMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Add slide animation
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.animation = 'slideDown 0.3s ease-out forwards';
            }
        });
    }
}

// Loading animation
function handleLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading-shimmer');
            img.addEventListener('load', () => {
                img.classList.remove('loading-shimmer');
            });
        }
    });
}

// Smooth scroll for navigation links
function initializeSmoothScroll() {
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
}

// Product zoom effect
function initializeZoom() {
    const zoomContainers = document.querySelectorAll('.zoom-container');
    
    zoomContainers.forEach(container => {
        const image = container.querySelector('.zoom-image');
        
        container.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        });
    });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeZoom();
    handleLoading();
    
    // Add scroll event listener for reveal animations
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check for elements in view
});

// Add smooth page transitions
window.addEventListener('beforeunload', () => {
    document.body.classList.add('page-transition');
});
