import "./style.css";

// Start Game
const initGame = () => {
  const startGame = confirm("Shall we play Rock, Paper, or Scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice()
    playerChoice = formatPlayerChoice(playerChoice);
    // If player choice is blank
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    // If player choice was declined
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    // if player choice is does not exist
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};




// Get player choice
const getPlayerChoice = () => {
  return prompt("Please enter Rock, Paper, or Scissors.")
};

// Format player choice
const formatPlayerChoice = (playerTake) => {
  if (playerTake || playerTake === "") {
        return playerTake.trim().toLocaleLowerCase();
    } else {
      return false;
    }
  };

// Decided not to play
const decidedNotToPlay = () => {
  alert("I guess you changed your mind.");
};

// Evaluate player choice
const evaluatePlayerChoice = (playerTake) => {
  if (
        playerTake === "rock" ||
        playerTake === "paper" ||
        playerTake === "scissors"
      ) {
        return playerTake;
      } else {
        return false;
      }
};

// Invalid choice
const invalidChoice = () => {
  alert("You didn't enter Rock, Paper or Scissors. Please pick one.");
};

// Get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber]
};


// Determine Winner
const determineWinner = (player, computer) => {
  const winner =
          player === computer
            ? "Tie Game"
            : player === "rock" && computer === "paper"
              ? `Player: ${player}\nComputer: ${computer}
              \nComputer wins!`
              : player === "paper" && computer === "scissors"
                ? `Player: ${player}\nComputer: ${computer}
              \nComputer wins!`
                : player === "scissors" && computer === "rock"
                  ? `Player: ${playerOne}\nComputer: ${computer}
              \nComputer wins!`
                  : `Player: ${player}\nComputer: ${computer}
              \nplayer wins!`;

  return winner;
};

// Display result
const displayResult = (result) => {
  alert(result)
};

// Ask to play again
const askToPlayAgain = () => {
  return confirm("Play again?");
};

// Thanks for playing
const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};


initGame();
