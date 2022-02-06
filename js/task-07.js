const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = fontSizeControl.value + "px";

const sizeControlHandler = (event) =>
  (text.style.fontSize = event.currentTarget.value + "px");

fontSizeControl.addEventListener("input", sizeControlHandler);
