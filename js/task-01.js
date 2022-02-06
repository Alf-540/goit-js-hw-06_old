const allCategoriesEl = document.querySelectorAll("ul#categories li.item");
const numberOfCategoriesEl = allCategoriesEl.length;
console.log("Number of categories:", numberOfCategoriesEl);
console.log("");

allCategoriesEl.forEach((element) => {
  const headerTextEl = element.firstElementChild.textContent;
  console.log("Category:", headerTextEl);
  const numberOfEl = element.querySelectorAll("li").length;
  console.log("Elements:", numberOfEl);
  console.log("");
});
