//building 16 divs
const container = document.querySelector(".container");

function makeGrid(size) {
    container.style.width = `${20*size}px`;
    container.style.height = `${20*size}px`;
    for (let i = 0; i < size*size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}
makeGrid(8);

//adding hover effect
function newRound() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "pink";
            //*disappearing boxes feature
            //setTimeout(() => {
            //    box.style.backgroundColor = "white";
            //}, 5000);
        })
    })
}
newRound();

//button to reset board
const reset = document.querySelector("button");
reset.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.remove());
    let answer = prompt("Enter desired board width (in number of boxes:)");
    if (answer <= 100 && answer >= 1) {
        makeGrid(answer);
        newRound();
    } else {
        answer = prompt("Please re-enter an integer width between 1 and 100:");
        makeGrid(answer);
        newRound();
    }
})
