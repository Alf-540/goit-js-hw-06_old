const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const outputText = output.textContent;

const onInputChange = (event) =>
  event.currentTarget.value !== ""
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = outputText);

input.addEventListener("input", onInputChange);
