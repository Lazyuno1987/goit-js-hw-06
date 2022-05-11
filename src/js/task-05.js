
const inputNameEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");
console.log(inputNameEl);
console.log(spanNameEl);
inputNameEl.addEventListener('input', onWriteInput);
function onWriteInput(event) {
    if (event.currentTarget.value === "") {
        spanNameEl.textContent = "Anonymus"
    } else {
        spanNameEl.textContent = event.currentTarget.value;
    }
};