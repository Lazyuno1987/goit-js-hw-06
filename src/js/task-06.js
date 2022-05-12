const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.dataset.length;
inputEl.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  if (Number(event.currentTarget.value.length) === Number(inputLength)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
