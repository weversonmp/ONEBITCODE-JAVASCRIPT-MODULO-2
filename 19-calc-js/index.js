const input = document.querySelector("#input");
let isResult = ''

const numericButtons = document.querySelectorAll(".charKey")
  .forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      input.value += btn.dataset.value;
    })
  })
;

const clearButton = document.querySelector("#clear")
  .addEventListener("click", (ev) => {
    ev.preventDefault();
    console.log();
    if (isResult == input.value) {
      input.value = '';
    } else {
      input.value = input.value.slice(0, -1);
    }
  })
;

const equalButton = document.querySelector("#equal")
  .addEventListener('click', (ev) => {
    ev.preventDefault();
    isResult = eval(input.value);
    input.value = isResult;
    input.focus();
  })
;