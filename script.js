// Element variables
const gridContainer = document.querySelector('.gridContainer');
const buttonContainer = document.querySelector('.buttonContainer');
const standardButton = document.querySelector('.standardButton');
const rainbowButton = document.querySelector('.rainbowButton');
const eraserButton = document.querySelector('.eraserButton');
const resetButton = document.querySelector('.resetButton');

// Event handlers 
window.addEventListener('load', gridCreation);
buttonContainer.addEventListener('click', addActiveClass);

// Creates game grid
function gridCreation(event) {
    if (event.type === 'load') {
        const number = 16;
        for (let row = 0; row < number; row++) {
            for (let col = 0; col < number; col++) {
                const flexBasis = 100 / number;
                const gridCell = document.createElement('div')
                gridCell.classList.add('gridCell');
                gridCell.style.flex = `0 0 ${flexBasis}%`;
                gridContainer.appendChild(gridCell);
            }
        }
    }
}

// Adds "active" class when button is clicked and removes "active" class from non-clicked buttons
function addActiveClass(event) {
    if (event.target.classList.contains('standardButton')) {
        standardButton.classList.add('active');
        rainbowButton.classList.toggle('active', false);
        eraserButton.classList.toggle('active', false);
        resetButton.classList.toggle('active', false);
    }
    else if (event.target.classList.contains('rainbowButton')) {
        rainbowButton.classList.add('active');
        standardButton.classList.toggle('active', false);
        eraserButton.classList.toggle('active', false);
        resetButton.classList.toggle('active', false);
    }
    else if (event.target.classList.contains('eraserButton')) {
        eraserButton.classList.add('active');
        standardButton.classList.toggle('active', false);
        rainbowButton.classList.toggle('active', false);
        resetButton.classList.toggle('active', false);

    }
    else if (event.target.classList.contains('resetButton')) {
        resetButton.classList.add('active');
        standardButton.classList.toggle('active', false);
        rainbowButton.classList.toggle('active', false);
        eraserButton.classList.toggle('active', false);
    }
    else {
        return;
    }
}