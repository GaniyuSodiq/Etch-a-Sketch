let containerBox = document.querySelector("#container");

for (let i =1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        const divBox = document.createElement("div");
        containerBox.appendChild(divBox);
    }
}

