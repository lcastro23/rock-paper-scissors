           		winCount = 0;
			tieCount = 0;
			lossCount = 0;

			let roundCount = prompt("Please enter the number of rounds you want to play:");

			for(i = 0; i < parseInt(roundCount); i++)
			{
				let userInput = prompt("Please enter r, p, or s:");
				let userChoice;

				if(userInput === "r")
				{
					userChoice = 0;
				}
				else if(userInput === "p")
				{
					userChoice = 1;
				}
				else if(userInput === "s")
				{
					userChoice = 2;
				}

				compChoice = Math.floor(Math.random() * 3);

				possibleChoices = ["r", "p", "s"];
				alert("The computer chose " + possibleChoices[compChoice]);

				if((parseInt(compChoice) + 1) % 3 === parseInt(userChoice))
				{
					winCount = parseInt(winCount) + 1;
					alert("You won this round!");
				}
				else if(compChoice === userChoice)
				{
					tieCount = parseInt(tieCount) + 1;
					alert("Looks like this round was a draw.");
				}
				else if(parseInt(compChoice) === (parseInt(userChoice) + 1) % 3)
				{
					lossCount = parseInt(lossCount) + 1;
					alert("You lost this round...");
				}
			}

			alert("Out of " + roundCount + " rounds, you won " + winCount + " times, tied " + tieCount + " times, and lost " + lossCount + " times.");
