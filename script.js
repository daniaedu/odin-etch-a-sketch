const gridContainer = document.querySelector('.gridContainer');

// Creates a grid based on number (if number = 8, then creates 8x8 grid)
function gridCreation(number) {
    for (let row = 0; row < number; row++) {
        for (let col = 0; col < number; col++) {
            const flexBasis = 100 / number;
            const gridCell = document.createElement("div")
            gridCell.classList.add('gridCell');
            gridCell.style.flex = `0 0 ${flexBasis}%`;
            gridContainer.appendChild(gridCell);
        }
    }
}

