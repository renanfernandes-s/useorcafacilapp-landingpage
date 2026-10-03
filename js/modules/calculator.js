export function initCalculator() {
  const calcForm = document.getElementById('calcForm');
  const resultBox = document.getElementById('calcResultBox');
  const resultValue = document.getElementById('valorHoraValor');
  const summary = document.getElementById('resumoCalculo');
  const rendaInput = document.getElementById('rendaDesejada');
  const custosInput = document.getElementById('custosFixos');
  const diasInput = document.getElementById('diasTrabalhados');
  const horasInput = document.getElementById('horasPorDia');

  if (!(calcForm instanceof HTMLFormElement) ||
      !(resultBox instanceof HTMLElement) ||
      !(resultValue instanceof HTMLElement) ||
      !(summary instanceof HTMLElement) ||
      !(rendaInput instanceof HTMLInputElement) ||
      !(custosInput instanceof HTMLInputElement) ||
      !(diasInput instanceof HTMLInputElement) ||
      !(horasInput instanceof HTMLInputElement)) {
    return;
  }

  calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!calcForm.reportValidity()) return;

    const renda = rendaInput.valueAsNumber;
    const custos = custosInput.value === '' ? 0 : custosInput.valueAsNumber;
    const diasPorSemana = diasInput.valueAsNumber;
    const horasPorDia = horasInput.valueAsNumber;

    if (![renda, custos, diasPorSemana, horasPorDia].every(Number.isFinite)) {
      return;
    }

    const horasMensais = diasPorSemana * horasPorDia * 4.33;
    const valorHora = (renda + custos) / horasMensais;

    if (!Number.isFinite(valorHora) || horasMensais <= 0) {
      return;
    }

    resultValue.textContent = formatCurrency(valorHora);
    summary.textContent =
      `Para atingir a meta de ${formatCurrency(renda)} por mês, considerando ` +
      `${formatCurrency(custos)} em custos fixos e aproximadamente ` +
      `${Math.round(horasMensais)} horas de trabalho por mês.`;
    resultBox.hidden = false;
    resultBox.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'nearest',
    });
  });

  calcForm.addEventListener('input', () => {
    resultBox.hidden = true;
  });
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}