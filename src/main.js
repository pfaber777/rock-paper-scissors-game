import "./style.css";

const initGame = () => {
  const startGame = confirm("Shall we play Rock, Paper, or Scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

let playGame = confirm("Shall we play Rock, Paper or Scissors?");

if (playGame) {
  //Play
  while (playGame) {
    const playerChoice = prompt("Please enter Rock, Paper or Scissors");
    if (playerChoice || playerChoice === "") {
      // Continue playing
      const playerOne = playerChoice.trim().toLocaleLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3 + 1);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        let result =
          playerOne === computer
            ? "Tie Game"
            : playerOne === "rock" && computer === "paper"
              ? `PlayerOne: ${playerOne}\nComputer: ${computer}
              \nComputer wins!`
              : playerOne === "paper" && computer === "scissors"
                ? `PlayerOne: ${playerOne}\nComputer: ${computer}
              \nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                  ? `PlayerOne: ${playerOne}\nComputer: ${computer}
              \nComputer wins!`
                  : `PlayerOne: ${playerOne}\nComputer: ${computer}
              \nplayerOne wins!`;
        alert(result);

        playGame = confirm("Play again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter Rock, Paper or Scissors. Please pick one.");
        // Continue loop back to rps choice
        continue;
      }

      // if playerChoice
    } else {
      alert("I guess you changed your mind.");
      break;
    }
  }

  // if playGame | WORKS
} else {
  alert("Ok, maybe next time.");
}
