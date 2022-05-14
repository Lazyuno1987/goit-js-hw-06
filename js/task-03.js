const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listGalery = document.querySelector(".gallery");
console.log(listGalery);
const creatItem = images
  .map(
    ({ url, alt }) =>
      `<li class ="item-gallery"><img class = "img-gallery" src = ${url} alt = "${alt}" width = 100% /></li>`
  )
  .join("");

listGalery.insertAdjacentHTML("afterbegin", creatItem);
listGalery.style.display = "flex";
listGalery.style.listStyle = "none";
listGalery.childNodes[1].style.marginRight = "15px";
listGalery.childNodes[1].style.marginLeft = "15px";
