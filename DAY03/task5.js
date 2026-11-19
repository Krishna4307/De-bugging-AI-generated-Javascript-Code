//============================================
//             AI generated Code with Bugs
// ============================================

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mobile", price: 25000 },
//   { name: "Tablet", price: 35000 },
//   { name: "Monitor", price: 15000 }
// ];

// function findExpensiveProduct(products) {
//   let expensive = 0;

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price < expensive) {
//       expensive = products[i];
//     }
//   }

//   return expensive.price;
// }

// console.log(findExpensiveProduct(products));



// Problem :- Find the Most Expensive Product
// Requirements:
// - Identify the logical mistakes.
// - Return the highest-priced product's price.
// - Don't use sort() or Math.max().
// - Handle an empty array sensibly.

// Expected Output :50000


//============================================
//           Code After Debugged
// ============================================

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 25000 },
    { name: "Tablet", price: 35000 },
    { name: "Monitor", price: 15000 }
];

function findExpensiveProduct(products) {
    let expensive = 0;

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > expensive) {
            expensive = products[i].price;
        }
    }

    return expensive;
}

console.log(findExpensiveProduct(products));

// Output : 50000