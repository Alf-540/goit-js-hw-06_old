let counterValue = 0;
const value = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
