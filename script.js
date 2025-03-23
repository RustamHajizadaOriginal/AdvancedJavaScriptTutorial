//--VS Code Shortcusts
// FOR MORE - https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

// ====== Arrays()======
const numbersEl = [25, 50, 100, 200, 400];
// push()
numbersEl.push(5);
console.log(numbersEl);
// forEach()
numbersEl.forEach((nr) => {
  console.log(nr + 10);
});
// map()
const newNumbers = numbersEl.map((nr2) => {
  return nr2 * 2;
});
console.log(newNumbers);
// some()
const resultOfSome = numbersEl.some((numb) => {
  return numb >= 400;
});
console.log(resultOfSome);
// find()
const resultOfFind = numbersEl.find((number) => {
  return number >= 400;
});
console.log(resultOfFind);
// filter()
const newNumbersFilter = numbersEl.filter((numbersFilter) => {
  return numbersFilter >= 100;
});
console.log(newNumbersFilter);
