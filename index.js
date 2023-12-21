// const users = [
//   { firstName: "Kartik", lastName: "Vishwakarma", age: "23" },
//   { firstName: "Prateek", lastName: "Raj", age: "75" },
//   { firstName: "Shivam", lastName: "Kumar", age: "50" },
//   { firstName: "Rishabh", lastName: "Dhiman", age: "23" },
//   { firstName: "Amit", lastName: "Chaudhary", age: "29" },
// ];

// // const output = users.map((x) => x.firstName + " " + x.lastName);

// // const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

// // const output = users.reduce(function (acc, curr) {
// //   if (curr.age > acc) {
// //     acc = curr.age;
// //   }
// //   return acc;
// // }, 0);

// // const output = users.reduce((acc, curr) => {
// //   if (curr.age < 30) {
// //     acc.push(`${curr.firstName} ${curr.lastName}`);
// //   }
// //   return acc;
// // }, []);

// const output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] += 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

//Callbacks

// console.log("Namaste");

// setTimeout(function () {
//   console.log("JavaScript");
// }, 5000);

// console.log("Season 2");

function x(ram, arr) {
  ram = 2;
  // arr = [...arr, 5];
  arr.push(5);
  b = ["jai shree ram"];

  arr = b;
  // console.log("x");

  // if (typeof y === "function") {
  //   return y?.();
  // } else {
  //   return console.log("y is not a function");
  // }
  // return y();
}
// z(function () {
//   return console.log("y");
// });
// z("afasd");

arr = [1, 2, 4];

call, apply, bind, this, map, filter, reduce;
