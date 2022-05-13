function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divEl = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector(" button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const newDivBoxEl = document.querySelector("#boxes");
buttonCreateEl.addEventListener("click", amountItem);
buttonDestroyEl.addEventListener("click", destroyBoxes);

function amountItem() {
  const amount = inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBoxes = document.createElement("div");
    newBoxes.style.width = `${boxSize + i * 10}px`;
    newBoxes.style.height = `${boxSize + i * 10}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    newDivBoxEl.appendChild(newBoxes);
  }
}

function destroyBoxes() {
  newDivBoxEl.innerHTML = "";
  inputEl.value = 0;
}
