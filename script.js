// DOM variables
const squareDivContainer = document.querySelector("#grid-container");
const buttonContainer = document.querySelector("#button-container");
const clearButton = document.createElement("button");
let squareDiv = [];

// Add functionality to clear button and add to page
buttonContainer.appendChild(clearButton);
clearButton.addEventListener("click", userInput);

// Function to get new grid size from user
function userInput() {
  let gridSize = prompt("How many squares per side should your grid have?");
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
  squareDivContainer.style.cssText = `display: grid; 
      grid: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr); height: 450px; width: 450px`;
  // Assign column and row numbers to each of the squares
  for (let column = 1; column <= gridSize; column++) {
    for (let row = 1; row <= gridSize; row++) {
      // Stylize each of the squares
      let sqNmbr = row + gridSize * (column - 1);
      squareDiv[sqNmbr].style.cssText = `grid-column: ${column}; 
        grid-row: ${row}; border: 1px solid black`;
      console.log(squareDiv[sqNmbr]);
      squareDiv[sqNmbr].setAttribute("class", "square-div");
      // Append the squares to the parent div container
      squareDivContainer.appendChild(squareDiv[sqNmbr]);
    }
    gridBackground();
  }

}

// Add hover effect to square divs
function gridBackground() {
  const squareDivs = document.querySelectorAll(".square-div");
  squareDivs.forEach(function(square) {
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "blue";
    })
    square.addEventListener("click", function () {
      square.style.backgroundColor = "white";
    })
  })
}


