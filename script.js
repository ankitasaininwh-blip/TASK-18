const heading = document.getElementById("heading");
const nameInput = document.getElementById("name");
const greetBtn = document.getElementById("greetBtn");

const redBox = document.getElementById("red");
const blueBox = document.getElementById("blue");
const greenBox = document.getElementById("green");
const yellowBox = document.getElementById("yellow");

// Greeting button
greetBtn.addEventListener("click", function () {
    let name = nameInput.value;

    if (name.trim() !== "") {
        heading.textContent = "Hello, " + name;
    }
});

// Red box
redBox.addEventListener("click", function () {
    redBox.style.backgroundColor = "red";
    redBox.style.color = "white";
});

// Blue box
blueBox.addEventListener("click", function () {
    blueBox.style.backgroundColor = "blue";
    blueBox.style.color = "white";
});

// Green box
greenBox.addEventListener("click", function () {
    greenBox.style.backgroundColor = "green";
    greenBox.style.color = "white";
});

// Yellow box
yellowBox.addEventListener("click", function () {
    yellowBox.style.backgroundColor = "yellow";
    yellowBox.style.color = "black";
});