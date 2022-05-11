const moveInputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
moveInputEl.addEventListener('input', onValueInput);

function onValueInput(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
    
}