// Testimonials Carousel
function initTestimonials() {
    AppConfig.onReady((config) => {
        renderTestimonials(config);
        setupTestimonialsCarousel();
    });
}

function renderTestimonials(config) {
    const slider = document.getElementById('testimonialsSlider');
    if (!slider) return;
    
    slider.innerHTML = config.testimonials.map((testimonial, index) => {
        const stars = '⭐'.repeat(testimonial.stars);
        
        return `
            <div class="testimonial-card ${index === 0 ? 'active' : ''}">
                <div class="stars">${stars}</div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${testimonial.avatar}</div>
                    <div class="author-info">
                        <strong>${testimonial.author}</strong>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function setupTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dotsContainer = document.getElementById('testimonialDots');
    let currentIndex = 0;
    
    if (!testimonials.length || !prevBtn || !nextBtn || !dotsContainer) return;
    
    // Crear dots
    dotsContainer.innerHTML = '';
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'testimonial-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.testimonial-dot');
    
    function goToTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextTestimonial() {
        const newIndex = (currentIndex + 1) % testimonials.length;
        goToTestimonial(newIndex);
    }
    
    function prevTestimonial() {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        goToTestimonial(newIndex);
    }
    
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
    
    // Auto-play
    setInterval(nextTestimonial, 5000);
}