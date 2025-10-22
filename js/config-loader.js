// Configuración incluida directamente (sin necesidad de fetch)
const CONFIG_DATA = {
  "site": {
    "name": "DiscGPT",
    "tagline": "El bot de Discord con inteligencia artificial más avanzado para tu servidor",
    "year": 2025
  },
  "links": {
    "botInvite": "https://discord.com/oauth2/authorize?client_id=1429186379476238376&permissions=8&integration_type=0&scope=bot",
    "payment": "#COLOCA_LINK_PAGO",
    "contact": "#COLOCA_LINK_CONTACTO",
    "support": "#COLOCA_TU_SERVIDOR_DE_SOPORTE",
    "documentation": "#COLOCA_LINK_DOCUMENTACION",
    "api": "#COLOCA_LINK_API",
    "changelog": "#COLOCA_LINK_CHANGELOG",
    "guides": "#COLOCA_LINK_GUIAS",
    "blog": "#COLOCA_LINK_BLOG",
    "tutorials": "#COLOCA_LINK_TUTORIALES",
    "status": "#COLOCA_LINK_STATUS",
    "about": "#COLOCA_LINK_SOBRE_NOSOTROS",
    "terms": "#COLOCA_LINK_TERMINOS",
    "privacy": "#COLOCA_LINK_PRIVACIDAD",
    "cookies": "#COLOCA_LINK_COOKIES",
    "twitter": "#TWITTER",
    "discord": "#DISCORD",
    "github": "#GITHUB",
    "youtube": "#YOUTUBE"
  },
  "icons": {
    // ICONOS CON COLORES DINÁMICOS (se adaptan al tema)
    "logo": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>',
    
    "rocket": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    
    "brain": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>',
    
    "lightning": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    
    "art": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    
    "tools": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    
    "globe": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    
    "chart": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    
    "user": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    
    "bot": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>',
    
    "check": '<svg style="display:inline-block;vertical-align:middle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    
    "cross": '<svg style="display:inline-block;vertical-align:middle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>',
    
    "star": '<svg style="display:inline-block;vertical-align:middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    
    "sun": '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>',
    
    "moon": '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    
    "twitter": '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    
    "discordIcon": '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>',
    
    "githubIcon": '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>',
    
    "youtubeIcon": '<svg style="display:inline-block;vertical-align:middle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    
    "lock": '<svg style="display:inline-block;vertical-align:middle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    
    "shield": '<svg style="display:inline-block;vertical-align:middle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    
    "manager1": '<svg style="display:inline-block;vertical-align:middle" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>',
    
    "manager2": '<svg style="display:inline-block;vertical-align:middle" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/></svg>',
    
    "manager3": '<svg style="display:inline-block;vertical-align:middle" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>',
    
    "checkCompleted": '<svg style="display:inline-block;vertical-align:middle" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    
    "rocketActive": '<svg style="display:inline-block;vertical-align:middle" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    
    "calendar": '<svg style="display:inline-block;vertical-align:middle" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>'
  },
  "hero": {
    "badge": "🚀 Nuevo: GPT-4 Integrado",
    "title": "DiscGPT",
    "subtitle": "El bot de Discord con inteligencia artificial más avanzado para tu servidor",
    "stats": {
      "servers": "50K+",
      "users": "1M+",
      "uptime": "99.9%"
    }
  },
  "features": [
    {
      "icon": '<svg style="display:inline-block;vertical-align:middle" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>',
      "title": "IA Avanzada",
      "description": "Conversaciones naturales potenciadas por GPT. Respuestas inteligentes y contextuales para cualquier pregunta."
    },
    {
      "icon": '<svg style="display:inline-block;vertical-align:middle" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      "title": "Respuestas Rápidas",
      "description": "Procesamiento ultrarrápido para que nunca tengas que esperar. Optimizado para la mejor experiencia."
    },
    {
      "icon": '<svg style="display:inline-block;vertical-align:middle" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
      "title": "Generación de Imágenes",
      "description": "Crea arte único con comandos de generación de imágenes basados en IA."
    },
    {
      "icon": '<svg style="display:inline-block;vertical-align:middle" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      "title": "Moderación Inteligente",
      "description": "Herramientas de moderación automática para mantener tu servidor seguro y ordenado."
    },
    {
      "icon": '<svg style="display:inline-block;vertical-align:middle" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      "title": "Multilenguaje",
      "description": "Soporta múltiples idiomas para una experiencia global sin barreras."
    },
    {
      "icon": '<svg style="display:inline-block;vertical-align:middle" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
      "title": "Análisis de Datos",
      "description": "Genera análisis y resúmenes inteligentes de tus conversaciones y datos."
    }
  ],
  "commands": [
    {
      "name": "/gpt pregunta",
      "badge": "Popular",
      "description": "Haz cualquier pregunta y obtén una respuesta inteligente de GPT"
    },
    {
      "name": "/chat conversar",
      "badge": "Nuevo",
      "description": "Inicia una conversación natural con el bot que recuerda el contexto"
    },
    {
      "name": "/imagen generar",
      "badge": "Popular",
      "description": "Genera imágenes únicas basadas en tu descripción"
    },
    {
      "name": "/resumir texto",
      "badge": null,
      "description": "Resume textos largos de forma inteligente y concisa"
    },
    {
      "name": "/traducir idioma",
      "badge": null,
      "description": "Traduce texto entre más de 50 idiomas con precisión"
    },
    {
      "name": "/codigo ayuda",
      "badge": null,
      "description": "Obtén ayuda con programación, debug y explicaciones de código"
    },
    {
      "name": "/escribir texto",
      "badge": null,
      "description": "Genera contenido creativo: historias, ensayos, artículos"
    },
    {
      "name": "/analizar datos",
      "badge": "Nuevo",
      "description": "Analiza información y genera insights valiosos"
    }
  ],
  "pricing": [
    {
      "name": "Gratis",
      "price": 0,
      "popular": false,
      "features": [
        { "text": "50 comandos/día", "included": true },
        { "text": "Respuestas básicas GPT", "included": true },
        { "text": "Soporte comunitario", "included": true },
        { "text": "Actualizaciones automáticas", "included": true },
        { "text": "Generación de imágenes", "included": false },
        { "text": "Soporte prioritario", "included": false }
      ],
      "buttonText": "Comenzar Gratis",
      "buttonLink": "botInvite"
    },
    {
      "name": "Pro",
      "price": 9.99,
      "popular": true,
      "features": [
        { "text": "Comandos ilimitados", "included": true },
        { "text": "GPT-4 completo", "included": true },
        { "text": "Generación de imágenes", "included": true },
        { "text": "Análisis avanzado", "included": true },
        { "text": "Soporte prioritario", "included": true },
        { "text": "Sin anuncios", "included": true }
      ],
      "buttonText": "Próximamente",
      "buttonLink": "payment"
    },
    {
      "name": "Enterprise",
      "price": 49,
      "popular": false,
      "features": [
        { "text": "Todo en Pro", "included": true },
        { "text": "API dedicada", "included": true },
        { "text": "Comandos personalizados", "included": true },
        { "text": "SLA 99.9%", "included": true },
        { "text": "Soporte 24/7", "included": true },
        { "text": "Integraciones custom", "included": true }
      ],
      "buttonText": "Próximamente",
      "buttonLink": "contact"
    }
  ],
  "testimonials": [
    {
      "text": "DiscGPT ha transformado completamente nuestro servidor. Las respuestas son increíblemente precisas y rápidas. ¡Imprescindible!",
      "author": "Carlos Méndez",
      "role": "Admin - TechCommunity",
      "avatar": "👨‍💼",
      "stars": 5
    },
    {
      "text": "La mejor inversión para mi servidor gaming. Los usuarios están encantados con las respuestas y la moderación automática.",
      "author": "María González",
      "role": "Owner - GamersParadise",
      "avatar": "👩‍💻",
      "stars": 5
    },
    {
      "text": "Increíble bot! La generación de imágenes es alucinante y el soporte es excelente. Totalmente recomendado.",
      "author": "Alex Rivera",
      "role": "Moderador - ArtHub",
      "avatar": "👨‍🎨",
      "stars": 5
    }
  ],
  "roadmap": [
    {
      "quarter": "Q1 2025",
      "title": "Integración GPT-4 Turbo",
      "status": "completed",
      "icon": "✅"
    },
    {
      "quarter": "Q2 2025",
      "title": "Generación de imágenes HD",
      "status": "completed",
      "icon": "✅"
    },
    {
      "quarter": "Q3 2025",
      "title": "Voice AI - Conversaciones de voz",
      "status": "active",
      "icon": "🚀"
    },
    {
      "quarter": "Q4 2025",
      "title": "Marketplace de plugins",
      "status": "planned",
      "icon": "📅"
    }
  ],
  "faq": [
    {
      "question": "¿Cómo añado DiscGPT a mi servidor?",
      "answer": "Es muy sencillo: haz clic en 'Añadir a Discord', selecciona tu servidor, autoriza los permisos necesarios y listo. El bot estará activo inmediatamente."
    },
    {
      "question": "¿Es realmente gratis?",
      "answer": "Sí, ofrecemos un plan completamente gratuito con 50 comandos diarios. Si necesitas más, puedes actualizar a Pro en cualquier momento."
    },
    {
      "question": "¿Qué datos recopila el bot?",
      "answer": "Solo recopilamos datos necesarios para el funcionamiento: comandos ejecutados, ID de servidor y usuario. Nunca vendemos datos a terceros. Lee nuestra política de privacidad para más detalles."
    },
    {
      "question": "¿Puedo personalizar los comandos?",
      "answer": "En el plan Enterprise sí. Puedes crear comandos personalizados y ajustar el comportamiento del bot según las necesidades de tu comunidad."
    },
    {
      "question": "¿Qué hago si el bot no responde?",
      "answer": "Primero verifica que el bot tenga los permisos correctos. Si el problema persiste, visita nuestro servidor de soporte donde nuestro equipo te ayudará en minutos."
    },
    {
      "question": "¿Ofrecen reembolsos?",
      "answer": "Sí, ofrecemos garantía de reembolso de 7 días sin preguntas. Si no estás satisfecho, te devolvemos tu dinero completo."
    }
  ],
  "stats": {
    "servers": 50000,
    "users": 1000000,
    "commands": 5000000,
    "uptime": "99.9%"
  },
  "footer": {
    "description": "El bot de Discord con IA más avanzado del mercado.",
    "newsletter": {
      "title": "Newsletter",
      "description": "Recibe las últimas actualizaciones y novedades.",
      "placeholder": "tu@email.com",
      "buttonText": "Suscribirse"
    },
    "badges": [
      { "icon": "🔒", "text": "SSL Seguro" },
      { "icon": "⚡", "text": "99.9% Uptime" },
      { "icon": "🛡️", "text": "GDPR Compliant" }
    ],
    "copyright": "© 2025 DiscGPT. Todos los derechos reservados."
  },
  "demo": {
    "userMessage": "/gpt ¿Cómo funciona la inteligencia artificial?",
    "botResponse": "¡Excelente pregunta! La inteligencia artificial funciona mediante algoritmos y modelos matemáticos que aprenden de grandes cantidades de datos. En esencia, un sistema de IA analiza patrones, hace predicciones y mejora con el tiempo. Por ejemplo, los modelos de lenguaje como yo procesan texto usando redes neuronales profundas que han sido entrenadas con billones de palabras. Esto nos permite entender contexto, generar respuestas coherentes y ayudarte con prácticamente cualquier pregunta. ¡Es fascinante cómo la tecnología ha avanzado!",
    "features": [
      "Respuestas instantáneas y precisas",
      "Contexto conversacional inteligente",
      "Formato Discord nativo",
      "Respuestas detalladas y educativas"
    ]
  },
  "cta": {
    "title": "¿Listo para revolucionar tu servidor?",
    "subtitle": "Únete a miles de comunidades que ya usan DiscGPT",
    "buttonText": "Añadir a Discord Ahora",
    "note": "✓ Sin tarjeta de crédito requerida · ✓ Configuración en 2 minutos"
  }
};

// Sistema de gestión de configuración (versión sin fetch)
const AppConfig = {
    data: CONFIG_DATA,
    loaded: true,
    callbacks: [],

    // Cargar configuración (ahora instantáneo)
    async load() {
        console.log('✅ Configuración cargada:', this.data);
        
        // Ejecutar todos los callbacks registrados
        this.callbacks.forEach(callback => callback(this.data));
        this.callbacks = [];
        
        return this.data;
    },

    // Obtener configuración
    async get() {
        return this.data;
    },

    // Registrar callback para cuando la config esté lista
    onReady(callback) {
        callback(this.data);
    },

    // Obtener un link específico
    getLink(key) {
        return this.data?.links?.[key] || '#';
    },

    // Obtener un icono específico
    getIcon(key) {
        return this.data?.icons?.[key] || '🤖';
    },

    // Reemplazar icono por imagen SVG o PNG si existe
    resolveIcon(key, iconData) {
        const icon = this.getIcon(key);
        
        // Si el icono es una URL (imagen), retornar img tag
        if (icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('./')) {
            return `<img src="${icon}" alt="${key}" class="icon-img">`;
        }
        
        // Si es emoji, retornar tal cual
        return icon;
    }
};

// Funciones auxiliares para renderizado
const RenderHelpers = {
    // Crear navegación
    renderNavigation(config) {
        const nav = document.getElementById('mainNav');
        if (!nav) return;

        nav.innerHTML = `
            <div class="logo">
                <img src="./logos/logo con texto.svg" alt="DiscGPT" class="navbar-logo">
            </div>
            <ul class="nav-links">
                <li><a href="#features">Características</a></li>
                <li><a href="#demo">Demo</a></li>
                <li><a href="#pricing">Precios</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="./status.html" target="_blank" rel="noopener noreferrer">Status</a></li>
            </ul>
            <div class="nav-cta">
                <a href="${config.links.botInvite}" class="btn btn-small btn-primary">Añadir Bot</a>
            </div>
        `;
    },

    // Crear hero section
    renderHero(config) {
        const hero = document.getElementById('heroSection');
        if (!hero) return;

        hero.innerHTML = `
            <div class="hero-content">
                <div class="badge">${config.hero.badge}</div>
                <h1>${config.hero.title}</h1>
                <p class="subtitle">${config.hero.subtitle}</p>
                <div class="cta-buttons">
                    <a href="${config.links.botInvite}" class="btn btn-primary">
                        <span>Añadir a Discord</span>
                        <span class="btn-icon">→</span>
                    </a>
                    <a href="#demo" class="btn btn-secondary">
                        <span>Ver Demo</span>
                        <span class="btn-icon">▶</span>
                    </a>
                </div>
                <div class="hero-stats">
                    <div class="stat-mini">
                        <strong>${config.hero.stats.servers}</strong>
                        <span>Servidores</span>
                    </div>
                    <div class="stat-mini">
                        <strong>${config.hero.stats.users}</strong>
                        <span>Usuarios</span>
                    </div>
                    <div class="stat-mini">
                        <strong>${config.hero.stats.uptime}</strong>
                        <span>Uptime</span>
                    </div>
                </div>
            </div>
        `;
    },

    // Crear features
    renderFeatures(config) {
        const grid = document.getElementById('featuresGrid');
        if (!grid) return;

        grid.innerHTML = config.features.map(feature => `
            <div class="feature-card">
                <div class="feature-icon">${feature.icon}</div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    },

    // Crear comandos
    renderCommands(config) {
        const container = document.getElementById('commandsContainer');
        if (!container) return;

        container.innerHTML = config.commands.map(cmd => `
            <div class="command-item">
                <div class="command-header">
                    <div class="command-name">${cmd.name}</div>
                    ${cmd.badge ? `<span class="command-badge ${cmd.badge.toLowerCase()}">${cmd.badge}</span>` : ''}
                </div>
                <div class="command-desc">${cmd.description}</div>
            </div>
        `).join('');
    },

    // Crear pricing
    renderPricing(config) {
        const grid = document.getElementById('pricingGrid');
        if (!grid) return;

        grid.innerHTML = config.pricing.map(plan => `
            <div class="pricing-card ${plan.popular ? 'featured' : ''}">
                ${plan.popular ? '<div class="popular-badge">Más Popular</div>' : ''}
                <h3>${plan.name}</h3>
                <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">${plan.price}</span>
                    <span class="period">/mes</span>
                </div>
                <ul class="features-list">
                    ${plan.features.map(f => `
                        <li ${!f.included ? 'class="disabled"' : ''}>
                            <span class="${f.included ? 'check' : 'cross'}">${f.included ? config.icons.check : config.icons.cross}</span>
                            ${f.text}
                        </li>
                    `).join('')}
                </ul>
                <a href="${config.links[plan.buttonLink]}" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}">
                    ${plan.buttonText}
                </a>
            </div>
        `).join('');
    },

    // Crear roadmap
    renderRoadmap(config) {
        const container = document.getElementById('roadmapContainer');
        if (!container) return;

        container.innerHTML = config.roadmap.map(item => `
            <div class="roadmap-item ${item.status}">
                <div class="roadmap-icon">${item.icon}</div>
                <div class="roadmap-content">
                    <h3>${item.quarter}</h3>
                    <p>${item.title}</p>
                </div>
            </div>
        `).join('');
    },

    // Crear FAQ
    renderFAQ(config) {
        const container = document.getElementById('faqContainer');
        if (!container) return;

        container.innerHTML = config.faq.map((item, index) => `
            <div class="faq-item" data-index="${index}">
                <button class="faq-question">
                    <span>${item.question}</span>
                    <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
    },

    // Crear stats
    renderStats(config) {
        const grid = document.getElementById('statsGrid');
        if (!grid) return;

        grid.innerHTML = `
            <div class="stat-box">
                <div class="stat-number" data-target="${config.stats.servers}">0</div>
                <div class="stat-label">Servidores Activos</div>
            </div>
            <div class="stat-box">
                <div class="stat-number" data-target="${config.stats.users}">0</div>
                <div class="stat-label">Usuarios Felices</div>
            </div>
            <div class="stat-box">
                <div class="stat-number" data-target="${config.stats.commands}">0</div>
                <div class="stat-label">Comandos Ejecutados</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">${config.stats.uptime}</div>
                <div class="stat-label">Uptime</div>
            </div>
        `;
    },

    // Crear CTA
    renderCTA(config) {
        const section = document.getElementById('ctaSection');
        if (!section) return;

        section.innerHTML = `
            <div class="cta-box">
                <h2>${config.cta.title}</h2>
                <p class="subtitle">${config.cta.subtitle}</p>
                <div class="cta-buttons">
                    <a href="${config.links.botInvite}" class="btn btn-primary btn-large">
                        <span>${config.cta.buttonText}</span>
                        <span class="btn-icon">→</span>
                    </a>
                </div>
                <p class="cta-note">${config.cta.note}</p>
            </div>
        `;
    },

    // Crear footer
    renderFooter(config) {
        const footer = document.getElementById('mainFooter');
        if (!footer) return;

        footer.innerHTML = `
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="logo">${config.icons.logo} ${config.site.name}</div>
                        <p>${config.footer.description}</p>
                        <div class="social-links">
                            <a href="${config.links.twitter}" aria-label="Twitter">${config.icons.twitter}</a>
                            <a href="${config.links.discord}" aria-label="Discord">${config.icons.discordIcon}</a>
                            <a href="${config.links.github}" aria-label="GitHub">${config.icons.githubIcon}</a>
                            <a href="${config.links.youtube}" aria-label="YouTube">${config.icons.youtubeIcon}</a>
                        </div>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Producto</h4>
                    <ul>
                        <li><a href="#features">Características</a></li>
                        <li><a href="#pricing">Precios</a></li>
                        <li><a href="${config.links.documentation}">Documentación</a></li>
                        <li><a href="${config.links.api}">API</a></li>
                        <li><a href="${config.links.changelog}">Changelog</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Recursos</h4>
                    <ul>
                        <li><a href="${config.links.guides}">Guías</a></li>
                        <li><a href="${config.links.blog}">Blog</a></li>
                        <li><a href="${config.links.tutorials}">Tutoriales</a></li>
                        <li><a href="${config.links.support}">Soporte</a></li>
                        <li><a href="${config.links.status}">Status</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="${config.links.about}">Sobre Nosotros</a></li>
                        <li><a href="${config.links.contact}">Contacto</a></li>
                        <li><a href="${config.links.terms}">Términos de Servicio</a></li>
                        <li><a href="${config.links.privacy}">Privacidad</a></li>
                        <li><a href="${config.links.cookies}">Cookies</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>${config.footer.newsletter.title}</h4>
                    <p>${config.footer.newsletter.description}</p>
                    <form class="newsletter-form" id="newsletterForm">
                        <input type="email" placeholder="${config.footer.newsletter.placeholder}" required>
                        <button type="submit" class="btn btn-primary btn-small">${config.footer.newsletter.buttonText}</button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>${config.footer.copyright}</p>
                <div class="footer-badges">
                    ${config.footer.badges.map(badge => `
                        <span class="badge-item">${badge.icon} ${badge.text}</span>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Crear demo features
    renderDemoFeatures(config) {
        const container = document.getElementById('demoFeatures');
        if (!container) return;

        container.innerHTML = config.demo.features.map((feature, index) => `
            <div class="demo-feature" style="animation-delay: ${(index + 1) * 0.2}s;">
                <span class="check">${config.icons.check}</span>
                <span>${feature}</span>
            </div>
        `).join('');
    },

    // Renderizar todo
    renderAll(config) {
    this.renderNavigation(config);
    this.renderHero(config);
    this.renderFeatures(config);
    this.renderCommands(config);
    this.renderPricing(config);
    this.renderRoadmap(config);
    this.renderFAQ(config);
    this.renderStats(config);
    this.renderCTA(config);
    this.renderFooter(config);
    this.renderDemoFeatures(config);
    
    // NO actualizar iconos de tema aquí - lo maneja theme.js
    console.log('✅ Contenido renderizado');
}
};

// Cargar configuración al inicio (ahora instantáneo)
AppConfig.load().then(config => {
    if (config) {
        RenderHelpers.renderAll(config);
    }
});

if (typeof getIcon === 'function') {
    console.log('✅ Sistema de iconos detectado, aplicando parche...');
    
    // Actualizar CONFIG_DATA con nombres de iconos en lugar de emojis
    CONFIG_DATA.icons = {
        "logo": "bot",
        "rocket": "rocket",
        "brain": "brain",
        "lightning": "zap",
        "art": "palette",
        "tools": "wrench",
        "globe": "globe",
        "chart": "bar-chart-3",
        "user": "user",
        "bot": "bot",
        "check": "check",
        "cross": "x",
        "star": "star",
        "sun": "sun",
        "moon": "moon",
        "twitter": "twitter",
        "discordIcon": "message-circle",
        "githubIcon": "github",
        "youtubeIcon": "youtube",
        "lock": "lock",
        "shield": "shield",
        "manager1": "user-circle",
        "manager2": "user-cog",
        "manager3": "users",
        "checkCompleted": "check-circle",
        "rocketActive": "rocket",
        "calendar": "calendar"
    };
    
    // Actualizar features con nombres de iconos
    CONFIG_DATA.features.forEach((feature, index) => {
        const iconMap = ['brain', 'zap', 'palette', 'wrench', 'globe', 'bar-chart-3'];
        feature.icon = iconMap[index];
    });
    
    // Actualizar testimonials
    CONFIG_DATA.testimonials[0].avatar = 'user-circle';
    CONFIG_DATA.testimonials[1].avatar = 'user-cog';
    CONFIG_DATA.testimonials[2].avatar = 'users';
    
    // Actualizar roadmap
    CONFIG_DATA.roadmap[0].icon = 'check-circle';
    CONFIG_DATA.roadmap[1].icon = 'check-circle';
    CONFIG_DATA.roadmap[2].icon = 'rocket';
    CONFIG_DATA.roadmap[3].icon = 'calendar';
    
    // Actualizar footer badges
    CONFIG_DATA.footer.badges[0].icon = 'lock';
    CONFIG_DATA.footer.badges[1].icon = 'zap';
    CONFIG_DATA.footer.badges[2].icon = 'shield';
    
    // Actualizar hero badge
    CONFIG_DATA.hero.badge = CONFIG_DATA.hero.badge.replace('🚀 ', '');
    CONFIG_DATA.hero.badgeIcon = 'sparkles';
    
    // Actualizar CTA note
    CONFIG_DATA.cta.note = CONFIG_DATA.cta.note.replace(/✓ /g, '');
    
    console.log('✅ Parche de iconos aplicado correctamente');
}

// Función helper para reemplazar emojis por iconos en el renderizado
function replaceEmojisWithIcons() {
    // Esperar un momento para que todo se renderice
    setTimeout(() => {
        // Reemplazar emojis en feature icons
        document.querySelectorAll('.feature-icon').forEach(el => {
            const emoji = el.textContent.trim();
            const iconMap = {
                '🧠': 'brain',
                '⚡': 'zap',
                '🎨': 'palette',
                '🔧': 'wrench',
                '🌐': 'globe',
                '📊': 'bar-chart-3'
            };
            if (iconMap[emoji]) {
                el.innerHTML = getIcon(iconMap[emoji], 48);
            }
        });
        
        // Reemplazar emojis en logos
        document.querySelectorAll('.logo').forEach(el => {
            if (el.textContent.includes('🤖')) {
                const text = el.textContent.replace('🤖', '').trim();
                el.innerHTML = `${getIcon('bot', 24)} ${text}`;
            }
        });
        
        // Reemplazar emojis en badges
        document.querySelectorAll('.badge').forEach(el => {
            if (el.textContent.includes('🚀')) {
                const text = el.textContent.replace('🚀', '').trim();
                el.innerHTML = `${getIcon('sparkles', 16)} ${text}`;
            }
        });
        
        // Reemplazar emojis en checks y crosses
        document.querySelectorAll('.check').forEach(el => {
            if (el.textContent.trim() === '✓') {
                el.innerHTML = getIcon('check', 16);
            }
        });
        
        document.querySelectorAll('.cross').forEach(el => {
            if (el.textContent.trim() === '✗') {
                el.innerHTML = getIcon('x', 16);
            }
        });
        
        // Reemplazar emojis en roadmap
        document.querySelectorAll('.roadmap-icon').forEach(el => {
            const emoji = el.textContent.trim();
            const iconMap = {
                '✅': 'check-circle',
                '🚀': 'rocket',
                '📅': 'calendar'
            };
            if (iconMap[emoji]) {
                el.innerHTML = getIcon(iconMap[emoji], 32);
            }
        });
        
        // Reemplazar emojis en footer badges
        document.querySelectorAll('.badge-item').forEach(el => {
            const text = el.textContent;
            if (text.includes('🔒')) {
                el.innerHTML = `${getIcon('lock', 16)} ${text.replace('🔒', '').trim()}`;
            } else if (text.includes('⚡')) {
                el.innerHTML = `${getIcon('zap', 16)} ${text.replace('⚡', '').trim()}`;
            } else if (text.includes('🛡️')) {
                el.innerHTML = `${getIcon('shield', 16)} ${text.replace('🛡️', '').trim()}`;
            }
        });
        
        // Reemplazar emojis en social links
        document.querySelectorAll('.social-links a').forEach(el => {
            const emoji = el.textContent.trim();
            const iconMap = {
                '🐦': 'twitter',
                '💬': 'message-circle',
                '💻': 'github',
                '📺': 'youtube'
            };
            if (iconMap[emoji]) {
                el.innerHTML = getIcon(iconMap[emoji], 20);
            }
        });
        
        // Reemplazar emojis en CTA note
        document.querySelectorAll('.cta-note').forEach(el => {
            if (el.textContent.includes('✓')) {
                const parts = el.textContent.split('·').map(part => part.trim());
                el.innerHTML = parts.map(part => 
                    `${getIcon('check', 16)} ${part.replace('✓', '').trim()}`
                ).join(' <span style="margin: 0 8px;">·</span> ');
            }
        });
        
        // Reemplazar iconos de tema
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        if (sunIcon && sunIcon.textContent === '☀️') {
            sunIcon.innerHTML = getIcon('sun', 20);
        }
        if (moonIcon && moonIcon.textContent === '🌙') {
            moonIcon.innerHTML = getIcon('moon', 20);
        }
        
        console.log('✅ Emojis reemplazados por iconos SVG azules');
    }, 100);
}

// Ejecutar el reemplazo después de que la página cargue
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceEmojisWithIcons);
} else {
    replaceEmojisWithIcons();
}