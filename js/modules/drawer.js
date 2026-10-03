export function initDrawer() {
  const overlay = document.getElementById('navOverlay');
  const backdrop = document.getElementById('backdrop');
  const menuButton = document.querySelector('.menu-icon');
  const closeButton = document.querySelector('.close-btn');

  if (!(overlay instanceof HTMLElement) ||
      !(backdrop instanceof HTMLElement) ||
      !(menuButton instanceof HTMLButtonElement)) {
    return;
  }

  const setOpen = (isOpen, restoreFocus = true) => {
    backdrop.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuButton.title = isOpen ? 'Fechar menu' : 'Abrir menu';
    overlay.setAttribute('aria-hidden', !isOpen);
    overlay.inert = !isOpen;
    overlay.hidden = !isOpen;
    overlay.classList.toggle('active', isOpen);

    if (isOpen && closeButton instanceof HTMLButtonElement) {
      closeButton.focus();
    } else if (!isOpen && restoreFocus) {
      menuButton.focus();
    }
  };

  menuButton.addEventListener('click', () => {
    setOpen(overlay.hidden);
  });

  if (closeButton instanceof HTMLButtonElement) {
    closeButton.addEventListener('click', () => setOpen(false));
  }

  backdrop.addEventListener('click', () => setOpen(false));
  overlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false, false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) {
      setOpen(false);
    }
  });
}