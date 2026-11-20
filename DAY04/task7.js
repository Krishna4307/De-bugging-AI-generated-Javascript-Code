//============================================
//             AI generated Code with Bugs
// ============================================

// const marks = [75, 85, 60, 90, 70];
// function calculateMarks(marks) {
//   let total = 0;

//   marks.forEach((mark) => {
//     total = mark;
//   });

//   const average = total / marks.length;

//   return { total, average };
// }
// console.log(calculateMarks(marks));

// Expected Output :{ total: 380, average: 76 }
//============================================
//           Code After Debugged
// ============================================
const marks = [75, 85, 60, 90, 70];
function calculateMarks(marks) {
    let total = 0;
    marks.forEach((mark) => {
        total += mark;
    });

    const average = total / marks.length;
    return { total, average };
}
console.log(calculateMarks(marks));