/**
 * Render Components - Renderiza todos los componentes con iconos SVG
 * Guarda como: js/render-components.js
 * 
 * IMPORTANTE: Carga este archivo DESPUÉS de icons.js y config-loader.js
 */

// Esperar a que la configuración esté lista
window.renderAllComponents = function(config) {
    renderNavigation(config);
    renderHero(config);
    renderFeatures(config);
    renderDemo(config);
    renderCommands(config);
    renderPricing(config);
    renderTestimonials(config);
    renderRoadmap(config);
    renderFAQ(config);
    renderStats(config);
    renderCTA(config);
    renderFooter(config);
};

// ============================================
// NAVIGATION
// ============================================
function renderNavigation(config) {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    
    nav.innerHTML = `
        <div class="nav-container">
            <div class="nav-logo">
                ${getIcon(config.icons.logo, 32)}
                <span>${config.site.name}</span>
            </div>
            <div class="nav-links">
                <a href="#features">Características</a>
                <a href="#commands">Comandos</a>
                <a href="#pricing">Precios</a>
                <a href="#faq">FAQ</a>
            </div>
            <div class="nav-actions">
                <a href="${config.links.support}" class="btn-secondary">
                    ${getIcon(config.icons.discordIcon, 18)}
                    <span>Soporte</span>
                </a>
                <a href="${config.links.botInvite}" class="btn-primary">
                    ${getIcon(config.icons.rocket, 18)}
                    <span>Añadir Bot</span>
                </a>
            </div>
        </div>
    `;
}

// ============================================
// HERO SECTION
// ============================================
function renderHero(config) {
    const hero = document.getElementById('heroSection');
    if (!hero) return;
    
    hero.innerHTML = `
        <div class="hero-content">
            <div class="hero-badge">
                ${getIcon(config.hero.badgeIcon || 'sparkles', 16)}
                <span>${config.hero.badge}</span>
            </div>
            
            <h1 class="hero-title">
                <span class="hero-icon">${getIcon(config.icons.logo, 64)}</span>
                ${config.hero.title}
            </h1>
            
            <p class="hero-subtitle">${config.hero.subtitle}</p>
            
            <div class="hero-buttons">
                <a href="${config.links.botInvite}" class="btn-primary btn-lg">
                    ${getIcon(config.icons.rocket, 20)}
                    <span>Añadir a Discord</span>
                </a>
                <a href="#demo" class="btn-secondary btn-lg">
                    ${getIcon('zap', 20)}
                    <span>Ver Demo</span>
                </a>
            </div>
            
            <div class="hero-stats">
                <div class="stat-item">
                    ${getIcon('users', 24)}
                    <div class="stat-content">
                        <div class="stat-value">${config.hero.stats.servers}</div>
                        <div class="stat-label">Servidores</div>
                    </div>
                </div>
                <div class="stat-item">
                    ${getIcon('user', 24)}
                    <div class="stat-content">
                        <div class="stat-value">${config.hero.stats.users}</div>
                        <div class="stat-label">Usuarios</div>
                    </div>
                </div>
                <div class="stat-item">
                    ${getIcon('zap', 24)}
                    <div class="stat-content">
                        <div class="stat-value">${config.hero.stats.uptime}</div>
                        <div class="stat-label">Uptime</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// FEATURES SECTION
// ============================================
function renderFeatures(config) {
    const grid = document.getElementById('featuresGrid');
    if (!grid) return;
    
    grid.innerHTML = config.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">
                ${getIcon(feature.icon, 40)}
            </div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        </div>
    `).join('');
}

// ============================================
// DEMO SECTION
// ============================================
function renderDemo(config) {
    const demoChat = document.getElementById('demoChat');
    const demoFeatures = document.getElementById('demoFeatures');
    const demoSettings = document.getElementById('demoSettingsIcon');
    
    if (demoSettings) {
        demoSettings.innerHTML = getIcon('settings', 18);
    }
    
    if (demoChat) {
        demoChat.innerHTML = `
            <div class="chat-message user-message">
                <div class="message-avatar">${getIcon('user', 24)}</div>
                <div class="message-content">
                    <div class="message-author">Usuario</div>
                    <div class="message-text">${config.demo.userMessage}</div>
                </div>
            </div>
            <div class="chat-message bot-message">
                <div class="message-avatar bot-avatar">${getIcon('bot', 24)}</div>
                <div class="message-content">
                    <div class="message-author">DiscGPT ${getIcon('check-circle', 16, 'verified')}</div>
                    <div class="message-text">${config.demo.botResponse}</div>
                </div>
            </div>
        `;
    }
    
    if (demoFeatures) {
        demoFeatures.innerHTML = `
            <h3>Por qué DiscGPT</h3>
            <ul class="demo-features-list">
                ${config.demo.features.map(feature => `
                    <li>
                        ${getIcon('check-circle', 20)}
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}

// ============================================
// COMMANDS SECTION
// ============================================
function renderCommands(config) {
    const container = document.getElementById('commandsContainer');
    if (!container) return;
    
    container.innerHTML = config.commands.map(cmd => `
        <div class="command-item">
            <div class="command-header">
                <code class="command-name">${cmd.name}</code>
                ${cmd.badge ? `<span class="command-badge">${cmd.badge}</span>` : ''}
            </div>
            <p class="command-description">${cmd.description}</p>
        </div>
    `).join('');
}

// ============================================
// PRICING SECTION
// ============================================
function renderPricing(config) {
    const grid = document.getElementById('pricingGrid');
    if (!grid) return;
    
    grid.innerHTML = config.pricing.map(plan => `
        <div class="pricing-card ${plan.popular ? 'popular' : ''}">
            ${plan.popular ? '<div class="popular-badge">Más Popular</div>' : ''}
            <div class="pricing-header">
                <h3 class="pricing-name">${plan.name}</h3>
                <div class="pricing-price">
                    <span class="currency">$</span>
                    <span class="amount">${plan.price}</span>
                    <span class="period">/mes</span>
                </div>
            </div>
            <ul class="pricing-features">
                ${plan.features.map(feature => `
                    <li class="${feature.included ? 'included' : 'excluded'}">
                        ${getIcon(feature.included ? 'check' : 'x', 18)}
                        <span>${feature.text}</span>
                    </li>
                `).join('')}
            </ul>
            <a href="${config.links[plan.buttonLink]}" class="btn-${plan.popular ? 'primary' : 'secondary'} btn-lg">
                ${plan.buttonText}
            </a>
        </div>
    `).join('');
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function renderTestimonials(config) {
    const slider = document.getElementById('testimonialsSlider');
    if (!slider) return;
    
    slider.innerHTML = config.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-stars">
                ${Array(testimonial.stars).fill(0).map(() => 
                    getIcon('star', 16, 'star-filled')
                ).join('')}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">
                    ${getIcon(testimonial.avatar, 40)}
                </div>
                <div class="author-info">
                    <div class="author-name">${testimonial.author}</div>
                    <div class="author-role">${testimonial.role}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// ROADMAP SECTION
// ============================================
function renderRoadmap(config) {
    const container = document.getElementById('roadmapContainer');
    if (!container) return;
    
    container.innerHTML = config.roadmap.map((item, index) => `
        <div class="roadmap-item ${item.status}">
            <div class="roadmap-icon">
                ${getIcon(item.icon, 32)}
            </div>
            <div class="roadmap-content">
                <div class="roadmap-quarter">${item.quarter}</div>
                <h3 class="roadmap-title">${item.title}</h3>
                <span class="roadmap-status status-${item.status}">
                    ${item.status === 'completed' ? 'Completado' : 
                      item.status === 'active' ? 'En Progreso' : 'Planeado'}
                </span>
            </div>
            ${index < config.roadmap.length - 1 ? '<div class="roadmap-line"></div>' : ''}
        </div>
    `).join('');
}

// ============================================
// FAQ SECTION
// ============================================
function renderFAQ(config) {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    
    container.innerHTML = config.faq.map((item, index) => `
        <div class="faq-item" data-faq="${index}">
            <div class="faq-question">
                <h3>${item.question}</h3>
                <span class="faq-icon">${getIcon('chevron-down', 24)}</span>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

// ============================================
// STATS SECTION
// ============================================
function renderStats(config) {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;
    
    grid.innerHTML = `
        <div class="stat-card">
            ${getIcon('users', 48)}
            <div class="stat-number" data-target="${config.stats.servers}">0</div>
            <div class="stat-label">Servidores Activos</div>
        </div>
        <div class="stat-card">
            ${getIcon('user', 48)}
            <div class="stat-number" data-target="${config.stats.users}">0</div>
            <div class="stat-label">Usuarios Totales</div>
        </div>
        <div class="stat-card">
            ${getIcon('zap', 48)}
            <div class="stat-number" data-target="${config.stats.commands}">0</div>
            <div class="stat-label">Comandos Ejecutados</div>
        </div>
        <div class="stat-card">
            ${getIcon('check-circle', 48)}
            <div class="stat-number">${config.stats.uptime}</div>
            <div class="stat-label">Uptime</div>
        </div>
    `;
}

// ============================================
// CTA SECTION
// ============================================
function renderCTA(config) {
    const section = document.getElementById('ctaSection');
    if (!section) return;
    
    const noteIcons = config.cta.noteIcons || ['check-circle', 'check-circle'];
    const noteParts = config.cta.note.split(' · ');
    
    section.innerHTML = `
        <div class="cta-content">
            <h2 class="cta-title">${config.cta.title}</h2>
            <p class="cta-subtitle">${config.cta.subtitle}</p>
            <a href="${config.links.botInvite}" class="btn-primary btn-xl">
                ${getIcon('rocket', 24)}
                <span>${config.cta.buttonText}</span>
            </a>
            <div class="cta-note">
                ${noteParts.map((part, i) => `
                    <span class="note-item">
                        ${getIcon(noteIcons[i], 16)}
                        <span>${part}</span>
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}

// ============================================
// FOOTER
// ============================================
function renderFooter(config) {
    const footer = document.getElementById('mainFooter');
    if (!footer) return;
    
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    ${getIcon(config.icons.logo, 32)}
                    <span>${config.site.name}</span>
                </div>
                <p>${config.footer.description}</p>
                <div class="footer-social">
                    <a href="${config.links.twitter}">${getIcon('twitter', 20)}</a>
                    <a href="${config.links.discord}">${getIcon('message-circle', 20)}</a>
                    <a href="${config.links.github}">${getIcon('github', 20)}</a>
                    <a href="${config.links.youtube}">${getIcon('youtube', 20)}</a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Producto</h4>
                <a href="${config.links.documentation}">Documentación</a>
                <a href="${config.links.api}">API</a>
                <a href="${config.links.changelog}">Changelog</a>
                <a href="${config.links.status}">Estado</a>
            </div>
            
            <div class="footer-section">
                <h4>Recursos</h4>
                <a href="${config.links.guides}">Guías</a>
                <a href="${config.links.tutorials}">Tutoriales</a>
                <a href="${config.links.blog}">Blog</a>
                <a href="${config.links.support}">Soporte</a>
            </div>
            
            <div class="footer-section">
                <h4>Legal</h4>
                <a href="${config.links.terms}">Términos</a>
                <a href="${config.links.privacy}">Privacidad</a>
                <a href="${config.links.cookies}">Cookies</a>
                <a href="${config.links.about}">Sobre Nosotros</a>
            </div>
            
            <div class="footer-section">
                <h4>${config.footer.newsletter.title}</h4>
                <p>${config.footer.newsletter.description}</p>
                <form id="newsletterForm" class="newsletter-form">
                    <input type="email" placeholder="${config.footer.newsletter.placeholder}" required>
                    <button type="submit" class="btn-primary">
                        ${config.footer.newsletter.buttonText}
                    </button>
                </form>
            </div>
        </div>
        
        <div class="footer-badges">
            ${config.footer.badges.map(badge => `
                <div class="footer-badge">
                    ${getIcon(badge.icon, 18)}
                    <span>${badge.text}</span>
                </div>
            `).join('')}
        </div>
        
        <div class="footer-bottom">
            <p>${config.footer.copyright}</p>
        </div>
    `;
}

// Agregar icono de chevron-down si no existe
if (typeof LUCIDE_ICONS !== 'undefined' && !LUCIDE_ICONS['chevron-down']) {
    LUCIDE_ICONS['chevron-down'] = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
}