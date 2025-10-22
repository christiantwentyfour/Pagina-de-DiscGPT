// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los items
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Abrir el clickeado si no estaba activo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}