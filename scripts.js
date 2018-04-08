
// -------------------- Start variable declaration -------------------------------
var colors = generateRandomColors(6); // Generates random colors equal to the value of the parameter
var square = document.querySelectorAll(".square");
// obtaining a random number lesser or equal than the number of squares.
var colorWinner = colors[randomNumber(square.length)];
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = "";
var body = document.querySelector("body");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// ---------------------- End variable declaration ----------------------------------

// -------------------- Defining functions -------------------------------/
function colorGiver() {
	for (var i = 0; i < colors.length; i++) {
	  // Add initial colors to square
	  square[i].style.backgroundColor = colors[i];

	  // Add event listeners to squares
	  square[i].addEventListener("click", function() {
	  	// grab color of picked square
	  	pickedColor = this.style.backgroundColor;
	  	// See if pickedColor is equal to colorWinner
	  	if (pickedColor === colorWinner) {
	  		messageDisplay.textContent = "Correct!";
	  		changeColors(colorWinner);
	  		h1.style.backgroundColor = colorWinner;
	  		reset.textContent = "Play Again?";
	  	} else {
	  		this.style.backgroundColor = "#232323";
	  		messageDisplay.textContent = "Try Again!";
	  	}


	});
	}
}

function changeColors(color) { // Function that change each square color to match colorWinner.
  for (var i =0; i < square.length; i++) {
  	// change each square color to match colorWinner
  	square[i].style.backgroundColor = color;
  }
}

function randomNumber(max) {
  return Math.floor(Math.random() * max); // Returns random nummber.
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
    for (var i = 0; i < num; i++) {
  	  // add random colors into the array
      arr.push(randomColor());	
    }
	return arr;
}

function randomColor() {
	// Pick a red from 0 to 255.
	var r = randomNumber(256);
	// Pick a green from 0 to 255.
    var g = randomNumber(256);
    // Pick a blue from 0 to 255.
    var b = randomNumber(256);


    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function theReseter(num) { // Resets the game depending of the difficulty.
	colors = generateRandomColors(num); // The paramether will determine the number of squares that will be randomized.
   	colorGiver();
   	colorWinner = colors[randomNumber(num)]; // To have a new colorWinner.
   	colorDisplay.textContent = colorWinner;
   	h1.style.backgroundColor = "steelblue";	
   	messageDisplay.textContent = " ";
   	reset.textContent = "New Colors";
}

// -------------------- End defining functions -------------------------------


// -------------------- Event Listeners -------------------------------
for (i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
	  modeButtons[0].classList.remove("selected");
	  modeButtons[1].classList.remove("selected");
	  this.classList.add("selected");
	  if (this.textContent === "Easy") {
	  	 theReseter(3); //Resets the game with 3 colors.
	  	 console.log(colors);
  		 for (i = 3; i < square.length; i++) {
  	// to have 3 squares for easy difficulty.
  	       square[i].classList.remove("square");
         }
	  } else {
	  	theReseter(6); // Resets the game with 6 colors
	  	for (i = 0; i < square.length; i++) {
		  // to have 6 squares for hard difficulty.
		  square[i].classList.add("square");
		}
	  }
	});
}

reset.addEventListener("click", function() {
  theReseter(colors.length);
});  

// -------------------- End event listeners -------------------------------/

// -------------------- Preliminaries --------------------------------/
colorDisplay.textContent = colorWinner;
modeButtons[1].classList.add("selected");
// -------------------- Function Calls -------------------------------/

randomColor();
colorGiver();

// -------------------- End function calls ---------------------------/