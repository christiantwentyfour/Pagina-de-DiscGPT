// ===================================
// THEME.JS - Sistema de temas mejorado
// ===================================

// Función para actualizar colores de SVG según el tema
function updateSVGColors(theme) {
    const primaryColor = theme === 'dark' ? '#5865f2' : '#3b82f6';
    const whiteColor = '#ffffff';
    
    // Actualizar todos los SVG en la página
    document.querySelectorAll('svg').forEach(svg => {
        // SVG que deben ser blancos (logo, bot, user, sun, moon)
        const whiteIcons = ['bot', 'user', 'sun', 'moon'];
        const svgHTML = svg.outerHTML;
        
        let shouldBeWhite = false;
        
        // Verificar si está en el logo o en el botón de tema
        if (svg.closest('.logo') || svg.closest('.theme-toggle')) {
            shouldBeWhite = true;
        }
        
        // Actualizar atributos stroke
        const paths = svg.querySelectorAll('path, circle, rect, line, polyline, polygon');
        paths.forEach(el => {
            const currentStroke = el.getAttribute('stroke');
            if (currentStroke && (currentStroke.includes('#fff') || currentStroke.includes('white'))) {
                el.setAttribute('stroke', whiteColor);
            } else if (currentStroke) {
                el.setAttribute('stroke', shouldBeWhite ? whiteColor : primaryColor);
            }
        });
    });
}

// Inicializar tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateSVGColors(savedTheme);
    updateThemeIcons();
    
    console.log('✅ Tema inicializado:', savedTheme);
}

// Actualizar iconos del botón de tema
function updateThemeIcons() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    
    if (sunIcon && typeof sunIcon.innerHTML === 'string' && sunIcon.innerHTML.includes('<svg')) {
        // Ya tiene el SVG correcto
        return;
    }
    
    // Iconos SVG para el botón de tema
    const sunSVG = '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>';
    
    const moonSVG = '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    
    if (sunIcon) sunIcon.innerHTML = sunSVG;
    if (moonIcon) moonIcon.innerHTML = moonSVG;
}

// Toggle de tema
function setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateSVGColors(newTheme);
        
        console.log('🎨 Tema cambiado a:', newTheme);
    });

    // Prevenir activación por hover
    toggle.addEventListener('mouseenter', (e) => e.stopPropagation());
    toggle.addEventListener('mouseleave', (e) => e.stopPropagation());
}

// Observador para actualizar SVG dinámicos
function setupSVGObserver() {
    const observer = new MutationObserver((mutations) => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        updateSVGColors(currentTheme);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupThemeToggle();
    setupSVGObserver();
});

// También ejecutar inmediatamente si el DOM ya está listo
if (document.readyState !== 'loading') {
    initTheme();
    setupThemeToggle();
    setupSVGObserver();
}