'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🤝';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number😥😥';
    displayMessage('No Number');
    prompt('');
  }

  //When the player wins
  else if (guess == secretNumber) {
    // document.querySelector('.message').textContent =
    //   'Yay Your Number is Correct ';
    displayMessage('Yay Your Number is Correct');
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    //When Player wins changing CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When Guess and Secret Number are different
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Your Number is a little greater!!' : 'Too Low!';

      displayMessage(
        guess > secretNumber ? 'Your Number is a little greater!!' : 'Too Low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost the game';
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //When the player guess greater
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //        'Your Number is a little greater!!' ;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //When the player guess lower
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Your Number is a little lower!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start Guessing';
  displayMessage('Start Guessing..');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
