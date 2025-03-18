"use strict";

const decreaseBtn = document.querySelector("#decreasseBtn");
const resetBtn = document.querySelector("#resetBtn");
const increaseBtn = document.querySelector("#increaseBtn");
const countLabel = document.querySelector("#countLabel");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  count--;
  countLabel.textContent = count;
});

increaseBtn.addEventListener("click", () => {
  count++;
  countLabel.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countLabel.textContent = count;
});
