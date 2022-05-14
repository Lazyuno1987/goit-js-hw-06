const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");
inputEl.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  if (
    Number(event.target.value.length) === Number(inputLength.dataset.length)
  ) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
inputEl.addEventListener("focus", () => {
  inputEl.classList.remove("invalid");
  inputEl.value = "";
});
