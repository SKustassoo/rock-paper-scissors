const cardRock = document.getElementById('rock');
const cardPaper = document.getElementById("paper");
const cardScissor = document.getElementById("scissor");
const theNewGameButton = document.getElementById("NewGameButton")

let gamesPlayed = 0;
let playerWins= 0;
let computerWins = 0;



cardRock.addEventListener("click", function() {
    if(gamesPlayed < 5){
        playRound("rock", getComputerChoice());
    }
    
});

cardPaper.addEventListener("click", function() {
    if(gamesPlayed < 5){
    playRound("paper", getComputerChoice());
    }
});

cardScissor.addEventListener("click", function() {
   if(gamesPlayed < 5) {
    playRound("scissor", getComputerChoice());
    }

});

theNewGameButton.addEventListener("click", function(){
    resetGame();
    clearAwards();
    theNewGameButton.classList.remove("button-cta");
});



function getComputerChoice() {
    let choice = Math.random();
    let answer = "";

    if (choice <= 0.33){
        answer = "rock"
    }else if (choice > 0.33 && choice <= 0.66){
        answer = "paper"
    }else{
        answer = "scissor"
    }

    return answer;
};


function playRound(playerChoice, computerChoice) {

    let outcome;

    switch(playerChoice){
        case("paper"):
            if (computerChoice == "rock"){
                outcome = 1;
            }else if (computerChoice == "paper"){
                outcome = 0;
            }else{
                outcome = 2;
            };

            break;

        case("scissor"):
            if (computerChoice == "rock"){
                outcome = 2;
            }else if (computerChoice == "paper"){
                outcome = 1;
            }else{
                outcome = 0;
            };

            break;
            
        case("rock"):
            if (computerChoice == "rock"){
                outcome = 0;
            }else if (computerChoice == "paper"){
                outcome = 2;
            }else{
                outcome = 1;
            };

            break;
        
        default:
            outcome = 0;
    };

    gamesPlayed++;
    setAward(outcome);
    if (gamesPlayed == 5) {
        theNewGameButton.classList.add("button-cta");
        callTheWinner(playerWins, computerWins);
    }
};


function setAward(gameOutcome){
    
    if (gameOutcome == 0){
        const tieAwards = document.getElementsByClassName("ties-award-list");
        const li = document.createElement("li");
        li.setAttribute("class", "award");
        tieAwards[0].appendChild(li);

    }else if(gameOutcome == 1){
        const playerAwards = document.getElementsByClassName("player-award-list");
        const li = document.createElement("li");
        li.setAttribute("class", "award");
        playerAwards[0].appendChild(li);
        playerWins++;

    }else {
        const computerAwards = document.getElementsByClassName("computer-award-list");
        const li = document.createElement("li");
        li.setAttribute("class", "award");
        computerAwards[0].appendChild(li);
        computerWins++;
    };

};


function resetGame(){
    gamesPlayed = 0;
}

function clearAwards(){
    const children = [...document.getElementsByTagName('ul')];
    children.forEach((child) => {child.innerHTML=""});
}

function callTheWinner(playerWins, computerWins){
    const shoutOut = document.createElement("div");
    const quotePosition = document.getElementsByClassName('game-outcome');

    if (playerWins>computerWins){
        shoutOut.innerHTML = "<p>Player wins, computer lost!</p>";
    }else if(computerWins>playerWins){
        shoutOut.innerHTML = "<p>Computer wins, player lost!</p>";
    }else{
        shoutOut.innerHTML = "<p>Kinda weird outcome</p>";
    }

    quotePosition[0].appendChild(shoutOut);
    
}
