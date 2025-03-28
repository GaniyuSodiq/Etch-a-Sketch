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
        `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*10) / 10})`;
        console.log(randomColor);
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
  // if (!Number.isInteger(userGivenSize)) {
  //   alert("ERROR: You must give a number between 1 and 100");
  // } else {
  //   makeGrid(userGivenSize);
  // }

  // if (typeof userGivenSize === Number){
  //   makeGrid(userGivenSize);
  // } else {alert("ERROR: You must give a number between 1 and 100");
  // };
})


