var numberOfSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquare = 3 : numberOfSquare = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click lsiteners to quares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare square colour to picked colour
            if (pickedColor === clickedColor) {
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?"
                changeColour(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}

function reset() {
    //generate new colors
    colors = generateRansomColors(numberOfSquare);
    //pick a new random color from array
    pickedColor = pickColor();
    //cahnge colorDisplay to mach 
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //chang colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColour(color) {
    //loop though all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRansomColors(num) {
    //make an aray
    var arr = []
    //add num colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}