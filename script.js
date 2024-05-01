const gridContainer = document.querySelector('.gridContainer');

// On load, it creates a grid with a default number of 16
window.addEventListener('load', gridCreation);

// Creates game grid
function gridCreation(event) {
    if (event.type === 'load') {
        const number = 16;
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
}

