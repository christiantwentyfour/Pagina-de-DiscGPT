// Demo Chat Animation
function initDemo() {
    setupDemoAnimation();
}

function setupDemoAnimation() {
    const demoChat = document.getElementById('demoChat');
    const demoSection = document.querySelector('.demo-section');
    
    if (!demoChat || !demoSection) return;
    
    let animationStarted = false;
    let animationInProgress = false;
    
    // Obtener texto de la configuración
    AppConfig.onReady((config) => {
        const botResponseText = config.demo.botResponse;
        const userMessage = config.demo.userMessage;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationStarted && !animationInProgress) {
                    animationStarted = true;
                    startDemoAnimation(userMessage, botResponseText);
                }
            });
        }, {
            threshold: 0.3
        });
        
        observer.observe(demoSection);
        
        function startDemoAnimation(userMsg, botMsg) {
            if (animationInProgress) return;
            animationInProgress = true;
            
            // Limpiar el chat
            demoChat.innerHTML = '';
            
            // Paso 1: Mostrar mensaje del usuario (después de 500ms)
            setTimeout(() => {
                if (!animationInProgress) return;
                const userMessage = createUserMessage(userMsg);
                demoChat.appendChild(userMessage);
            }, 500);
            
            // Paso 2: Mostrar indicador de "escribiendo..." (después de 1.5s)
            setTimeout(() => {
                if (!animationInProgress) return;
                const typingMessage = createTypingMessage();
                demoChat.appendChild(typingMessage);
            }, 1500);
            
            // Paso 3: Remover typing y mostrar respuesta con efecto de escritura (después de 3.5s)
            setTimeout(() => {
                if (!animationInProgress) return;
                const typingMessage = demoChat.querySelector('.chat-message.typing');
                if (typingMessage) {
                    typingMessage.style.animation = 'fadeOut 0.3s ease forwards';
                    setTimeout(() => {
                        if (typingMessage.parentNode) {
                            typingMessage.remove();
                        }
                    }, 300);
                }
                
                const botMessage = createBotMessage();
                demoChat.appendChild(botMessage);
                
                // Animar el texto escribiéndose
                setTimeout(() => {
                    if (animationInProgress) {
                        typeText(botMessage.querySelector('.message-text'), botMsg, 20);
                    }
                }, 100);
                
            }, 3500);
            
            // Reiniciar la animación cada 25 segundos
            setTimeout(() => {
                if (animationInProgress) {
                    animationInProgress = false;
                    animationStarted = false;
                    // Solo reiniciar si la sección aún está visible
                    const rect = demoSection.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    if (isVisible) {
                        setTimeout(() => startDemoAnimation(userMsg, botMsg), 1000);
                    }
                }
            }, 25000);
        }
        
        function createUserMessage(text) {
            const message = document.createElement('div');
            message.className = 'chat-message user';
            message.style.animationDelay = '0s';
            
            AppConfig.onReady((config) => {
                message.innerHTML = `
                    <div class="avatar">${config.icons.user}</div>
                    <div class="message-content">
                        <strong>Usuario</strong>
                        <p>${text}</p>
                    </div>
                `;
            });
            
            return message;
        }
        
        function createTypingMessage() {
            const message = document.createElement('div');
            message.className = 'chat-message bot typing';
            message.style.animationDelay = '0s';
            
            AppConfig.onReady((config) => {
                message.innerHTML = `
                    <div class="avatar bot-avatar">${config.icons.bot}</div>
                    <div class="message-content">
                        <strong>DiscGPT</strong>
                        <div class="typing-box">
                            <div class="typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            return message;
        }
        
        function createBotMessage() {
            const message = document.createElement('div');
            message.className = 'chat-message bot';
            message.style.animationDelay = '0s';
            
            AppConfig.onReady((config) => {
                message.innerHTML = `
                    <div class="avatar bot-avatar">${config.icons.bot}</div>
                    <div class="message-content">
                        <strong>DiscGPT</strong>
                        <p><span class="message-text"></span><span class="message-typing-text"></span></p>
                    </div>
                `;
            });
            
            return message;
        }
        
        function typeText(element, text, speed) {
            if (!element || !animationInProgress) return;
            
            let index = 0;
            const cursor = element.nextElementSibling;
            
            function type() {
                if (!animationInProgress || index >= text.length) {
                    // Remover cursor cuando termine
                    if (cursor && cursor.parentNode) {
                        cursor.style.animation = 'fadeOut 0.5s ease forwards';
                        setTimeout(() => {
                            if (cursor.parentNode) cursor.remove();
                        }, 500);
                    }
                    return;
                }
                
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }
        
        // Añadir animación fadeOut si no existe
        if (!document.getElementById('fadeOutStyle')) {
            const style = document.createElement('style');
            style.id = 'fadeOutStyle';
            style.textContent = `
                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    });
}