const options = document.querySelectorAll('.options');
const human = document.querySelector('.mymove');
const computer = document.querySelector('.computer');
const result = document.querySelector('.result');

options.forEach( function(option){
    option.addEventListener('click' ,function(){
        if (option.classList.contains('rock')){
            human.textContent = "Rock";
            playComputer("Rock");
            console.log('Rock');
        }
        else if(option.classList.contains('paper')){
            human.textContent = "Paper";
            playComputer("Paper");
            console.log('Paper');
        }
        else if(option.classList.contains('scissors')){
            human.textContent = "Scissors";
            playComputer("Scissors");
            console.log('Scissors');
        }
    });
});

function playComputer(humanMove){
    moves = ['Rock', 'Paper', 'Scissors'];
    let computerMove = moves[Math.floor(Math.random()*moves.length)];
    computer.textContent = computerMove;
    switch ( humanMove ){
        case "Rock":
            switch ( computerMove ){
                case "Rock":
                    result.textContent = "It's a draw!";
                break;
                case "Paper":
                    result.textContent = "You lose!";
                break;
                case "Scissors":
                    result.textContent = "You win!";
                break;
            }
        break;
        case "Paper":
            switch ( computerMove ){
                case "Rock":
                    result.textContent = "You win!";
                break;
                case "Paper":
                    result.textContent = "It's a draw!";
                break;
                case "Scissors":
                    result.textContent = "You lose";
                break;
            }

        break;
        case "Scissors":
            switch ( computerMove ){
                case "Rock":
                    result.textContent = "You lose!";
                break;
                case "Paper":
                    result.textContent = "You win!";
                break;
                case "Scissors":
                    result.textContent = "It's a draw!";
                break;
            }
        break;
        default:
        break;
    }
}