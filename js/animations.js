// Generar estrellas animadas
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Efecto de fondo dinámico que sigue el mouse
function setupMouseGradient() {
    const gradient1 = document.getElementById('mouseGradient1');
    const gradient2 = document.getElementById('mouseGradient2');
    const gradient3 = document.getElementById('mouseGradient3');
    
    if (!gradient1 || !gradient2 || !gradient3) return;
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let gradient1X = mouseX;
    let gradient1Y = mouseY;
    let gradient2X = mouseX;
    let gradient2Y = mouseY;
    let gradient3X = mouseX;
    let gradient3Y = mouseY;
    
    // Mostrar gradientes después de un momento
    setTimeout(() => {
        gradient1.style.opacity = '1';
        gradient2.style.opacity = '1';
        gradient3.style.opacity = '1';
    }, 500);
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animación suave de los gradientes
    function animateGradients() {
        // Gradient 1 - Sigue el mouse directamente pero más lento
        gradient1X += (mouseX - gradient1X) * 0.05;
        gradient1Y += (mouseY - gradient1Y) * 0.05;
        gradient1.style.left = (gradient1X - 300) + 'px';
        gradient1.style.top = (gradient1Y - 300) + 'px';
        
        // Gradient 2 - Sigue con más delay y movimiento opuesto
        gradient2X += (mouseX - gradient2X) * 0.03;
        gradient2Y += (mouseY - gradient2Y) * 0.03;
        gradient2.style.left = (window.innerWidth - gradient2X - 300) + 'px';
        gradient2.style.top = (gradient2Y - 300) + 'px';
        
        // Gradient 3 - Movimiento más independiente
        gradient3X += (mouseX - gradient3X) * 0.02;
        gradient3Y += (mouseY - gradient3Y) * 0.02;
        gradient3.style.left = (gradient3X - 300) + 'px';
        gradient3.style.top = (window.innerHeight - gradient3Y - 300) + 'px';
        
        requestAnimationFrame(animateGradients);
    }
    
    animateGradients();
}

// Partículas que siguen el cursor
function setupMouseParticles() {
    const particles = [];
    const maxParticles = 15;
    let lastParticleTime = 0;
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        // Crear partícula cada 100ms si el mouse se está moviendo
        if (now - lastParticleTime > 100 && Math.random() > 0.7) {
            createParticle(e.clientX, e.clientY);
            lastParticleTime = now;
        }
    });
    
    function createParticle(x, y) {
        if (particles.length >= maxParticles) {
            const oldParticle = particles.shift();
            if (oldParticle && oldParticle.element && oldParticle.element.parentNode) {
                oldParticle.element.remove();
            }
        }
        
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: rgba(88, 101, 242, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(particle);
        
        const life = 1000;
        const startTime = Date.now();
        
        const particleData = {
            element: particle,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1,
            startTime: startTime,
            life: life
        };
        
        particles.push(particleData);
        
        function animateParticle() {
            const elapsed = Date.now() - particleData.startTime;
            const progress = elapsed / particleData.life;
            
            if (progress >= 1 || !particleData.element.parentNode) {
                if (particleData.element.parentNode) {
                    particleData.element.remove();
                }
                const index = particles.indexOf(particleData);
                if (index > -1) particles.splice(index, 1);
                return;
            }
            
            particleData.x += particleData.vx;
            particleData.y += particleData.vy;
            particleData.vy += 0.1; // Gravedad
            
            particleData.element.style.left = particleData.x + 'px';
            particleData.element.style.top = particleData.y + 'px';
            particleData.element.style.opacity = 0.6 * (1 - progress);
            particleData.element.style.transform = `translate(-50%, -50%) scale(${1 - progress * 0.5})`;
            
            requestAnimationFrame(animateParticle);
        }
        
        animateParticle();
    }
}

// Efecto de ondas al hacer click
function setupClickRipple() {
    document.addEventListener('click', (e) => {
        // No crear ripple en elementos interactivos
        if (e.target.closest('a, button, input, textarea')) return;
        
        createRipple(e.clientX, e.clientY);
    });
    
    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            border: 2px solid rgba(88, 101, 242, 0.5);
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            animation: clickRipple 0.8s ease-out;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    }
    
    // Añadir animación CSS
    if (!document.getElementById('clickRippleStyle')) {
        const style = document.createElement('style');
        style.id = 'clickRippleStyle';
        style.textContent = `
            @keyframes clickRipple {
                to {
                    width: 80px;
                    height: 80px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Progress Bar de Scroll
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = progress + '%';
}