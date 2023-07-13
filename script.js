'use strict';

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random()*20)+1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if(!guess){
        displayMessage ('🚫 No Number!')
    }
    else if (guess == secretNumber){
        displayMessage ('🥳 Correct Number!')
        document.querySelector('.number').textContent= secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width ='30rem'

        if(score>highscore){
            highscore=score
            document.querySelector('.highscore').textContent = highscore 
        }
    }


    else if (guess !== secretNumber){
        if (score > 0){
            displayMessage ( guess > secretNumber ? '📈 Too High!' : '📈 Too Low!')
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            displayMessage ( '💥 You Lost The Game' )
        }
        
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score=20
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.score').textContent = score
    displayMessage ( 'Start guessing' )
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'

});

