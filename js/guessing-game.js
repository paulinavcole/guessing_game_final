/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

//document.getElementById('');

function generateWinningNumber() {
    let number = Math.floor(Math.random() * 100) + 1
    return number
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  class Game {
      constructor() {
          this.playersGuess = null
          this.pastGuesses = []
          this.winningNumber = generateWinningNumber()
      }
      difference () {
          return Math.abs(this.playersGuess - this.winningNumber)
      }

      isLower() {
        if (this.playersGuess < this.winningNumber) {
            return true;
        }
        return false;
      }

      playersGuessSubmission(num) {
          
          if (num < 1 || num > 100 || typeof num!== "number") {
              throw 'That is an invalid guess.'
          }
          this.playersGuess = num
          return this.checkGuess()
      }
      checkGuess() {

        let feedbackText = ''
          if(this.playersGuess === this.winningNumber) {
              feedbackText = 'You Win!'
          } else if (this.pastGuesses.includes(this.playersGuess)) {
              feedbackText = 'You have already guessed that number.'
          } else {
            this.pastGuesses.push(this.playersGuess)
            if (this.pastGuesses.length === 5) {
            feedbackText = 'You Lose.'
           } else {
               let difference = this.difference()
               if (difference < 10) feedbackText = "You're burning up!"
                else if(difference < 25) feedbackText = "You're lukewarm."
                else if(difference < 50) feedbackText = "You're a bit chilly."
                else feedbackText = "You're ice cold!"
            }
           }
           //document.querySelector('#guess-feedback > h4').innerHTML = feedbackText;
           //document.querySelector(`#guess-list li:nth-child(${this.pastGuesses.length})`).innerHTML = this.playersGuess
           
        return feedbackText
      }
      provideHint() {
          const hintArray = [];

          hintArray.push(generateWinningNumber(), generateWinningNumber(), this.winningNumber)
          shuffle(hintArray)
          return hintArray
      }
  }
  function newGame() {
    return new Game(); //check that old game !== new game
  }
  function playGame() {
    const game = new Game();
    
    // We are grabbing the button from our html
    //const button = document.querySelector('button');
  
    // We are listening for when the use clicks on our button.
    // When they click, we will check in the input field to see if they have guessed a number. Then we will run the function `checkGuess`, and give it the player's guess, the winning number, and the empty array of guesses!
    //button.addEventListener('click', function() {
      //const playersGuess = +document.querySelector('input').value;
      //document.querySelector('input').value = '';
  
      //game.playersGuessSubmission(playersGuess);
    //});

    return game
  }

  playGame();

