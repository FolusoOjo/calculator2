let display = document.getElementById("display");
let historyArray = [];

//A SHORTER METHOD TO SOLVING THE PROBLEM
const addNumToDisplay = (value) => {
  display.innerText = display.innerText + value;
};

const sumDisplay = () => {
  historyArray.push(display.innerText);
  display.innerText = eval(display.innerText);
  historyArray.push(eval(display.innerText));
};

const clearDisplay = () => {
  display.innerText = "";
};

const displayHistory = () => {
  display.innerText = historyArray;
};

const sqrt = () => {
  display.innerText = Math.sqrt(display.innerText);
};

const square = () => {
  display.innerText = display.innerText ** 2;
};

// A LONGER METHOD TO SOLVING THE PROBLEM
// let arrayHis = [];

// nine.addEventListener("click", () => {
//   display.innerText += nine.innerText;
// });

// eight.addEventListener("click", () => {
//   display.innerText += eight.innerText;
// });

// seven.addEventListener("click", () => {
//   display.innerText += seven.innerText;
// });

// six.addEventListener("click", () => {
//   display.innerText += six.innerText;
// });

// five.addEventListener("click", () => {
//   display.innerText += five.innerText;
// });

// four.addEventListener("click", () => {
//   display.innerText += four.innerText;
// });

// three.addEventListener("click", () => {
//   display.innerText += three.innerText;
// });

// two.addEventListener("click", () => {
//   display.innerText += two.innerText;
// });

// one.addEventListener("click", () => {
//   display.innerText += one.innerText;
// });

// zero.addEventListener("click", () => {
//   display.innerText += zero.innerText;
// });

// minus.addEventListener("click", () => {
//   display.innerText += minus.innerText;
// });

// add.addEventListener("click", () => {
//   display.innerText += add.innerText;
// });

// divide.addEventListener("click", () => {
//   display.innerText += divide.innerText;
// });

// percentage.addEventListener("click", () => {
//   display.innerText += percentage.innerText;
// });

// del.addEventListener("click", () => {
//   display.innerText = " ";
// });

// equal.addEventListener("click", () => {
//   let ans = eval(display.innerText);
//   arrayHis.push(ans);
//   display.innerText = ans;
// });

// hist.addEventListener("click", () => {
//   display.innerText = arrayHis;
// });
