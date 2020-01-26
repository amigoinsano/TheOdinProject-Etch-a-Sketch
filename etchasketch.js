const drawingarea = document.querySelector("#drawingarea");
let randomColor = true;

function createGrid(size) {
    while (drawingarea.firstChild) {
        drawingarea.removeChild(drawingarea.firstChild);
    }
    let style = "";
    for (let i = 0; i < size; i++) {
        style += 100 / size + "% ";
    }
    drawingarea.gridTemplateColumns = style;
    for (let i = 0; i < size * size; i++) {
        const singleBlock = document.createElement("div");
        singleBlock.style.width = 100 / size + "%";
        singleBlock.classList.add("single-block");
        singleBlock.style.opacity = 0.0;
        if (randomColor) {
            singleBlock.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
        } else {
            singleBlock.style.backgroundColor = "black";
        }
        drawingarea.appendChild(singleBlock);
    }

    const blocks = document.querySelectorAll(".single-block");
    blocks.forEach(element => {
        element.addEventListener("mouseenter", function () {
            element.style.opacity = Number(element.style.opacity) + 0.1;
        })
    });
}

function gridPrompt() {
    let size = prompt("What Size?", "16");
    while (isNaN(size)) {
        size = prompt("Please enter a number", "16")
    }
    createGrid(size);
}

function toggleRandomColor() {
    randomColor = !randomColor;
}

createGrid(16);

// grid with css grid
/* let style = "";
for(let i = 0; i < 16; i++){
    style += 100/16 + "% ";
}
drawingarea.gridTemplateColumns = style;
for(let i = 0; i < 16*16; i++){
    const singleBlock = document.createElement("div");
    singleBlock.style.width = 100/16 + "%";
    singleBlock.classList.add("single-block");
    drawingarea.appendChild(singleBlock);
}

const blocks = document.querySelectorAll(".single-block");
blocks.forEach(element => {
    element.addEventListener("mouseenter", function() {
        element.classList.add("single-block-filled");
    })
}); */

// grid with flex box
/* for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row")
    for (let i = 0; i < 16; i++) {
        const singleBlock = document.createElement("div");
        singleBlock.style.width = 100 / 16 + "%";
        singleBlock.style.height = "100%";
        singleBlock.classList.add("col");
        singleBlock.classList.add("single-block");
        row.appendChild(singleBlock);
    }
    drawingarea.appendChild(row);
}*/

// grid with float left
/* for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const singleBlock = document.createElement("div");
        let blockWidth = 100 / 16 + "%";
        singleBlock.style.width = 100 / 16 + "%";
        singleBlock.style.height = 100/16 + "%";
        singleBlock.style.float = "left";
        singleBlock.toggleAttribute("single-block")
        drawingarea.appendChild(singleBlock);
    }
} */

// grid with inline-block
/* for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const singleBlock = document.createElement("div");
        let blockWidth = 100 / 16 + "%";
        singleBlock.style.width = 100 / 16 + "%";
        singleBlock.style.height = 100/16 + "%";
        singleBlock.style.display = "inline-block";
        singleBlock.toggleAttribute("single-block")
        drawingarea.appendChild(singleBlock);
    }
} */