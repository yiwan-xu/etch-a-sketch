//building 16 divs
const container = document.querySelector(".container");

function makeGrid(size) {
    container.style.width = `${20*size}px`;
    for (let i = 0; i < size*size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}
makeGrid(8);

//adding hover effect
const boxes = document.querySelectorAll(".box")
boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "pink";
        setTimeout(() => {
            box.style.backgroundColor = "white";
        }, 5000);
    })
})

//function to reset board
//function resetBoard()