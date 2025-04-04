// Currency conversion rates (as of a recent date)
const exchangeRates = {
    INR: {
        USD: 0.012,
        EUR: 0.011,
        GBP: 0.0094,
        JPY: 1.82,
        AUD: 0.018,
        CAD: 0.016,
        CHF: 0.011,
        CNY: 0.086,
        NZD: 0.020,
        INR: 1
    },
    USD: {
        INR: 83.33,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 151.50,
        AUD: 1.52,
        CAD: 1.35,
        CHF: 0.91,
        CNY: 7.15,
        NZD: 1.64,
        USD: 1
    },
    EUR: {
        INR: 90.91,
        USD: 1.09,
        GBP: 0.86,
        JPY: 164.67,
        AUD: 1.65,
        CAD: 1.47,
        CHF: 0.99,
        CNY: 7.77,
        NZD: 1.78,
        EUR: 1
    },
    GBP: {
        INR: 106.38,
        USD: 1.27,
        EUR: 1.16,
        JPY: 191.77,
        AUD: 1.92,
        CAD: 1.71,
        CHF: 1.15,
        CNY: 9.09,
        NZD: 2.08,
        GBP: 1
    },
    JPY: {
        INR: 0.55,
        USD: 0.0066,
        EUR: 0.0061,
        GBP: 0.0052,
        AUD: 0.010,
        CAD: 0.0089,
        CHF: 0.0060,
        CNY: 0.047,
        NZD: 0.011,
        JPY: 1
    },
    AUD: {
        INR: 55.56,
        USD: 0.66,
        EUR: 0.61,
        GBP: 0.52,
        JPY: 100.00,
        CAD: 0.89,
        CHF: 0.60,
        CNY: 4.70,
        NZD: 1.08,
        AUD: 1
    },
    CAD: {
        INR: 62.50,
        USD: 0.74,
        EUR: 0.68,
        GBP: 0.58,
        JPY: 112.36,
        AUD: 1.12,
        CHF: 0.67,
        CNY: 5.29,
        NZD: 1.21,
        CAD: 1
    },
    CHF: {
        INR: 90.91,
        USD: 1.09,
        EUR: 1.01,
        GBP: 0.87,
        JPY: 166.67,
        AUD: 1.67,
        CAD: 1.49,
        CNY: 7.89,
        NZD: 1.81,
        CHF: 1
    },
    CNY: {
        INR: 11.63,
        USD: 0.14,
        EUR: 0.13,
        GBP: 0.11,
        JPY: 21.19,
        AUD: 0.21,
        CAD: 0.19,
        CHF: 0.13,
        NZD: 0.23,
        CNY: 1
    },
    NZD: {
        INR: 50.00,
        USD: 0.60,
        EUR: 0.56,
        GBP: 0.48,
        JPY: 92.59,
        AUD: 0.93,
        CAD: 0.83,
        CHF: 0.55,
        CNY: 4.35,
        NZD: 1
    }
};

// DOM Elements
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const resultInput = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');
const swapBtn = document.getElementById('swap-btn');

// Convert currency function
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;
    
    if (isNaN(amount)) {
        alert('Please enter a valid number');
        return;
    }

    const rate = exchangeRates[from][to];
    const result = amount * rate;
    
    // Format the result based on the currency
    if (to === 'JPY') {
        resultInput.value = result.toFixed(0); // JPY typically doesn't use decimal places
    } else if (to === 'CNY') {
        resultInput.value = result.toFixed(2); // CNY uses 2 decimal places
    } else {
        resultInput.value = result.toFixed(2); // All other currencies use 2 decimal places
    }
}

// Swap currencies function
function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convertCurrency();
}

// Event Listeners
convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);

// Convert on input change
amountInput.addEventListener('input', convertCurrency);
fromCurrency.addEventListener('change', convertCurrency);
toCurrency.addEventListener('change', convertCurrency);

// Initial conversion
convertCurrency(); 
