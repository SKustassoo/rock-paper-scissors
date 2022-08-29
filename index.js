function getComputerChoice() {
    let choice = Math.random();
    let answer;

    if (choice <= 0.33){
        answer = "rock"
    }else if (choice > 0.33 && choice <= 0.66){
        answer = "paper"
    }else{
        answer = "scissor"
    }

    return answer;
};

function getPlayerChoice() {
    let answer = prompt("Rock, paper, scissor?").toLowerCase();
    return answer;
};


function playRound(playerChoice, computerChoice) {

    let outcome;

    switch(playerChoice){
        case("paper"):
            if (computerChoice == "rock"){
                outcome = 1;
            }else if (computerChoice == "paper"){
                outcome == 0;
            }else{
                outcome = 2;
            };

            break;

        case("scissor"):
            if (computerChoice == "rock"){
                outcome = 2;
            }else if (computerChoice == "paper"){
                outcome == 1;
            }else{
                outcome = 0;
            };

            break;
            
        case("rock"):
            if (computerChoice == "rock"){
                outcome = 0;
            }else if (computerChoice == "paper"){
                outcome == 2;
            }else{
                outcome = 1;
            };

            break;
        
        default:
            outcome = 0;
    };
    return outcome;
};

function game() {
    let gamesCounter = 0;
    let playerWins = 0;
    let computerWins = 0;
    var singleGameOutcome = 0;

    for (let i = 0; i < 5; i++) {

        singleGameOutcome = playRound(getPlayerChoice(), getComputerChoice());

        if (singleGameOutcome == "1"){
            playerWins++;
            gamesCounter++;

        }else if (singleGameOutcome == "2"){
            computerWins++;
            gamesCounter++;
        } else {
            gamesCounter++;
        }
    }

    if(playerWins > computerWins){
        console.log("Player wins " +playerWins+" / "+computerWins);
    }else if(playerWins < computerWins){
        console.log("computer wins "+computerWins+" / "+playerWins);
    }else{
        console.log("now this is awkward, tie I guess? computer: "+computerWins+", player: "+playerWins);
    }
};



game();

