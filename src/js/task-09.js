function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const fonColore = document.querySelector("body");

const buttonChange = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonChange.addEventListener("click", onChangeColor);

function onChangeColor() {
  fonColore.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
