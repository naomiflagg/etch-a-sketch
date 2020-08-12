// DOM variables
const squareDivContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button");
const colorButton = document.querySelector("#color-button");
let colorful = false;
let squareDiv = [];

// Add event listener to clear button
clearButton.addEventListener("click", userInput);

// Add event listener to color button
colorButton.addEventListener("click", hoverColor);

// Function to get new grid size from user
function userInput() {
  let gridSize = 1;
  while (gridSize < 2 || gridSize > 50) {
    gridSize = prompt("How many squares per side would you like your grid to have? Maximum of 50.");
  }
  createChildDivs(gridSize);
}

// Function to create new grid based on user size selection
function createChildDivs(gridSize) {
  for (let i = 1; i <= (gridSize * gridSize); i++) {
  squareDiv[i] = document.createElement("div");
  }
  newGrid(gridSize)
}

// Create grid of square divs within div container using CSS Grid
function newGrid(gridSize) {
  // Set parent style as grid
  removeAllChildNodes(squareDivContainer);
  squareDivContainer.style.grid = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
  // Assign column and row numbers to each of the squares
  for (let column = 1; column <= gridSize; column++) {
    for (let row = 1; row <= gridSize; row++) {
      // Stylize each of the squares
      let sqNmbr = row + gridSize * (column - 1);
      squareDiv[sqNmbr].style.cssText = `grid-column: ${column}; 
        grid-row: ${row}; border: 1px solid #E5EAF5; background-color: white`;
      squareDiv[sqNmbr].setAttribute("class", "square-div");
      // Append the squares to the parent div container
      squareDivContainer.appendChild(squareDiv[sqNmbr]);
    }
    hoverColor();
  }
}

// Add hover effect to square divs
function hoverColor() {
  colorful = !colorful;
  const squareDivs = document.querySelectorAll(".square-div");
  squareDivs.forEach(function(square) {
    square.addEventListener("mouseover", function () {
      if (colorful) {
        square.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        colorButton.textContent = "Greyscale";
      }
      else {
        colorButton.textContent = "Make it colorful!";
        square.style.backgroundColor = "grey";
      }
    })
    square.addEventListener("click", function () {
      square.style.backgroundColor = "white";
    })
  })
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

createChildDivs(8); // Create default grid

