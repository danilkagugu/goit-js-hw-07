const divBox = document.querySelector("#boxes");
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const inputNum = parseInt(input.value);
  if (inputNum <= 0 || inputNum > 100) {
    alert("Please, write the correct condition: '1-100' 😊");
    return;
  }
  deleteBoxes();
  let size = 30;
  for (let i = 0; i < inputNum; i += 1) {
    divBox.insertAdjacentHTML(
      "beforeend",
      `<div style = "background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    );
    size += 10;
  }
  input.value = "";
}

function deleteBoxes() {
  while (divBox.firstChild) {
    divBox.firstChild.remove();
  }
}

function deleteBox() {
  deleteBoxes();
  input.value = "";
}
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", deleteBox);
