const input = document.querySelector("#validation-input");

const onFocusHandler = (event) => {
  const removeClasses = () => {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.remove("valid");
  };

  if (event.currentTarget.value.length.toString() === input.dataset.length) {
    removeClasses();
    event.currentTarget.classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
    removeClasses();
  } else {
    removeClasses();
    event.currentTarget.classList.add("invalid");
  }
};

input.addEventListener("blur", onFocusHandler);
