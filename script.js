document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Animaciones de Scroll ---
    const elementsToReveal = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToReveal.forEach(el => observer.observe(el));

    // --- 2. Menú Móvil ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // --- 3. Carrusel Hero ---
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

    // --- 4. Galería Lightbox (CORREGIDO) ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Seleccionamos las fotos de la Flota Y las de Otros Trabajos
    const allImages = document.querySelectorAll('.card-image img, .mini-img');

    allImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    // Cerrar lightbox al hacer clic afuera de la imagen
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
    }

    // Año Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});