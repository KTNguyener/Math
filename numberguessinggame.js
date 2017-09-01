var playerOne = prompt("Player 1. Enter a number between 1 and 6.")
//asks the user to imput a number
	if (playerOne < 1 || playerOne>6 || isNaN(playerOne))
  {window.alert("Try again.");
  //if user enters a number outside the range, the script ends
}
//If the above is met, move on to line 7
else {
	var playerTwo = prompt("Player 2. Try and guess player 1's number between 1 and 6.");
  //asks the second user to guess the first one's number
	if (playerOne == playerTwo) {
  window.alert("Player 2 wins!");
  //if player two correctly guesses the number, window alert shows up saying that they win
  }
  else {
 	window.alert("Plauer 1's answer was " + playerOne);
  window.alert("You chose " + playerTwo); 
  }
  //if the number is not player 1's answer, the script displays what player one chose and what player two did.
}
