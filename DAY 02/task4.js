//============================================
//             AI generated Code with Bugs
// ============================================
// const employees = [
//   { name: "Rahul", salary: 25000 },
//   { name: "Priya", salary: 40000 },
//   { name: "Arjun", salary: 30000 },
//   { name: "Sneha", salary: 50000 }
// ];

// function getEmployees(employees, minimumSalary) {
//   const result = employees.filter((employee) => {
//     employee.salary >= minimumSalary;
//   });

//   return result;
// }

// const filtered = getEmployees(employees, 30000);

// console.log(filtered);

//============================================
//       Code After Solved Bugs
// ============================================
const employees = [
  { name: "Rahul", salary: 25000 },
  { name: "Priya", salary: 40000 },
  { name: "Arjun", salary: 30000 },
  { name: "Sneha", salary: 50000 }
];

function getEmployees(employees, minimumSalary) {
  const result = employees.filter((employee) => {
    return employee.salary >= minimumSalary;
  });

  return result;
}

const filtered = getEmployees(employees, 30000);
console.log(filtered);

// expected Output :
// [
//   { name: "Priya", salary: 40000 },
//   { name: "Arjun", salary: 30000 },
//   { name: "Sneha", salary: 50000 }
// ]

// Output :
// [
// //   { name: "Priya", salary: 40000 },
// //   { name: "Arjun", salary: 30000 },
// //   { name: "Sneha", salary: 50000 }
// // ]