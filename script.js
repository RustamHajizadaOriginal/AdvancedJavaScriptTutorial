//--VS Code Shortcusts
// FOR MORE - https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

// ====== ARRAYS()======
// (() => {
//   const numbersEl = [25, 50, 100, 200, 400];
//   // push()
//   numbersEl.push(5);
//   console.log(numbersEl);
//   // forEach()
//   numbersEl.forEach((nr) => {
//     console.log(nr + 10);
//   });
//   // map()
//   const newNumbers = numbersEl.map((nr2) => {
//     return nr2 * 2;
//   });
//   console.log(newNumbers);
//   // some()
//   const resultOfSome = numbersEl.some((numb) => {
//     return numb >= 400;
//   });
//   console.log(resultOfSome);
//   // find()
//   const resultOfFind = numbersEl.find((number) => {
//     return number >= 400;
//   });
//   console.log(resultOfFind);
//   // filter()
//   const newNumbersFilter = numbersEl.filter((numbersFilter) => {
//     return numbersFilter >= 100;
//   });
//   console.log(newNumbersFilter);
// })();

// ====== OBJECTS ()======
// (() => {
//   const user = {
//     name: "Romeo",
//     age: 32,
//   };
//   user.name = "Rustam";
//   console.log(user);
// })();

// ====== FUNCTIONS ()======
// (() => {
//     callback functions
//     (doSomething) => {};
//     const calculatePrice = () => {};
//     methods
//     const arr = [5, 10, 15];
//     arr.push(20);

//     console.log(arr);

//     const obj = {
//       name: "Joe",
//       hobbies: ["reading", "running"],
//       calculateAge: function () {
//         return 30 + this.hobbies.length;
//       },
//     };

//     console.log(obj.calculateAge());

//     const calculatePrice = (sqMeters = 10000) => {
//       return 5000 + sqMeters;
//     };
//     const result = calculatePrice();

//     console.log(result);
//  })();

// ====== Destructuring ()======
// (() => {
//   const user = {
//     name: "Joe",
//     age: 32,
//     address: {
//       city: "New York",
//       street: "Broadway",
//     },
//   };
//   const numbers = [8, 5, 3, 10];
//   const [a, b, c] = numbers;
//   console.log(a, b, c);
//   const { name, age } = user;
//   console.log(name, age);
// })();

// ====== Spread Operator ()======
// (() => {
//   const numbers1 = [9, 12, 53, 95];
//   const numbers2 = [6, 67, 18, 95, 810];
//   const newNumbers = [...numbers1, ...numbers2];
//   console.log(newNumbers);
// })();

// ====== Primitives vs Reference Values ()======
// (() => {
//   console.log(5 === 5);
//   console.log("Hi" === "Hi");
//   console.log(true === true);
//   console.log([1, 2] === [1, 2]);
//   console.log({ name: "Rustam" } === { name: "Rustam" });
// })();
