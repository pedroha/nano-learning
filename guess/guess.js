var showStats = function(trials) {
	var message = 'Number of trials: ' + trials;
	var trials = document.getElementById('trials');
	trials.textContent = message;
};

var playGame = function(maximum) {
	console.log('playGame', maximum);

	var trials = 0;

	var secret = parseInt(Math.random() * maximum);

	var guessButton = document.getElementById('guess-button');
	var guess = document.getElementById('guess');
	var feedback = document.getElementById('feedback');

	var result = document.getElementById('result');

	showStats(trials);

	guessButton.onclick = function() {
		var guessNumber = parseInt(guess.value);

		var message = '';

		if (guessNumber === secret) {
			result.style['display'] = 'block';
		}

		if (guessNumber < secret) {
			message = 'Your guess is too low';
		}

		if (guessNumber > secret) {
			message = 'Your guess is too high';
		}

		feedback.textContent = message;

		trials = trials + 1;				
		showStats(trials);
	}
}

var go = document.getElementById('go');		
go.onclick = function() {

	alert("We are about to have some fun!!");

	var gamePanel = document.getElementById('game-panel');
	gamePanel.style['display'] = 'block';

	var maximum = document.getElementById('maximum');
	var maximumNumber = parseInt(maximum.value);

	playGame(maximumNumber);
};

