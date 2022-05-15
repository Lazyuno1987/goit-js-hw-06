const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");
inputEl.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  if (
    Number(event.target.value.length) === Number(inputLength.dataset.length)
  ) {
    inputEl.classList.add("valid");
    console.log(inputEl.classList.contains('valid') )
  } else {
    inputEl.classList.add("invalid");
     console.log(inputEl.classList.contains('invalid') )
  }
}


inputEl.addEventListener("focus", () => {
  if (inputEl.classList.contains('invalid') === true) {
  inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
  }
  
});
