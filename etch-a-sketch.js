//building 16 divs
const container = document.querySelector(".container");
n = 16;
for (let i = 0; i < n; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

