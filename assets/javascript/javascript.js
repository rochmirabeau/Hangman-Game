	//declare an array that contains an array of strings
	var characters = ["Alex" , 
  "Gouki".toLowerCase() , 
  "ChunLi".toLowerCase() , 
  "Dudley".toLowerCase() , 
  "Elena".toLowerCase() , 
  "Gill".toLowerCase() , 
  "Hugo".toLowerCase() , 
  "Ibuki".toLowerCase() , 
  "Ken".toLowerCase() , 
  "Makoto".toLowerCase() , 
  "Necro".toLowerCase() , 
  "Oro".toLowerCase() , 
  "Q".toLowerCase() , 
  "Remy".toLowerCase() , 
  "Ryu".toLowerCase() , 
  "Sean".toLowerCase() , 
  "Twelve".toLowerCase() , 
  "Urien".toLowerCase() , 
  "Yang".toLowerCase() , 
  "Yun".toLowerCase() ]; 

	var guessesLeft = 7;
	var whatYouGuessed = "";
	var correctAnswer = characters[Math.floor(Math.random() * characters.length)].toLowerCase();
	var blankArray = [];
	var guessSoFar = [];
	var tempString = correctAnswer.toLowerCase().split("");
	var legal = "abcdefghijklmnopqrstuvwxyz";
	var wins = 0
	var done = false;
	var restarted = true;

	function playGame() {
		//initialize values
		guessesLeft = 7;
		whatYouGuessed = "";
		blankArray = [" _"];
		guessSoFar = [];
		restarted = true;


		document.getElementById("lettersGuessed").innerHTML = guessSoFar;

		//show the game
		document.getElementById("gameStart").style.display = "initial";
		document.getElementById("guessesRemaining").innerHTML = guessesLeft;

		//show blank characters for the name 
		for (i = 0; i < correctAnswer.length; i++) {
		  	blankArray[i] = " _";

		}; 

		document.getElementById("characterName").innerHTML = blankArray.join("");

		//take guesses only if done is false
		if (done === false) {

		document.onkeyup = function(event) {
			whatYouGuessed = String.fromCharCode(event.keyCode).toLowerCase();

			//read input, if input is in correctAnswer, replace all instances of input in blankArray, add input to guessSoFar, ignore repeated inputs.

			//if you're wrong (input is not in correctAnswer and input is not in guessSoFar, add input to guessSoFar, decrement guessesLeft, 
			if (correctAnswer.indexOf(whatYouGuessed) === -1 && guessesLeft > -1 && guessSoFar.indexOf(whatYouGuessed) === -1 && legal.indexOf(whatYouGuessed) > -1 && blankArray.indexOf(" _") > -1 && done === false) {

				guessesLeft = guessesLeft - 1;
				guessSoFar.push(whatYouGuessed);
				document.getElementById("lettersGuessed").innerHTML = guessSoFar;
				document.getElementById("guessesRemaining").innerHTML = guessesLeft;

			} //if you're right, clone correct answer, find first index of input in clone replace the blankArray.indexOf(input), delete the input out of the clone, go again

			else {
				if (guessesLeft > -1 && done === false)
				for (i = 0; i < correctAnswer.length; i++) {
					blankArray[tempString.indexOf(whatYouGuessed)] = whatYouGuessed;
					delete tempString[tempString.indexOf(whatYouGuessed)];
					document.getElementById("characterName").innerHTML = blankArray.join("");
				};

				// do {
				// 	blankArray[tempString.indexOf(whatYouGuessed)] = whatYouGuessed;
				// 	delete tempString[whatYouGuessed];
				// 	document.getElementById("characterName").innerHTML = blankArray.join("");
				// } 	while (tempString.indexOf(whatYouGuessed) > -1);

				//set the blankArray[correctAnswer.indexOf(whatYouGuess)]


			};

			//if there no "" _ in blankArray, you won
			if (blankArray.indexOf(" _") === -1 && done === false) {

				document.getElementById("iWasThinking").style.display = "initial";
				document.getElementById("answer").innerHTML = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
				wins = wins + 1;
				done = true
				document.getElementById("winCount").innerHTML = wins;
				document.getElementById("gameOver").style.display = "initial"

				document.getElementById("rightOrWrong").innerHTML = "Victorious";
				document.getElementById("portrait").src = getImage(correctAnswer);



			};

			//you lose
			if (guessesLeft === 0 && done === false) {
				guessesLeft = guessesLeft - 1;
				done = true
				document.getElementById("gameOver").style.display = "initial";
				document.getElementById("rightOrWrong").innerHTML = "Defeated";
				document.getElementById("iWasThinking").style.display = "initial";
				document.getElementById("answer").innerHTML = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
				document.getElementById("portrait").src = getImage(correctAnswer);

			}

		};
	}

	};

	function resetGame() {
		//initialize variables and play again
		correctAnswer = characters[Math.floor(Math.random() * characters.length)];
		guessesLeft = 7;
		whatYouGuessed = "";
		blankArray = [" _"];
		tempString = correctAnswer.toLowerCase().split("");
		done = false;
		restarted = false;


		//hide the game 
		document.getElementById("gameStart").style.display = "none";
		document.getElementById("guessesRemaining").innerHTML = guessesLeft;
		document.getElementById("gameOver").style.display = "none";
		document.getElementById("iWasThinking").style.display = "none";




	};

function getImage(x) {
	return "assets/images/sfiii3s_port" + x + ".gif";
}