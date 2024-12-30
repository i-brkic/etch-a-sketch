const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  container.appendChild(row);
  for (let j = 1; j <= 16; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.border = "1px solid black";
    gridSquare.style.height = "5vh";
    gridSquare.style.width = "5vw";
    row.appendChild(gridSquare);
  }
}
