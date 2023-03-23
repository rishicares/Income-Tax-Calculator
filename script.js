const form = document.getElementById('taxForm');
const taxResult = document.getElementById('taxResult');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const income = parseFloat(form.income.value);
    const isMarried = form.status.value === 'married';
    const tax = calculateTax(income, isMarried);

    taxResult.value = `NPR ${tax.toFixed(2)}`;
});

function calculateTax(income, isMarried) {
    let tax;

    if (isMarried) {
        if (income <= 600000) {
            tax = 0.01 * income;
        } else if (income <= 800000) {
            tax = 6000 + 0.1 * (income - 600000);
        } else if (income <= 1100000) {
            tax = 26000 + 0.2 * (income - 800000);
        } else if (income <= 2100000) {
            tax = 106000 + 0.3 * (income - 1100000);
        } else {
            tax = 206000 + 0.36 * (income - 2100000);
        }
    } else {
        if (income <= 500000) {
            tax = 0.01 * income;
        } else if (income <= 700000) {
            tax = 5000 + 0.1 * (income - 500000);
        } else if (income <= 1000000) {
            tax = 25000 + 0.2 * (income - 700000);
        } else if (income <= 2000000) {
            tax = 75000 + 0.3 * (income - 1000000);
        } else {
            tax = 195000 + 0.36 * (income - 2000000);
        }
    }
    
    return tax;
}