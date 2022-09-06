const cardRock = document.getElementById('rock');
const cardPaper = document.getElementById("paper");
const cardScissor = document.getElementById("scissor");





cardRock.addEventListener("click", function() {
    console.log(playRound("rock", getComputerChoice()));
});

cardPaper.addEventListener("click", function() {
    console.log(playRound("paper", getComputerChoice()));
    });

cardScissor.addEventListener("click", function() {
    console.log(playRound("scissor", getComputerChoice()));
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

    setAward(outcome);
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

    }else {
        const computerAwards = document.getElementsByClassName("computer-award-list");
        const li = document.createElement("li");
        li.setAttribute("class", "award");
        
        computerAwards[0].appendChild(li);

    };
};


function game() {
    let gamesCounter = 0;
    let playerWins = 0;
    let computerWins = 0;
    var singleGameOutcome = 0;
};
