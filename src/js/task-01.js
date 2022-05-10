const listCategories = document.querySelector("#categories");
console.log("Number of categories:", listCategories.children.length);
const categorieName = document.querySelectorAll(".item");

categorieName.forEach((categorieName) =>
  console.log(
    `Category: ${categorieName.firstElementChild.textContent} \n Elements: ${
      categorieName.querySelectorAll("li").length
    }`
  )
);

// const categorieName = document.querySelectorAll(".item");
// for (let elem of categorieName) {

//     const nameCategory = document.querySelector
//         ("h2")
//     console.log("Category:", nameCategory.textContent);
//     const lengthItem = elem.querySelectorAll("li").length;
//     console.log("Elements:", lengthItem)
// }
