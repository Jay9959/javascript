function electricity(units) {
    let bill = 500

    if (units <= 100) {
        bill = units * 0.50;
    } else if (units <= 200) {
        bill = (100 * 0.50) + ((units - 100) * 0.75);
    } else if (units <= 300) {
        bill = (100 * 0.50) + (100 * 0.75) + ((units - 200) * 1.00);
    } else {
        bill = (100 * 0.50) + (100 * 0.75) + (100 * 1.00) + ((units - 300) * 1.50);
    }

    return bill;
}

// Example usage:
const unitsConsumed = 300;
const billAmount = electricity(unitsConsumed);
document.write(`The electricity bill for ${unitsConsumed} units is $${billAmount.toFixed(2)}`);