let button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  container.append(boxElement);
  boxElement.addEventListener("click", () => {
    let confirmation = confirm("Are you sure you want to remove this box?");
    if (confirmation) {
      boxElement.remove();
    }
  });
});
