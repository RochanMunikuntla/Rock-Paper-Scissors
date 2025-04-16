const images = [
    'rock.png',
    'paper.png',
    'scissors.png'
];

function getWinner(player, opponent) {
    if (player === opponent) {
        return "Draw!";
    }

    if (
        (player === 'rock' && opponent === 'scissors') ||
        (player === 'scissors' && opponent === 'paper') ||
        (player === 'paper' && opponent === 'rock')
    ) {
        return "You Win!";
    }

    return "You Lose!";
}

function updateScoreDisplay() {
    const mycount = document.getElementById('my_count');
    mycount.innerText = my_count;
    const opponentcount = document.getElementById('opponent_count');
    opponentcount.innerText = opponent_count;
}

let opponent_count = 0;
let my_count = 0;
let gameOver = false;

document.addEventListener('DOMContentLoaded', () => {
    let myChoice = null;
    const choices = ['rock', 'paper', 'scissors'];
    const container = document.getElementById('rps');

    const yourSide = document.getElementById('mine');
    const you = document.createElement('h2');
    yourSide.appendChild(you);
    you.innerText = 'YOU';

    const opponentSide = document.getElementById('opponent');
    const them = document.createElement('h2');
    opponentSide.appendChild(them);
    them.innerText = 'OPPONENT';

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.value = choice;
        button.style.border = 'none';
        button.style.background = 'transparent';
        button.style.cursor = 'pointer';

        const img = document.createElement('img');
        img.src = `${choice}.png`;
        img.alt = "icon";
        img.style.width = "100px";
        img.style.margin = "10px";
        button.appendChild(img);



        button.addEventListener('click', () => {
            event.preventDefault();
            [...yourSide.querySelectorAll('img')].forEach(img => img.remove());
            [...opponentSide.querySelectorAll('img')].forEach(img => img.remove());
            them.innerText = '';
            you.innerText = '';
            const playAgain = document.getElementById('playAgain');
            playAgain.innerText = 'Click again to play!';
            myChoice = choice;
            const selectedImg = document.createElement('img');
            selectedImg.src = `${choice}.png`;
            selectedImg.alt = choice;
            selectedImg.style.width = "200px";
            selectedImg.style.margin = "50px";


            document.getElementById('mine');
            mine.appendChild(selectedImg);
            mine.style.border = 'none';

            const opponentChoice = choices[Math.floor(Math.random() * 3)];
            const opponentImg = document.createElement('img');
            opponentImg.src = `${opponentChoice}.png`;
            opponentImg.alt = opponentChoice;
            opponentImg.style.width = "200px";
            opponentImg.style.margin = "50px";
            document.getElementById('opponent');
            opponent.appendChild(opponentImg);
            opponent.style.border = 'none';

            let result = getWinner(myChoice, opponentChoice);
            const header = document.getElementById('header');
            header.innerText = result;
            
            if(result == "You Win!"){
                my_count++;
            }
            else if(result == "You Lose!"){
                opponent_count++;
            }
            else{
                my_count++;
                opponent_count++;
            }
            updateScoreDisplay();
            
        });
        container.appendChild(button);



        
    })
})

