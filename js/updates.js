// ============================================
// SISTEMA DE ACTUALIZACIONES - FASE 2B
// JSON Externo + Likes + Modal Detallado
// ============================================

// ============================================
// VARIABLES GLOBALES
// ============================================
let updatesData = [];
let currentFilter = 'all';
let searchTerm = '';
let filteredUpdates = [];
let userLikes = JSON.parse(localStorage.getItem('userLikes')) || {};
let currentModalIndex = -1;

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    await loadUpdatesFromJSON();
    setupEventListeners();
    setupModalListeners();
    createStars();
    checkHashNavigation();
});

// ============================================
// CARGAR DATA DESDE JSON
// ============================================
async function loadUpdatesFromJSON() {
    try {
        const response = await fetch('updates.json');
        if (!response.ok) {
            throw new Error('Error al cargar actualizaciones');
        }
        const data = await response.json();
        updatesData = data.updates;
        filteredUpdates = [...updatesData];
        
        initializeUpdates();
    } catch (error) {
        console.error('Error cargando updates:', error);
        showErrorState();
    }
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================
function initializeUpdates() {
    updateCounts();
    renderUpdates(updatesData);
}

function setupEventListeners() {
    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilters();
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            applyFilters();
        });
    }

    // Progress bar on scroll
    window.addEventListener('scroll', updateProgressBar);
}

function applyFilters() {
    filteredUpdates = updatesData.filter(update => {
        const matchesCategory = currentFilter === 'all' || update.category === currentFilter;
        const matchesSearch = searchTerm === '' || 
            update.title.toLowerCase().includes(searchTerm) ||
            update.content.toLowerCase().includes(searchTerm) ||
            update.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });

    renderUpdates(filteredUpdates);
}

function renderUpdates(updates) {
    const timeline = document.getElementById('updatesTimeline');
    const emptyState = document.getElementById('emptyState');

    if (!timeline || !emptyState) return;

    if (updates.length === 0) {
        timeline.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    timeline.style.display = 'flex';
    emptyState.style.display = 'none';

    timeline.innerHTML = updates.map(update => createUpdateCard(update)).join('');
    
    // Agregar event listeners a los botones de like
    attachLikeListeners();
    
    // Agregar event listeners para abrir modal
    attachCardClickListeners();
}

function createUpdateCard(update) {
    const categoryLabels = {
        feature: '✨ Nueva Característica',
        bugfix: '🐛 Bug Fix',
        improvement: '⚡ Mejora',
        announcement: '📢 Anuncio'
    };

    const formattedDate = formatDate(update.date);
    const versionBadge = update.version ? 
        `<span class="update-version">
            <span>📦</span>
            ${update.version}
        </span>` : '';

    const isLiked = userLikes[update.id] || false;
    const likeCount = update.likes + (isLiked ? 1 : 0);
    const likeClass = isLiked ? 'liked' : '';

    return `
        <article class="update-card" data-id="${update.id}">
            <div class="update-header">
                <div class="update-header-left">
                    <span class="update-category-badge ${update.category}">
                        ${categoryLabels[update.category]}
                    </span>
                    <div class="update-title-section">
                        <h3 class="update-title">${update.title}</h3>
                        <div class="update-meta">
                            <span class="update-date">
                                📅 ${formattedDate}
                            </span>
                            ${versionBadge}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="update-body">
                ${update.content}
            </div>
            
            <div class="update-footer">
                <div class="update-tags">
                    ${update.tags.map(tag => 
                        `<span class="update-tag">#${tag}</span>`
                    ).join('')}
                </div>
                
                <button class="like-btn ${likeClass}" data-update-id="${update.id}">
                    <span class="like-icon">${isLiked ? '❤️' : '🤍'}</span>
                    <span class="like-count">${likeCount}</span>
                </button>
            </div>
        </article>
    `;
}

// ============================================
// SISTEMA DE LIKES
// ============================================
function attachLikeListeners() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', handleLike);
    });
}

function handleLike(e) {
    e.stopPropagation();
    const button = e.currentTarget;
    const updateId = parseInt(button.dataset.updateId);
    
    // Toggle like
    if (userLikes[updateId]) {
        delete userLikes[updateId];
    } else {
        userLikes[updateId] = true;
    }
    
    // Guardar en localStorage
    localStorage.setItem('userLikes', JSON.stringify(userLikes));
    
    // Actualizar UI
    const isLiked = userLikes[updateId] || false;
    const update = updatesData.find(u => u.id === updateId);
    const newCount = update.likes + (isLiked ? 1 : 0);
    
    button.classList.toggle('liked', isLiked);
    button.querySelector('.like-icon').textContent = isLiked ? '❤️' : '🤍';
    button.querySelector('.like-count').textContent = newCount;
    
    // Animación
    button.style.transform = 'scale(1.2)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

function updateCounts() {
    const counts = {
        all: updatesData.length,
        feature: updatesData.filter(u => u.category === 'feature').length,
        bugfix: updatesData.filter(u => u.category === 'bugfix').length,
        improvement: updatesData.filter(u => u.category === 'improvement').length,
        announcement: updatesData.filter(u => u.category === 'announcement').length
    };

    const countElements = {
        all: document.getElementById('countAll'),
        feature: document.getElementById('countFeature'),
        bugfix: document.getElementById('countBugfix'),
        improvement: document.getElementById('countImprovement'),
        announcement: document.getElementById('countAnnouncement')
    };

    Object.keys(counts).forEach(key => {
        if (countElements[key]) {
            countElements[key].textContent = counts[key];
        }
    });
}

// ============================================
// UTILIDADES
// ============================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    progressBar.style.width = `${progress}%`;
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

function showErrorState() {
    const timeline = document.getElementById('updatesTimeline');
    const emptyState = document.getElementById('emptyState');
    
    if (!timeline || !emptyState) return;
    
    timeline.style.display = 'none';
    emptyState.style.display = 'block';
    emptyState.innerHTML = `
        <div class="empty-icon">⚠️</div>
        <h3>Error al cargar actualizaciones</h3>
        <p>No se pudieron cargar las actualizaciones. Intenta recargar la página.</p>
    `;
}

// ============================================
// MOUSE GRADIENTS (Efectos visuales)
// ============================================
let mouseX = 0;
let mouseY = 0;
let gradientX = 0;
let gradientY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGradients() {
    gradientX += (mouseX - gradientX) * 0.1;
    gradientY += (mouseY - gradientY) * 0.1;

    const gradient1 = document.getElementById('mouseGradient1');
    const gradient2 = document.getElementById('mouseGradient2');
    const gradient3 = document.getElementById('mouseGradient3');

    if (gradient1 && gradient2 && gradient3) {
        gradient1.style.left = `${gradientX - 300}px`;
        gradient1.style.top = `${gradientY - 300}px`;
        gradient1.style.opacity = '1';

        gradient2.style.left = `${gradientX - 250}px`;
        gradient2.style.top = `${gradientY - 250}px`;
        gradient2.style.opacity = '1';

        gradient3.style.left = `${gradientX - 200}px`;
        gradient3.style.top = `${gradientY - 200}px`;
        gradient3.style.opacity = '1';
    }

    requestAnimationFrame(animateGradients);
}

animateGradients();

// ============================================
// MODAL - VISTA DETALLADA
// ============================================
function setupModalListeners() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalShare = document.getElementById('modalShare');

    // Cerrar modal
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Navegación
    modalPrev?.addEventListener('click', () => navigateModal(-1));
    modalNext?.addEventListener('click', () => navigateModal(1));

    // Compartir
    modalShare?.addEventListener('click', shareUpdate);

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
            closeModal();
        }
        if (modalOverlay?.classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });
}

function attachCardClickListeners() {
    const cards = document.querySelectorAll('.update-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // No abrir modal si se hizo click en el botón de like
            if (e.target.closest('.like-btn')) return;
            
            const updateId = parseInt(card.dataset.id);
            openModal(updateId);
        });
    });
}

function openModal(updateId) {
    const update = updatesData.find(u => u.id === updateId);
    if (!update) return;

    currentModalIndex = filteredUpdates.findIndex(u => u.id === updateId);
    
    renderModalContent(update);
    
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Actualizar URL con hash
    window.location.hash = `update-${updateId}`;
    
    updateModalNavButtons();
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay?.classList.remove('active');
    document.body.style.overflow = '';
    
    // Limpiar hash
    history.pushState("", document.title, window.location.pathname + window.location.search);
    
    currentModalIndex = -1;
}

function renderModalContent(update) {
    const modalContent = document.getElementById('modalContent');
    if (!modalContent) return;

    const categoryLabels = {
        feature: '✨ Nueva Característica',
        bugfix: '🐛 Bug Fix',
        improvement: '⚡ Mejora',
        announcement: '📢 Anuncio'
    };

    const formattedDate = formatDate(update.date);
    const isLiked = userLikes[update.id] || false;
    const likeCount = update.likes + (isLiked ? 1 : 0);

    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="modal-category-badge ${update.category}">
                ${categoryLabels[update.category]}
            </span>
            <h2 class="modal-title">${update.title}</h2>
            <div class="modal-meta">
                <span class="modal-meta-item">
                    📅 ${formattedDate}
                </span>
                ${update.version ? `
                    <span class="modal-version">
                        📦 ${update.version}
                    </span>
                ` : ''}
                <span class="modal-meta-item">
                    ❤️ ${likeCount} likes
                </span>
            </div>
        </div>
        
        <div class="modal-body">
            ${update.content}
        </div>
        
        <div class="modal-tags-section">
            <h4>Etiquetas</h4>
            <div class="modal-tags">
                ${update.tags.map(tag => 
                    `<span class="modal-tag">#${tag}</span>`
                ).join('')}
            </div>
        </div>
    `;
}

function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    
    if (newIndex < 0 || newIndex >= filteredUpdates.length) return;
    
    const newUpdate = filteredUpdates[newIndex];
    currentModalIndex = newIndex;
    
    renderModalContent(newUpdate);
    updateModalNavButtons();
    
    // Actualizar hash
    window.location.hash = `update-${newUpdate.id}`;
}

function updateModalNavButtons() {
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    if (modalPrev) {
        modalPrev.disabled = currentModalIndex <= 0;
    }
    
    if (modalNext) {
        modalNext.disabled = currentModalIndex >= filteredUpdates.length - 1;
    }
}

async function shareUpdate() {
    const shareBtn = document.getElementById('modalShare');
    const currentUpdate = filteredUpdates[currentModalIndex];
    if (!currentUpdate || !shareBtn) return;

    const url = `${window.location.origin}${window.location.pathname}#update-${currentUpdate.id}`;
    
    try {
        await navigator.clipboard.writeText(url);
        
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = '✓ Copiado';
        shareBtn.classList.add('copied');
        
        setTimeout(() => {
            shareBtn.innerHTML = originalText;
            shareBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Error al copiar:', err);
        alert('Link: ' + url);
    }
}

function checkHashNavigation() {
    const hash = window.location.hash;
    if (hash.startsWith('#update-')) {
        const updateId = parseInt(hash.replace('#update-', ''));
        const update = updatesData.find(u => u.id === updateId);
        if (update) {
            setTimeout(() => openModal(updateId), 500);
        }
    }
}

// Escuchar cambios en el hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (!hash.startsWith('#update-')) {
        closeModal();
    }
});