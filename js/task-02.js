const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const itemsArray = [];
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList = "item";
  itemsArray.push(ingredientsEl);
  return ingredientsEl;
});

ingredientList.append(...ingredientItems);
