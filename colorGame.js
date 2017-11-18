var numSquares = 6;
var colors = generateRandomColors(numSquares);
// Selecting all square class from html
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //color rgb 0, 255, 0 is our starter color
var colorDisplay = document.getElementById("colorDisplay"); //In h1 span
var messageDisplay = document.querySelector(".message"); //try again/correct span
var h1 =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numSquares = 3;


  // generate new colors to reset game or reset colors
  colors = generateRandomColors(numSquares);
  // pick a new color from array
  pickedColor = pickColor();
  // change colors of squares
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
  } else {
  squares[i].style.display = "none";
   }
 }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
	//change colors of squares
  messageDisplay.textContent = ""; //displays nothing whengame resets(no play again or correct)
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

// selecting our picked content to show up next to rgb in h1
colorDisplay.textContent = pickedColor;
// looping through our sqares for each individual square
// and MANIPULATINF their color: prints out the color array and assigns each to one square
for (var i = 0; i < squares.length; i++) {

    // backgroundColor makes it work in all browsers
    squares[i].style.background = colors[i];

    // add click listener to squares variable
    squares[i].addEventListener("click", function() {
                clickedColor = this.style.background;

                // compare clicked color to pickedColor
                if (clickedColor === pickedColor) {
                  messageDisplay.textContent = "Correct!";
                  resetButton.textContent = "Play Again"
                  changeColors(clickedColor);
                  h1.style.background = clickedColor;
                } else {
                    this.style.background = "#232323";
                    messageDisplay.textContent = "Try Again";
    }

  });
}

function changeColors(color) {
  // creating a loop to change ALL Colors to one color when right color is clicked
  for(var i = 0; i < squares.length; i++) {
  //change each color to match given color
  squares[i].style.background = color;
  }
}
// math.random generates a # bt 0 and 1. Multiply by any number + 1 to generate the number you want.
// Then use math.floor to round the number to the nearest
function pickColor() {

   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to arr
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  // picked a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
