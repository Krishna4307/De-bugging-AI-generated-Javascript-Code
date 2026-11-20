//============================================
//             AI generated Code with Bugs
// ============================================

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Mobile", price: 20000 },
//   { name: "Keyboard", price: 1500 }
// ];

// function getProducts(products) {
//   const result = products.filter((product) => {
//     product.price < 10000;
//   });

//   result.sort((a, b) => a.price - b.price);

//   return result;
// }

// console.log(getProducts(products));

// Expected Output :[
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 }
// ]
//============================================
//           Code After Debugged
// ============================================
const products = [
{ name: "Laptop", price: 50000 },
{ name: "Mouse", price: 500 },
{ name: "Mobile", price: 20000 },
{ name: "Keyboard", price: 1500 }
];

function getProducts(products) {
    const result = products.filter((product) => {
    return product.price < 10000;
    });

    result.sort((a, b) => a.price - b.price);

    return result;
}

console.log(getProducts(products));