//============================================
//             AI generated Code with Bugs
// ============================================
// const numbers = [1, 2, 3, 5, 6];

// function findMissingNumber(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total = numbers[i];
//   }

//   const expectedTotal = 6 * (6 + 1) / 2;

//   return expectedTotal - total;
// }

// console.log(findMissingNumber(numbers));

//============================================
//           Code After Debugged
// ============================================
const numbers = [1, 2, 3, 5, 6];

function findMissingNumber(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log("Total : ",total)

  const expectedTotal = 6 * (6 + 1) / 2;
  console.log("Expected Total : ",expectedTotal)
  return expectedTotal - total;
}

console.log("Missing Number From the Arr : ",findMissingNumber(numbers));

// Expected Output : 4
// output:4