// Scroll animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        observer.observe(slide);
    });

    // Handle interactive examples
    const exampleToggles = document.querySelectorAll('.toggle-example');
    exampleToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const exampleBox = this.nextElementSibling;
            if (exampleBox.style.display === 'none' || !exampleBox.style.display) {
                exampleBox.style.display = 'block';
                this.textContent = 'Ukryj przykład';
                // Trigger reflow for animation
                exampleBox.offsetHeight; 
                exampleBox.style.opacity = '1';
                exampleBox.style.transform = 'translateY(0)';
            } else {
                exampleBox.style.opacity = '0';
                exampleBox.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    exampleBox.style.display = 'none';
                }, 300);
                this.textContent = 'Pokaż prosty przykład';
            }
        });
    });
});
