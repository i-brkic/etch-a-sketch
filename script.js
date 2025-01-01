let oldGrid = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  oldGrid.appendChild(row);

  for (let j = 1; j <= 16; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.border = "1px solid black";
    gridSquare.style.height = "5vh";
    gridSquare.style.width = "5vw";
    row.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", function () {
      gridSquare.style.backgroundColor = "red";
    });
  }
}

const button = document.querySelector("button");
const body = document.querySelector("body");

function createNewGrid() {
  const newGrid = document.createElement("div");
  newGrid.classList.add("newgrid");
  newGrid.style.border = "1px solid black";
  newGrid.style.display = "flex";
  newGrid.style.flexWrap = "wrap";
  newGrid.style.height = "80vh";
  newGrid.style.width = "80vw";
  body.appendChild(newGrid);
  return newGrid;
}

function generateGrid(number, newGrid) {
  const squareSize = 100 / number;

  for (let i = 1; i <= number * number; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.border = "1px solid black";
    gridSquare.style.flex = `0 0 ${squareSize}%`;
    gridSquare.style.height = "auto";
    gridSquare.style.backgroundColor = "white";
    newGrid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", function () {
      gridSquare.style.backgroundColor = "red";
    });
  }
}

button.addEventListener("click", function () {
  const numberOfSquares = prompt(
    "Please choose the number of squares per side for the new grid"
  );
  if (isNaN(parseInt(numberOfSquares))) {
    alert("Please enter a valid number which is not higher than 100!");
  } else if (parseInt(numberOfSquares) > 100) {
    alert("Please enter a number which is not higher than 100!");
  } else {
    oldGrid.remove();

    oldGrid = createNewGrid();

    generateGrid(parseInt(numberOfSquares), oldGrid);
  }
});
