const liElement = document.querySelectorAll(".item");
console.log(`Number of categories: ${liElement.length}`);
liElement.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
