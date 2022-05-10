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
ingredients.map((element) => {
  const creatItem = document.createElement("li");
  creatItem.className = "item";
  const creatName = document.createElement("p");
  creatName.textContent = `${element}`;
  creatItem.append(creatName);
  listIngredients.append(creatItem);
  return listIngredients;
});
