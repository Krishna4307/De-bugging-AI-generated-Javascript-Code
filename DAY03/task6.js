//============================================
//             AI generated Code with Bugs
// ============================================

// const users = [
//   { id: 1, name: "Rahul" },
//   { id: 2, name: "Priya" },
//   { id: 3, name: "Arjun" },
//   { id: 4, name: "Sneha" }
// ];

// function searchUser(users, searchName) {
//   const result = users.find((user) => {
//     user.name.toLowerCase() === searchName.toLowerCase();
//   });

//   return result.name;
// }

// console.log(searchUser(users, "Priya"));


// Requirements:
// - Fix the search functionality.
// - Search should be case-insensitive.
// - Handle users who don't exist.
// - Don't change the original array.

// Expected Output :Priya

//============================================
//           Code After Debugged
// ============================================

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arjun" },
    { id: 4, name: "Sneha" }
];
function searchUser(users, searchName) {
    const result = users.find((user) => {
        return user.name.toLowerCase() === searchName.toLowerCase();
    });
    return result.name;
}

console.log(searchUser(users, "Priya"));

// Output:Priya
