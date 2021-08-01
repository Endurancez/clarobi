const prices = {
  bright: 39,
  smart: 99,
  wise: 149,
  enterprise: 299,
};

const togglePricing = document.getElementById('toggle-pricing');
const brightHTML = document.getElementById('bright-price');
const smartHTML = document.getElementById('smart-price');
const wiseHTML = document.getElementById('wise-price');
const enterpriseHTML = document.getElementById('enterprise-price');

togglePricing.addEventListener('change', (e) => {
  if (e.target.checked) {
    const annualPrices = { ...prices };
    for (const prop in annualPrices) {
      annualPrices[prop] = salePercent(annualPrices[prop], 20);
    }
    pricesHTML(annualPrices);
    return;
  }
  pricesHTML(prices);
});

const salePercent = (price, percent) => price - (percent / 100) * price;

const pricesHTML = (prices) => {
  brightHTML.innerHTML = prices.bright;
  smartHTML.innerHTML = prices.smart;
  wiseHTML.innerHTML = prices.wise;
  enterpriseHTML.innerHTML = prices.enterprise;
};
