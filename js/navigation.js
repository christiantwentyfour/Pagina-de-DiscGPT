// ===================================
// NAVIGATION.JS - VERSIÓN AVANZADA
// ===================================

// Detectar scroll y cambiar apariencia del nav con efectos avanzados
function setupNavScrollEffect() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Agregar clase 'scrolled' después de 50px
        if (currentScrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Actualizar barra de progreso
        updateScrollProgress();

        lastScrollY = currentScrollY;
    }
}

// Barra de progreso en el nav
function updateScrollProgress() {
    const nav = document.querySelector('nav');
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (nav) {
        nav.style.setProperty('--scroll-progress', scrolled + '%');
    }
}

// Detectar sección activa y marcar link correspondiente
function setupActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scroll mejorado con easing
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar si es solo '#'
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Cerrar menú móvil si está abierto
                closeMobileMenu();
            }
        });
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    // Crear botón hamburguesa si no existe
    const nav = document.querySelector('nav');
    if (!nav) return;

    let menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!menuToggle) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.setAttribute('aria-label', 'Menú');
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Insertar antes del nav-cta
        const navCta = nav.querySelector('.nav-cta');
        if (navCta) {
            nav.insertBefore(menuToggle, navCta);
        } else {
            nav.appendChild(menuToggle);
        }
    }

    // Crear overlay si no existe
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    const navLinks = document.querySelector('.nav-links');

    // Toggle menú
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menuToggle.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar al hacer click en overlay
    overlay.addEventListener('click', closeMobileMenu);

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');

    if (menuToggle) menuToggle.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Efecto parallax sutil en el nav
function setupNavParallax() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        
        if (scrolled < 300) {
            nav.style.transform = `translateY(${scrolled * parallaxSpeed * 0.1}px)`;
        }
    });
}

// Efecto de onda en botones
function setupButtonRipple() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple-effect';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Inicializar todo
function initNavigation() {
    setupNavScrollEffect();
    setupActiveSection();
    setupSmoothScroll();
    setupMobileMenu();
    setupButtonRipple();
    
    console.log('✅ Navegación avanzada inicializada');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}