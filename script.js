const secretNumber = Math.trunc(Math.random()*50)+1;
let message = 'No Number';
let score = 25;
let highScore = sessionStorage.getItem('highScoreKey') || 0;

document.querySelector('.highScore').textContent = highScore;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  
  if (score > 1){
    if (guess < secretNumber) {
      score--;
      message = (secretNumber-guess) > 6 ?
      '📉📉 Entered number is too low...' : '📉 Entered number is low...';
    } else if (guess > secretNumber) {
      score--
      message = (guess - secretNumber) > 6 ? 
       '📈📈 Entered Number is too High...' : '📈 Entered Number is High...';
    } else{
      highScore = score > highScore ? score : highScore;
      message = `🏆 correct Answer!!! Your score is ${score}`;
      document.querySelector('.number').textContent = guess;
      document.querySelector('body').style.backgroundColor = '#99FF99';
      document.querySelector('.number').style.width = '30rem';
    }
  } else {
    message = '😢 You Lost The Game!!!';
    score = 0
    document.querySelector('body').style.backgroundColor = '#FF3333';
  };

  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highScore').textContent = highScore;
  sessionStorage.setItem('highScoreKey', highScore);
});

document.querySelector('.again').addEventListener('click', () => {
  location.reload();
});

document.querySelector('.new-game').addEventListener('click', () => {
  sessionStorage.removeItem('highScoreKey');
  location.reload();
})
