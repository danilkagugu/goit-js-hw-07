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
  deleteBoxes();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    divBox.insertAdjacentHTML(
      "beforeend",
      `<div style = "background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    );
    size += 10;
  }
}

function onCreateBox() {
  const amount = input.value;
  if (amount <= 0 || amount > 100) {
    alert("Please, write the correct condition: '1-100' 😊");
    return;
  }
  createBoxes(amount);
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
btnCreate.addEventListener("click", onCreateBox);
btnDestroy.addEventListener("click", deleteBox);
