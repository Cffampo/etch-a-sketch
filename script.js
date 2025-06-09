const container = document.querySelector(".container");


for(let i = 0; i < 256; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");

    newDiv.addEventListener("mouseover", () =>{
    newDiv.style.backgroundColor = "black";
    });

    container.appendChild(newDiv);
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () =>{
    const userInput = prompt("Enter number of sides per square (max 100): ");
    const num = Number(userInput);

    if(num > 100 || isNaN(num)){
        alert("Please enter a number 100 or less");
        return;
    } else if (num <= 0){
        alert("Please enter a number greater than 0");
        return;
    }

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    const squareSize = 640 / num;

    for(let i = 0; i < num * num; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDiv");
        newDiv.style.height = squareSize + "px";
        newDiv.style.width = squareSize + "px";

        newDiv.addEventListener("mouseover", () =>{
        newDiv.style.backgroundColor = "black";
        });

    container.appendChild(newDiv);
    }
});
