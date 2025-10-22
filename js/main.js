// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DiscGPT Landing Page Cargando...');
    
    // Esperar a que la configuración esté lista
    AppConfig.onReady((config) => {
        console.log('✅ Configuración lista, inicializando componentes...');
        
        // RENDERIZAR TODOS LOS COMPONENTES CON ICONOS
        
        
        // Inicializar componentes interactivos
        initializeComponents();
        
        console.log('✨ DiscGPT Landing Page Lista!');
    });
});

// Función principal de inicialización
function initializeComponents() {
    // Efectos visuales
    createStars();
    setupMouseGradient();
    setupMouseParticles();
    setupClickRipple();
    
    // Navegación y scroll
    setupSmoothScroll();
    setupParallax();
    setupScrollAnimations();
    updateProgressBar();
    
    // Componentes interactivos
    initFAQ();
    initTestimonials();
    initStats();
    initDemo();
    setupNewsletter();
    
    // Efectos de hover
    setupButtonEffects();
    setupCardHoverEffects();
    
    // Event listeners
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Prevenir comportamiento por defecto en enlaces con # solamente
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
}

// Manejar animaciones al hacer scroll
function handleScrollAnimations() {
    const scrolled = window.pageYOffset;
    
    // Parallax en hero
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
}

// Smooth scroll para los enlaces de navegación
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Efecto parallax suave en el hero
function setupParallax() {
    // Ya implementado en handleScrollAnimations
}

// Animación de aparición de elementos al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const animateElements = document.querySelectorAll('.feature-card, .command-item, .pricing-card, .roadmap-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Newsletter Form
function setupNewsletter() {
    const form = document.getElementById('newsletterForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Aquí puedes agregar la lógica para enviar el email a tu backend
            showNotification(`¡Gracias por suscribirte! Te enviaremos novedades a ${email}`, 'success');
            form.reset();
        });
    }
}

// Efecto de brillo en los botones
function setupButtonEffects() {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Añadir animación CSS para el efecto ripple
    if (!document.getElementById('rippleStyle')) {
        const style = document.createElement('style');
        style.id = 'rippleStyle';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Efecto de hover en las cards
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Utilidad para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 20px 30px;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--primary)'};
        color: white;
        border-radius: var(--radius-md);
        z-index: var(--z-max);
        animation: slideInRight 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Añadir animación si no existe
    if (!document.getElementById('notificationStyle')) {
        const style = document.createElement('style');
        style.id = 'notificationStyle';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Hacer disponibles funciones globalmente si es necesario
window.showNotification = showNotification;