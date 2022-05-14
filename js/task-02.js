const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);
function creatItems() {
  const listMurkup = ingredients.map((element) => {
    const creatItem = document.createElement("li");
    creatItem.classList.add("item");
    creatItem.textContent = `${element}`;
    return creatItem;
  });
  listIngredients.append(...listMurkup);
}
creatItems();

//   ingredients.map((element) => {
//     const creatItem = document.createElement("li");
//     creatItem.classList.add("item");
//     creatItem.textContent = `${element}`;
//     listIngredients.append(creatItem);
//     //return listIngredients;
// });
