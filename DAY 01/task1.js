
// ============================================
//             Original Code
// ============================================

// const prices = [100, 200, 300, 400];
// function calculateTotal(prices) {
// let total = 0;
// for (let i = 0; i <= prices.length; i++) {
//     total = prices[i];
// }
// return total;
// }
// console.log(calculateTotal(prices));


// ============================================
//             Code After Debug
// ============================================

const prices = [100, 200, 300, 400];
function calculateTotal(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i]);
    }
    return total;
}
console.log(calculateTotal(prices));


// Expected Output : 1000