const counterValue = document.querySelector("#value");
let newValue = 0;

const buttonUp = document.querySelector('button[ data-action= "increment"]');
const buttonDown = document.querySelector('button[data-action ="decrement"]');
buttonUp.addEventListener('click', onButtonUpClick);
buttonDown.addEventListener('click', onButtonDownClick);

function onButtonUpClick() {
    newValue +=1;
    counterValue.textContent = newValue;
};

function onButtonDownClick() {
  newValue -= 1;
  counterValue.textContent = newValue;
}

