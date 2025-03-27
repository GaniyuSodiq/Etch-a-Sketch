// let containerBox = document.querySelector("#container");

// for (let i =1; i <= 16; i++){
//     for (let j = 1; j <= 16; j++){
//         const divBox = document.createElement("div");
//         divBox.addEventListener("mouseover", () => {
//             divBox.style.backgroundColor = "lightgreen"
//         })
//         containerBox.appendChild(divBox);
//     }
// }


function makeGrids(size) {
    let screen = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
        // column.addEventListener("mouseover", () => {
        //     column.style.backgroundColor = "lightgreen"
        // })
    //   column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "lightgreen"
        })
        // row.classList.add("row");
        row.style.border = "2px solid black";
        row.innerText = (i * size) + j;
        column.appendChild(row);
      }
      screen.appendChild(column);
    }
  }
  
  makeGrids(16);