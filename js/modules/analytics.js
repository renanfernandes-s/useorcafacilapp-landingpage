const GA_MEASUREMENT_ID = 'G-MN9PZWV7EE';

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  // 1. Carrega o script da biblioteca gtag.js dinamicamente
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // 2. Inicializa a camada de dados (dataLayer)
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  // 3. Ativa o rastreamento automático de conversões na página
  setupTrackedEvents();
}

/**
 * Função para disparar eventos customizados para o GA4
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Mapeia e rastreia os pontos críticos de conversão da Landing Page
 */
function setupTrackedEvents() {
  // Rastreia cliques nos botões de CTA / Cadastro
  const ctaButtons = document.querySelectorAll('a[href*="app.useorcafacilapp.com.br"]');
  ctaButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      trackEvent('click_cta_cadastro', {
        button_location: btn.closest('section')?.id || 'header_or_hero',
        button_text: btn.innerText.trim(),
      });
    });
  });

  // Rastreia envios da Calculadora de Mão de Obra
  const calcForm = document.getElementById('calcForm');
  if (calcForm) {
    calcForm.addEventListener('submit', () => {
      trackEvent('use_calculator', {
        feature: 'calculadora_mao_de_obra',
      });
    });
  }
}