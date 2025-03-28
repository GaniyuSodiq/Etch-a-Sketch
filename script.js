const containerFirst = document.querySelector(".containerFirst");
const gridRequestBtn = document.querySelector("#gridRequestBtn");
const removeDiv = document.querySelector("#removeDiv");

// THIS IS NEVER NEEDED 
// let clearGridBtn = document.createElement("button");
// clearGridBtn.textContent = "Clear Grid";
// removeDiv.appendChild(clearGridBtn);

// clearGridBtn.addEventListener("click", () => {
//   // screen.remove();
// })

let screen = document.createElement("div");
screen.setAttribute('id', 'container');

// THE LOADED GRID
for (let i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  for (let j = 1; j <= 16; j++) {
    let row = document.createElement("div");
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "lightgreen"
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
  if (screen != "") {
    // I WAS TRYING TO CALL THIS FROM AN EXTERNAL FUNCTION - ERROR
    // FIGURED ANYTHING THAT WILL REMOVE ANY PART OF THE DOM SHOULD BE CREATED WIT THE PART OF D DOM
    // KUST LIKE CREATING A TODO LIST
    screen.remove();
  }
  // This part made me suffer really hard
  // hmmm 2 whole days of strugling 
  // - i didnt know i had to create the div container each time the grid is ran.
  screen = document.createElement("div");
  screen.setAttribute('id', 'container');

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.addEventListener("mouseover", () => {
          row.style.backgroundColor = "lightgreen"
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
  let userGivenSize = prompt();
  makeGrid(userGivenSize);
})



//   listItemBtn.addEventListener("click", () => {
//     listItem.remove();
// })


