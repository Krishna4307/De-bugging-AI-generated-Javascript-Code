// ============================================
//             Original Code
// ============================================

// const prices = [100, 250, 500, 150, 800];
// const budget = 300;
// function getAffordableProducts(prices, budget) {
//    const result = prices.filter((price) => {
//       price > budget;
//     });
//     return result;
// }
// console.log(getAffordableProducts(prices, budget));


// ============================================
//           Code after Debug
// ============================================

const prices = [100, 250, 500, 150, 800];
const budget = 300;
function getAffordableProducts(prices, budget) {
    const result = prices.filter((price) => {
        return price <= budget;
    });
    return result;
}
console.log(getAffordableProducts(prices, budget));

Expected Output : [100, 250, 150]