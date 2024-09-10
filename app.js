const string = ["rock", "paper", "scissor"];

const getComputerChoice = (arr) => {
  return string[Math.floor(Math.random() * string.length)];
};

const getHumanChoice = () => {
  return prompt(
    "Rock, paper or scissor? Enter your choice ✊🖐️✌️"
  ).toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    alert("It's a tie! Try again 🎀");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    alert(`You win 🥇 ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    alert(`You lose 👻 ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  console.log(`Human score: ${humanScore}, computer score: ${computerScore}`);
};

const declareWinner = () => {
  if (humanScore > computerScore) {
    alert(
      `You Win ✨! Final scores- You: ${humanScore}, Computer:${computerScore}`
    );
  } else if (humanScore === computerScore) {
    alert(
      `It's a tie 🤝! Final scores- You: ${humanScore}, Computer:${computerScore}`
    );
  } else {
    alert(
      `You lose 👻! Final scores- You: ${humanScore}, Computer:${computerScore}`
    );
  }
};

for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice(string);
  const humanSelection = getHumanChoice();

  playRound(humanSelection, computerSelection);
}

declareWinner();
