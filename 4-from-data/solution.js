let button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = "lightgreen";
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = "lightseagreen";
  container.append(box);
  container.append(circle);
  container.append(box.cloneNode(true));
  container.append(circle.cloneNode(true));
});

button.addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = "lightgreen";
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = "lightseagreen";
    container.append(box);
    container.append(circle);
  }
});
