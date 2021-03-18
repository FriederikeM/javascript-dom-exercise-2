let button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  container.append(boxElement);
});
