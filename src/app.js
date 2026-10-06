(function () {
  'use strict';

  const models = {
    ecommerce: {
      title: 'Товарная модель', template: 'ecommerce', filename: 'unit-economics-ecommerce.xlsx',
      defaults: { currency: 'USD', averageCheck: 5000, cogs: 1700, acquiring: 2.5, delivery: 450, fulfillment: 180, tax: 6, losses: 5, other: 100, cpa: 900, orders: 300, lifetimeOrders: 2.2, fixedCosts: 350000, orderGrowth: 5, checkGrowth: 0 },
      fields: [
        { id: 'averageCheck', label: 'Средний чек', suffix: 'за заказ', cell: 'B6', hint: 'Выручка до потерь и возвратов' },
        { id: 'cogs', label: 'Себестоимость товаров', suffix: 'за заказ', cell: 'B7', hint: 'Себестоимость всей корзины' },
        { id: 'acquiring', label: 'Эквайринг', suffix: '%', cell: 'B8', percent: true, max: 100 },
        { id: 'tax', label: 'Налог с выручки', suffix: '%', cell: 'B11', percent: true, max: 100 },
        { id: 'delivery', label: 'Доставка за счет компании', suffix: 'за заказ', cell: 'B9' },
        { id: 'fulfillment', label: 'Упаковка и фулфилмент', suffix: 'за заказ', cell: 'B10' },
        { id: 'losses', label: 'Потери от возвратов и брака', suffix: '%', cell: 'B12', percent: true, max: 100 },
        { id: 'other', label: 'Прочие переменные расходы', suffix: 'за заказ', cell: 'B13' },
        { id: 'cpa', label: 'CAC / CPA', suffix: 'за заказ', cell: 'B14', hint: 'Полная стоимость привлечения' },
        { id: 'orders', label: 'Заказов в месяц', suffix: 'заказов', cell: 'B15' },
        { id: 'lifetimeOrders', label: 'Заказов на клиента за срок жизни', suffix: 'заказа', cell: 'B16' },
        { id: 'fixedCosts', label: 'Постоянные расходы в месяц', suffix: 'в месяц', cell: 'B17' },
        { id: 'orderGrowth', label: 'Рост заказов в месяц', suffix: '%', cell: 'B18', percent: true, max: 100 },
        { id: 'checkGrowth', label: 'Рост среднего чека в месяц', suffix: '%', cell: 'B19', percent: true, max: 100 },
      ],
    },
    saas: {
      title: 'SaaS-модель', template: 'saas', filename: 'unit-economics-saas.xlsx',
      defaults: { currency: 'USD', arpu: 40, serviceCost: 8, paymentFee: 3, discounts: 1, churn: 4, marketing: 50000, newCustomers: 100, startCustomers: 1000, expansion: 2, contraction: 1, fixedCosts: 70000, customerGrowth: 3, arpuGrowth: 0 },
      fields: [
        { id: 'arpu', label: 'ARPU в месяц', suffix: 'на клиента', cell: 'B6' },
        { id: 'serviceCost', label: 'Переменная стоимость обслуживания', suffix: 'на клиента', cell: 'B7' },
        { id: 'paymentFee', label: 'Комиссия платежей', suffix: '%', cell: 'B8', percent: true, max: 100 },
        { id: 'discounts', label: 'Скидки и возвраты', suffix: '%', cell: 'B9', percent: true, max: 100 },
        { id: 'churn', label: 'Месячный logo churn', suffix: '%', cell: 'B10', percent: true, min: 0.01, max: 100, hint: 'Для LTV значение должно быть выше нуля' },
        { id: 'marketing', label: 'Продажи и маркетинг в месяц', suffix: 'в месяц', cell: 'B11' },
        { id: 'newCustomers', label: 'Новых платящих клиентов', suffix: 'в месяц', cell: 'B12', min: 0.01 },
        { id: 'startCustomers', label: 'Клиентов на начало месяца', suffix: 'клиентов', cell: 'B13' },
        { id: 'expansion', label: 'Expansion MRR', suffix: '%', cell: 'B14', percent: true, max: 100 },
        { id: 'contraction', label: 'Contraction MRR', suffix: '%', cell: 'B15', percent: true, max: 100 },
        { id: 'fixedCosts', label: 'Постоянные расходы в месяц', suffix: 'в месяц', cell: 'B16' },
        { id: 'customerGrowth', label: 'Рост новых клиентов в месяц', suffix: '%', cell: 'B17', percent: true, max: 100 },
        { id: 'arpuGrowth', label: 'Рост ARPU в месяц', suffix: '%', cell: 'B18', percent: true, max: 100 },
      ],
    },
    marketplace: {
      title: 'Маркетплейс', template: 'marketplace', filename: 'unit-economics-marketplace.xlsx',
      defaults: { currency: 'USD', price: 3000, cogs: 900, commission: 18, acquiring: 2, tax: 6, buyout: 82, forwardLogistics: 180, returnLogistics: 120, fulfillment: 70, storage: 35, adShare: 12, other: 40, sales: 800, fixedCosts: 250000, salesGrowth: 5, priceGrowth: 0 },
      fields: [
        { id: 'price', label: 'Цена продажи', suffix: 'за товар', cell: 'B6', hint: 'Цена после скидки продавца' },
        { id: 'cogs', label: 'Себестоимость товара', suffix: 'за товар', cell: 'B7' },
        { id: 'commission', label: 'Комиссия маркетплейса', suffix: '%', cell: 'B8', percent: true, max: 100 },
        { id: 'acquiring', label: 'Эквайринг и платежные комиссии', suffix: '%', cell: 'B9', percent: true, max: 100 },
        { id: 'tax', label: 'Налог с выручки', suffix: '%', cell: 'B10', percent: true, max: 100 },
        { id: 'buyout', label: 'Процент выкупа', suffix: '%', cell: 'B11', percent: true, min: 0.01, max: 100 },
        { id: 'forwardLogistics', label: 'Логистика до покупателя', suffix: 'за отправление', cell: 'B12' },
        { id: 'returnLogistics', label: 'Обратная логистика', suffix: 'за возврат', cell: 'B13' },
        { id: 'fulfillment', label: 'Упаковка и обработка', suffix: 'за отправление', cell: 'B14' },
        { id: 'storage', label: 'Хранение на проданный товар', suffix: 'за выкуп', cell: 'B15' },
        { id: 'adShare', label: 'Реклама, ДРР', suffix: '%', cell: 'B16', percent: true, max: 100 },
        { id: 'other', label: 'Прочие переменные расходы', suffix: 'за выкуп', cell: 'B17' },
        { id: 'sales', label: 'Выкупленных товаров в месяц', suffix: 'товаров', cell: 'B18' },
        { id: 'fixedCosts', label: 'Постоянные расходы в месяц', suffix: 'в месяц', cell: 'B19' },
        { id: 'salesGrowth', label: 'Рост продаж в месяц', suffix: '%', cell: 'B20', percent: true, max: 100 },
        { id: 'priceGrowth', label: 'Рост цены в месяц', suffix: '%', cell: 'B21', percent: true, max: 100 },
      ],
    },
    services: {
      title: 'Услуги', template: 'services', filename: 'unit-economics-services.xlsx',
      defaults: { currency: 'USD', projectRevenue: 2500, laborHours: 45, hourlyCost: 22, contractors: 260, paymentFee: 2.5, tax: 6, other: 90, marketing: 6000, leads: 60, conversion: 20, lifetimeProjects: 1.8, fixedCosts: 9000, capacity: 15, leadGrowth: 4, priceGrowth: 0 },
      fields: [
        { id: 'projectRevenue', label: 'Средняя выручка проекта', suffix: 'за проект', cell: 'B6' },
        { id: 'laborHours', label: 'Часов команды на проект', suffix: 'часов', cell: 'B7' },
        { id: 'hourlyCost', label: 'Полная стоимость часа', suffix: 'за час', cell: 'B8' },
        { id: 'contractors', label: 'Подрядчики и материалы', suffix: 'за проект', cell: 'B9' },
        { id: 'paymentFee', label: 'Комиссия платежей', suffix: '%', cell: 'B10', percent: true, max: 100 },
        { id: 'tax', label: 'Налог с выручки', suffix: '%', cell: 'B11', percent: true, max: 100 },
        { id: 'other', label: 'Прочие переменные расходы', suffix: 'за проект', cell: 'B12' },
        { id: 'marketing', label: 'Маркетинг и продажи в месяц', suffix: 'в месяц', cell: 'B13' },
        { id: 'leads', label: 'Лидов в месяц', suffix: 'лидов', cell: 'B14' },
        { id: 'conversion', label: 'Конверсия лида в клиента', suffix: '%', cell: 'B15', percent: true, max: 100 },
        { id: 'lifetimeProjects', label: 'Проектов на клиента за срок жизни', suffix: 'проекта', cell: 'B16' },
        { id: 'fixedCosts', label: 'Постоянные расходы в месяц', suffix: 'в месяц', cell: 'B17' },
        { id: 'capacity', label: 'Мощность команды', suffix: 'проектов', cell: 'B18' },
        { id: 'leadGrowth', label: 'Рост лидов в месяц', suffix: '%', cell: 'B19', percent: true, max: 100 },
        { id: 'priceGrowth', label: 'Рост цены в месяц', suffix: '%', cell: 'B20', percent: true, max: 100 },
      ],
    },
  };

  const pageRoot = document.getElementById('ad-tools-page') || document.body;
  const activeModel = pageRoot.dataset.model;
  const model = models[activeModel];
  if (!model) return;
  let values = Object.assign({}, model.defaults);

  const formTitle = document.getElementById('form-title');
  const fieldsRoot = document.getElementById('fields');
  const currency = document.getElementById('currency');
  const resultGrid = document.getElementById('result-grid');
  const primaryLabel = document.getElementById('primary-label');
  const primaryValue = document.getElementById('primary-value');
  const primaryCaption = document.getElementById('primary-caption');
  const verdict = document.getElementById('verdict');
  const verdictTitle = document.getElementById('verdict-title');
  const verdictText = document.getElementById('verdict-text');
  const downloadButton = document.getElementById('download-button');
  const resetButton = document.getElementById('reset-button');
  const downloadStatus = document.getElementById('download-status');

  function pct(value) { return Number(value) / 100; }
  function formatNumber(value, digits) {
    if (!Number.isFinite(value)) return 'Нет данных';
    return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: digits ?? 1 }).format(value);
  }
  function formatMoney(value) {
    if (!Number.isFinite(value)) return 'Нет данных';
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: values.currency, maximumFractionDigits: 0 }).format(value);
  }
  function formatRatio(value) { return Number.isFinite(value) ? formatNumber(value, 2) + 'x' : 'Нет данных'; }
  function formatPercent(value) { return Number.isFinite(value) ? formatNumber(value * 100, 1) + '%' : 'Нет данных'; }

  function ecommerceResult() {
    const netRevenue = values.averageCheck * (1 - pct(values.losses));
    const cm1 = netRevenue - values.cogs - netRevenue * pct(values.acquiring) - netRevenue * pct(values.tax) - values.delivery - values.fulfillment - values.other;
    const cm2 = cm1 - values.cpa;
    const cm2Margin = netRevenue ? cm2 / netRevenue : 0;
    const monthlyProfit = cm2 * values.orders - values.fixedCosts;
    const profitLtv = cm1 * values.lifetimeOrders;
    const ltvCac = values.cpa > 0 ? profitLtv / values.cpa : Infinity;
    const breakEvenOrders = cm2 > 0 ? Math.ceil(values.fixedCosts / cm2) : Infinity;
    const breakEvenRoas = cm1 > 0 && netRevenue > 0 ? 1 / (cm1 / netRevenue) : Infinity;
    let level = 'good', title = 'Юнит приносит деньги', text = 'CM2 положительная. Проверьте месячный объем и постоянные расходы.';
    if (cm2 <= 0) { level = 'danger'; title = 'Привлечение убыточно'; text = 'CAC выше маржи до рекламы. Проверьте цену, переменные расходы и канал привлечения.'; }
    else if (monthlyProfit < 0) { level = 'warning'; title = 'Юнит положительный, объема пока мало'; text = `Нужно около ${formatNumber(breakEvenOrders, 0)} заказов в месяц для покрытия постоянных расходов.`; }
    return { primary: ['CM2 с заказа', formatMoney(cm2), 'после переменных расходов и привлечения'], cards: [['CM2, маржа', formatPercent(cm2Margin)], ['Максимальный CAC', formatMoney(cm1)], ['Прибыль в месяц', formatMoney(monthlyProfit)], ['Заказов для безубыточности', Number.isFinite(breakEvenOrders) ? formatNumber(breakEvenOrders, 0) : 'Нет'], ['LTV / CAC', formatRatio(ltvCac)], ['ROAS безубыточности', formatRatio(breakEvenRoas)]], verdict: { level, title, text } };
  }

  function saasResult() {
    const netArpu = values.arpu * (1 - pct(values.discounts));
    const grossProfit = netArpu - netArpu * pct(values.paymentFee) - values.serviceCost;
    const grossMargin = netArpu ? grossProfit / netArpu : 0;
    const cac = values.newCustomers > 0 ? values.marketing / values.newCustomers : Infinity;
    const churn = pct(values.churn);
    const ltv = churn > 0 ? grossProfit / churn : Infinity;
    const ltvCac = cac > 0 ? ltv / cac : Infinity;
    const payback = grossProfit > 0 ? cac / grossProfit : Infinity;
    const startMrr = values.startCustomers * netArpu;
    const endMrr = startMrr * (1 - churn + pct(values.expansion) - pct(values.contraction)) + values.newCustomers * netArpu;
    const nrr = 1 - churn + pct(values.expansion) - pct(values.contraction);
    let level = 'good', title = 'Экономика проходит базовую проверку', text = 'Сопоставьте срок окупаемости с доступным капиталом и темпом роста.';
    if (grossProfit <= 0 || ltvCac < 1) { level = 'danger'; title = 'Модель теряет деньги на клиенте'; text = 'Проверьте стоимость обслуживания, churn и полную стоимость привлечения.'; }
    else if (ltvCac < 3 || payback > 12) { level = 'warning'; title = 'Запас по привлечению ограничен'; text = 'LTV / CAC ниже ориентира 3x или CAC окупается дольше 12 месяцев.'; }
    return { primary: ['LTV / CAC', formatRatio(ltvCac), 'валовая прибыль клиента к стоимости привлечения'], cards: [['Валовая маржа', formatPercent(grossMargin)], ['CAC', formatMoney(cac)], ['LTV', formatMoney(ltv)], ['Окупаемость CAC', Number.isFinite(payback) ? formatNumber(payback, 1) + ' мес.' : 'Нет'], ['NRR', formatPercent(nrr)], ['MRR на конец', formatMoney(endMrr)]], verdict: { level, title, text } };
  }

  function marketplaceResult() {
    const buyout = pct(values.buyout);
    const logistics = buyout > 0 ? (values.forwardLogistics + values.fulfillment) / buyout + values.returnLogistics * (1 - buyout) / buyout + values.storage + values.other : Infinity;
    const fees = values.price * (pct(values.commission) + pct(values.acquiring));
    const tax = values.price * pct(values.tax);
    const cm1 = values.price - values.cogs - fees - tax - logistics;
    const adCost = values.price * pct(values.adShare);
    const cm2 = cm1 - adCost;
    const margin = values.price ? cm2 / values.price : 0;
    const monthlyProfit = cm2 * values.sales - values.fixedCosts;
    const breakEvenSales = cm2 > 0 ? Math.ceil(values.fixedCosts / cm2) : Infinity;
    const maxDrr = values.price ? cm1 / values.price : 0;
    const roas = maxDrr > 0 ? 1 / maxDrr : Infinity;
    const denominator = 1 - pct(values.commission) - pct(values.acquiring) - pct(values.tax) - pct(values.adShare);
    const breakEvenPrice = denominator > 0 ? (values.cogs + logistics) / denominator : Infinity;
    let level = 'good', title = 'Товар покрывает расходы', text = 'CM2 положительная. Проверьте оборачиваемость, остатки и кассовый разрыв.';
    if (cm2 <= 0) { level = 'danger'; title = 'Продажа убыточна'; text = 'Цена не покрывает товар, тарифы, логистику и рекламу.'; }
    else if (monthlyProfit < 0) { level = 'warning'; title = 'Маржа есть, объема пока мало'; text = `Нужно около ${formatNumber(breakEvenSales, 0)} выкупов в месяц для покрытия постоянных расходов.`; }
    return { primary: ['CM2 с выкупа', formatMoney(cm2), 'после комиссии, логистики, налога и рекламы'], cards: [['CM2, маржа', formatPercent(margin)], ['Максимальный ДРР', formatPercent(maxDrr)], ['Прибыль в месяц', formatMoney(monthlyProfit)], ['Цена безубыточности', formatMoney(breakEvenPrice)], ['Выкупов для безубыточности', Number.isFinite(breakEvenSales) ? formatNumber(breakEvenSales, 0) : 'Нет'], ['ROAS безубыточности', formatRatio(roas)]], verdict: { level, title, text } };
  }

  function servicesResult() {
    const labor = values.laborHours * values.hourlyCost;
    const cm1 = values.projectRevenue - labor - values.contractors - values.projectRevenue * pct(values.paymentFee) - values.projectRevenue * pct(values.tax) - values.other;
    const newCustomers = values.leads * pct(values.conversion);
    const cac = newCustomers > 0 ? values.marketing / newCustomers : Infinity;
    const cm2 = cm1 - cac;
    const completed = Math.min(newCustomers, values.capacity);
    const monthlyProfit = cm1 * completed - values.marketing - values.fixedCosts;
    const profitLtv = cm1 * values.lifetimeProjects;
    const ltvCac = cac > 0 ? profitLtv / cac : Infinity;
    const maxCpl = cm1 * pct(values.conversion);
    const payback = cm1 > 0 ? cac / cm1 : Infinity;
    const breakEvenProjects = cm1 > 0 ? Math.ceil((values.marketing + values.fixedCosts) / cm1) : Infinity;
    const utilization = values.capacity > 0 ? Math.min(1, newCustomers / values.capacity) : 0;
    let level = 'good', title = 'Проект покрывает привлечение', text = 'Проверьте, хватает ли мощности на целевой объем продаж.';
    if (cm1 <= 0 || cm2 <= 0) { level = 'danger'; title = 'Первый проект не окупает привлечение'; text = 'Проверьте цену проекта, трудозатраты, конверсию и стоимость лидов.'; }
    else if (monthlyProfit < 0 || breakEvenProjects > values.capacity) { level = 'warning'; title = 'Прибыль ограничена объемом или мощностью'; text = `Для безубыточности нужно около ${formatNumber(breakEvenProjects, 0)} проектов, мощность сейчас - ${formatNumber(values.capacity, 0)}.`; }
    return { primary: ['CM2 с первого проекта', formatMoney(cm2), 'после прямых расходов и CAC'], cards: [['CM1, маржа', formatPercent(values.projectRevenue ? cm1 / values.projectRevenue : 0)], ['CAC', formatMoney(cac)], ['Максимальный CPL', formatMoney(maxCpl)], ['LTV / CAC', formatRatio(ltvCac)], ['Окупаемость CAC', Number.isFinite(payback) ? formatNumber(payback, 2) + ' проекта' : 'Нет'], ['Загрузка мощности', formatPercent(utilization)]], verdict: { level, title, text } };
  }

  function calculate() {
    if (activeModel === 'ecommerce') return ecommerceResult();
    if (activeModel === 'saas') return saasResult();
    if (activeModel === 'marketplace') return marketplaceResult();
    return servicesResult();
  }

  function readField(event) {
    const input = event.currentTarget;
    const config = model.fields.find(field => field.id === input.name);
    const parsed = Number(String(input.value).replace(',', '.'));
    const valid = Number.isFinite(parsed) && parsed >= (config.min ?? 0) && parsed <= (config.max ?? Number.POSITIVE_INFINITY);
    input.setAttribute('aria-invalid', String(!valid));
    if (valid) values[input.name] = parsed;
    updateResult();
  }

  function renderFields() {
    formTitle.textContent = model.title;
    currency.value = values.currency;
    fieldsRoot.innerHTML = model.fields.map(field => `
      <div class="field${field.wide ? ' wide' : ''}"> <label for="${field.id}">${field.label}</label> <div class="input-wrap"> <input id="${field.id}" name="${field.id}" type="number" inputmode="decimal" min="${field.min ?? 0}" ${Number.isFinite(field.max) ? `max="${field.max}"` : ''} step="${field.percent ? '0.1' : 'any'}" value="${values[field.id]}" aria-describedby="${field.id}-hint"> <span class="input-suffix">${field.suffix}</span> </div> <small id="${field.id}-hint">${field.hint || 'Введите фактическое значение'}</small> </div>`).join('');
    fieldsRoot.querySelectorAll('input').forEach(input => input.addEventListener('input', readField));
  }

  function updateResult() {
    const result = calculate();
    primaryLabel.textContent = result.primary[0];
    primaryValue.textContent = result.primary[1];
    primaryCaption.textContent = result.primary[2];
    resultGrid.innerHTML = result.cards.map(([label, value]) => `<div class="result-item"><span>${label}</span><strong>${value}</strong></div>`).join('');
    verdict.className = 'verdict' + (result.verdict.level === 'good' ? '' : ` is-${result.verdict.level}`);
    verdictTitle.textContent = result.verdict.title;
    verdictText.textContent = result.verdict.text;
  }

  function base64ToBytes(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  }

  function saveBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = filename;
    document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  async function downloadWorkbook() {
    const templates = window.UNIT_ECONOMICS_TEMPLATES || {};
    const encodedTemplate = templates[model.template];
    let bytes;
    downloadButton.disabled = true;
    downloadStatus.textContent = 'Готовлю файл...';
    try {
      if (!encodedTemplate) throw new Error('Template unavailable');
      bytes = base64ToBytes(encodedTemplate);
      if (!window.ExcelJS) throw new Error('ExcelJS unavailable');
      const workbook = new window.ExcelJS.Workbook();
      await workbook.xlsx.load(bytes.buffer);
      const sheet = workbook.getWorksheet('Вводные');
      sheet.getCell('B5').value = values.currency;
      model.fields.forEach(field => { sheet.getCell(field.cell).value = field.percent ? pct(values[field.id]) : values[field.id]; });
      workbook.calcProperties.fullCalcOnLoad = true;
      workbook.calcProperties.forceFullCalc = true;
      workbook.calcProperties.calcMode = 'auto';
      const output = await workbook.xlsx.writeBuffer();
      const datedName = model.filename.replace('.xlsx', `-${new Date().toISOString().slice(0, 10)}.xlsx`);
      saveBlob(new Blob([output], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), datedName);
      downloadStatus.textContent = 'Excel готов. Формулы пересчитаются при открытии.';
    } catch (error) {
      if (bytes) {
        saveBlob(new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), model.filename);
        downloadStatus.textContent = 'Скачан базовый шаблон. Ваши значения можно внести на листе «Вводные».';
      } else {
        downloadStatus.textContent = 'Шаблон временно недоступен. Обновите страницу и попробуйте еще раз.';
      }
    } finally { downloadButton.disabled = false; }
  }

  currency.addEventListener('change', () => { values.currency = currency.value; updateResult(); });
  resetButton.addEventListener('click', () => { values = Object.assign({}, model.defaults); downloadStatus.textContent = 'Примерные значения восстановлены.'; renderFields(); updateResult(); });
  downloadButton.addEventListener('click', downloadWorkbook);
  renderFields();
  updateResult();
})();
