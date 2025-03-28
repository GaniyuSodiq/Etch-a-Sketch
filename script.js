const containerFirst = document.querySelector(".containerFirst");
const gridRequestBtn = document.querySelector("#gridRequestBtn");
const removeDiv = document.querySelector("#removeDiv");

// THE LOADED GRID
let screen = document.createElement("div");
screen.setAttribute('id', 'container');
for (let i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  for (let j = 1; j <= 16; j++) {
    let row = document.createElement("div");
    row.addEventListener("mouseover", () => {
      let randomColor = 
      `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
      row.style.backgroundColor = randomColor;
    })
    row.classList.add("row");
    row.style.border = "1px solid red";
    column.appendChild(row);
  }
  screen.appendChild(column);
}
containerFirst.appendChild(screen);

// THE SUBSEQUENT COMPUTED GRID
function makeGrid(size) {
  if (screen != "") {  screen.remove();  };
  screen = document.createElement("div");
  screen.setAttribute('id', 'container');

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.addEventListener("mouseover", () => {
        let randomColor = 
        `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        row.style.backgroundColor = randomColor;
      })
      row.classList.add("row");
      row.style.border = "1px solid red";
      column.appendChild(row);
    }
    screen.appendChild(column);
  }
  containerFirst.appendChild(screen);
}

gridRequestBtn.addEventListener("click", () => {
  let userGivenSize = prompt(`Type a number between 1-100 for a Grid layout`, "");
  makeGrid(userGivenSize);
})


