const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
  const textName = nameInput.value.trim();
  nameOutput.textContent = textName || "Anonymous";
});
