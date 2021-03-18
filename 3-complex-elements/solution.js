let button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  container.append(boxElement);
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  boxElement.append(colorInput);
  colorInput.addEventListener("input", () => {
    boxElement.style.backgroundColor = colorInput.value;
  });
});
