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

// ====== Undefined and null ()======
// (() => {
//   let number;
//   console.log(number);
//   const data = {
//     city: "Prague",
//     street: "Main Street",
//     month: "June",
//   };
//   console.log(data.temperature);

//   let name = null;
//   console.log(name);
// })();

// ====== Short Circuting with && and || ()======
// (() => {
//   // short-circuiting with &&
//   const price = 1000;
//   if (price > 500 && price < 1500) {
//     console.log("Price is between Acceptable range");
//   } else {
//     console.log("Price is not in the range");
//   }
//   price > 500 && console.log("Short circuting with && operator");

//   // short-circuiting with ||
//   const price2 = 500;

//   price2 > 3000 ||
//     console.log(
//       "Short circuting with || operator, it;s oposite of && operator"
//     );
// })();

// ====== Fetch API With Async Await ()======
// old way(.then)
// (() => {
//   const btnEl = document.querySelector(".btn");
//   const clickHandler = () => {
//     fetch("https://reqres.in/api/users")
//       .then((response) => {
//         if (!response.ok) {
//           console.log("There is an error occured");
//           return;
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data.data[4].email);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   btnEl.addEventListener("click", clickHandler);
// })();
// New Way(async await)
// (() => {
//   const btnEl = document.querySelector(".btn");
//   const clickHandler = async () => {
//     try {
//       const res = await fetch("https://reqres.in/api/users");
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.description);
//         return;
//       }
//       console.log(data.data[3].email);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   btnEl.addEventListener("click", clickHandler);
// })();
//Submit  data:
// (() => {
//   const btnEl2 = document.querySelector(".btn2");
//   const newUser = {
//     name: "Romeo",
//     job: "Developer",
//   };
//   const clickHandler = async () => {
//     try {
//       const res = await fetch("https://reqres.in/api/users", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.description);
//         return;
//       }
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   btnEl2.addEventListener("click", clickHandler);
// })();

// ====== ES Modules(import / export) ()======
// (() => {
//   import { convertCurrency, BASE_API_URL } from "./utilities.js";
//   import whatEverIwantCanWriteInHere from "./utilities.js";
// })();
// (() => {
//   import convertCurrency, { BASE_API_URL } from "./utilities.js";

//   const euroAmount = convertCurrency(100);
//   console.log(euroAmount);

//   // fetch(`${BASE_API_URL}/books/4`);
// })();

// ====== File Paths ()======
// (() => {
//   import calculatePrice from "../utilities.js";
// })();

// ====== Other Loops (While & for of) ()======
//-- forEach()==-------
// (() => {
//   const numbers = [5, 10, 15];

//   numbers.forEach((numbers) => {
//     console.log(numbers);
//   });
// })();
//-- for()=-----
// (() => {
//   for (let i = -2; i < 5; i++) {
//     console.log(i);
//   }
// })();
//-- while()=-----
// (() => {
//   let i = 0;
//   while (i < 3) {
//     console.log(
//       "This Hello world will be shows at least 3 times, as each time it increments +1"
//     );
//     i++;
//   }
// })();
// for of()
// (() => {
//   const text = 'this is "for of" loop';
//   for (const character of text) {
//     console.log(character);
//   }
// })();

// ====== Switch Statement ()======
// Switch
// (() => {
//   const browser = "DuckDuckGo";
//   switch (browser) {
//     case "DuckDuckGo":
//       console.log("You are using DuckDuckGo");
//       break;
//     case "Opera":
//       console.log("You are using Opera");
//       break;
//     case "Chrome":
//       console.log("You are using Chrome");
//       break;
//   }
// })();

// ====== Window Object()======
// (() => {
//   window.document;
//   console.log(window.document);
// })();

// ====== Match()======
// (() => {
//   Math.floor(5.95);
//   console.log(Math.floor(5.025));
//   console.log(Math.ceil(5.025));
//   const RandomNumber = Math.random() * 1000;
//   console.log(RandomNumber);
// })();

// ====== DATE ()======
// (() => {
//   const date = new Date(2050, 11, 26);
//   console.log(date);
//   console.log(date.getFullYear());
//   console.log(date.getMonth());
//   date.setFullYear(2027);
//   console.log(date);
// })();

// ====== OOP(Object Oriented Programming) Programming in JavaScript ()======
// (() => {
//   // const apartment1 = {
//   //   sqMeters: 24,
//   //   numberOfRooms: 1,
//   //   isBig: function () {
//   //     return this.sqMeters > 65 ? true : false;
//   //   },
//   //   calculatePrice: function () {
//   //     return this.sqMeters * numberOfRooms;
//   //   },
//   // };

//   // const apartment2 = {
//   //   sqMeters: 73,
//   //   numberOfRooms: 3,
//   //   isBig: function () {
//   //     return this.sqMeters > 65 ? true : false;
//   //   },
//   //   calculatePrice: function () {
//   //     return this.sqMeters * numberOfRooms;
//   //   },
//   // };

//   // console.log(apartment1.sqMeters);
//   // console.log(apartment1.numberOfRooms);
//   // console.log(apartment1.isBig());
//   class Apartment {
//     constructor(sqMeters, purchasePriceInCzk) {
//       this.sqMeters = sqMeters;
//       this.purchasePriceInCzk = purchasePriceInCzk;
//     }
//     PricePerSqM() {
//       return this.purchasePriceInCzk / this.sqMeters;
//     }
//     calculatePrice() {
//       return this.sqMeters * this.purchasePriceInCzk;
//     }
//   }
//   const apartment1 = new Apartment(24, 3350000);
//   const apartment2 = new Apartment(68, 2050000);

//   console.log(
//     apartment1,
//     apartment1.PricePerSqM(),
//     apartment2,
//     apartment2.PricePerSqM()
//   );
// })();

// ====== Promises ()======
// Create a promise
(() => {
  // const p = new Promise();
  // const p2 = new Promise();
  // const p3 = new Promise();
  // const pNew = new Promise((resolve, reject) => {
  //   const numberOfCustomers = 6;
  //   if (numberOfCustomers > 5) {
  //     resolve("Success"); // fulfilled with value
  //   } else {
  //     reject("Failure"); //failure with reason
  //   }
  // });
  // Consume a promise with .then() and .catch()
  // pNew
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .catch((reason) => {
  //     console.log(reason);
  //   });
  // Consume a promise with async/await & try/catch
  // const checkResults = async () => {
  //   try {
  //     const value = await pNew;
  //     console.log(value);
  //   } catch (reason) {
  //     console.log(reason);
  //   }
  // };
  // checkResults();
  // Why &Where use promises in web development
  // const a = 1;
  // const b = 2;
  // const c = 3;

  // Fetcj API (mpst common example of promises)
  // fetch("https://reqres.in/api/users")
  //   .then((response) => {
  //     if (!response.ok) {
  //       console.log("Something went wrong");
  //       return;
  //     }
  //     return response.json();
  //     // console.log(response);
  //   })
  //   .then((data) => {
  //     for (let i = 0; i < 5; i++) {
  //       console.log(data.data[i].first_name, data.data[i].email);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("Error", error);
  //   });

  // Promise.all
  // Promise.all([
  //   fetchPhotoPromise,
  //   fetchCommentsPromise
  // ]).then(value => {
  //   // Render post
  // })
  // =-Promise.any
  promise
    .any([fetchPhotoServer1Promise, fetchPhotoServer2Promise])
    .then((value) => {
      // do something;
    });
})();
//
//
//
//
//

(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();

// ====== ()======
(() => {})();
