var playerChoice;
var computerChoice;
var msg = ' ';
var rockImg = new p5.Image(600, 553);
var paperImg = new p5.Image(2400, 2345);
var scissorsImg = new p5.Image(1645, 2339);
var Switch;
var start = true;
var playerImage;
var computerImage;

function preload() {
	soundFormats('mp3');
	putin = loadSound("assets/putin.mp3");
	rockImg = loadImage("assets/republic.png");
	scissorsImg = loadImage("assets/democrats.png");
	paperImg =  loadImage("assets/putin.png");
	computerRandom = Math.floor(Math.random() * 3);
	if (computerRandom == 0) {
		computerChoice = "rock"
		console.log("c " + computerChoice)
	} else if (computerRandom == 1) {
		computerChoice = "paper"
		console.log("c " + computerChoice)
	} else if (computerRandom == 2) {
		computerChoice = "scissors"
		console.log("c " + computerChoice)
	}
}
function setup() {
	var canvas = createCanvas(800, 400);
	canvas.parent('sketch');
	putin.setVolume(.9);
	putin.play();
	putin.jump(52.5);
	textAlign(CENTER)
}
function draw() {
	background(0, 0, 0);

	if (start == true) {
		startGame();
	} else {

	}
	if (Switch == true) {
		result();
	}

}

function result() {
	// Rock
	if (computerChoice == "rock" && playerChoice == "paper") {
		msg = "Player"
		image(paperImg, 30, 150, 250, 250);
		image(rockImg, 500, 150, 250, 250);
		fill(255, 0, 0);
		text("Please, Russia controls the U.S. No arguments here.", 400, 70);
	} else if (computerChoice == "rock" && playerChoice == "scissors") {
		msg = "Computer"
		image(scissorsImg, 30, 150, 250, 250);
		image(rockImg, 500, 150, 250, 250);
		fill(0, 255, 0);
		text("Republicans control the senate, Sorry hipsters.", 400, 70);
	} else if (computerChoice == "rock" && playerChoice == "rock") {
		msg = "No one"
		image(rockImg, 30, 150, 250, 250);
		image(rockImg, 500, 150, 250, 250);
		fill(108, 108, 108);
		text("Republicans can't stand each other without talking about AR-15's.", 400, 70);
	}
	//Paper
	if (computerChoice == "paper" && playerChoice == "paper") {
		msg = "No one"
		image(paperImg, 30, 150, 250, 250);
		image(paperImg, 500, 150, 250, 250);
		fill(255, 150, 150);
		text("Putin cancels out Putin.", 400, 70);
	} else if (computerChoice == "paper" && playerChoice == "scissors") {
		msg = "Player"
		image(scissorsImg, 30, 150, 250, 250);
		image(paperImg, 500, 150, 250, 250);
		fill(0,255,255);
		text("Democrats would never let Putin touch them. Makes sense, right?", 400, 70);
	} else if (computerChoice == "paper" && playerChoice == "rock") {
		msg = "Computer"
		image(rockImg, 30, 150, 250, 250);
		image(paperImg, 500, 150, 250, 250);
		fill(255, 0, 0);
		text("Please, Russia controls the U.S. No arguments here.", 400, 70);
	}
	//Scissors 
	if (computerChoice == "scissors" && playerChoice == "paper") {
		msg = "Computer"
		image(paperImg, 30, 150, 250, 250);
		image(scissorsImg, 500, 150, 250, 250);
		fill(199, 199, 0);
		text("Democrats would never let Putin touch them. Makes sense, right?", 400, 70);
	} else if (computerChoice == "scissors" && playerChoice == "scissors") {
		msg = "No one"
		image(scissorsImg, 30, 150, 250, 250);
		image(scissorsImg, 500, 150, 250, 250);
		fill(0,255,255);
		text("Democrats are chill.", 400, 70);
	} else if (computerChoice == "scissors" && playerChoice == "rock") {
		msg = "Player"
		image(rockImg, 30, 150, 250, 250);
		image(scissorsImg, 500, 150, 250, 250);
		fill(255, 0, 0);
		text("Republicans control the country, Sorry hipsters.", 400, 70);
	}
	fill(255, 255, 255)
	text(msg + " wins!", 400, 100)
}

function startGame() {
	fill(180, 0, 0);
	textSize(32);
	text("The Land of the Free", 400, 50);
	// Button
	rectMode(CENTER); 
	fill(255, 255, 255);
	textSize(16);
	text("Press ze Spacebar", 400, 250);
}

function keyPressed() {
	if (key == 'r' || key == 'R') {
		playerChoice = "rock"
		console.log("p " + playerChoice)
	} else if (key == 'p' || key =='P') {
		playerChoice = "paper"
		console.log("p " + playerChoice)
	} else if (key == 's' || key == 'S') {
		playerChoice = "scissors"
		console.log("p " + playerChoice)
	}
	if (key == ' ') {
		Switch = true;
		start = false;
	}
}