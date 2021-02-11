'use strict';

// console.log(document.querySelector('.message').textContent);

// // The code below changes the text from Start Guessing to Correct Number
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input.
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When player wins.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    // document.querySelector('.number').textContent = secretNumber;
    // Change background color in CSS when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change style width on number
    document.querySelector('.number').style.width = '30rem';
    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
