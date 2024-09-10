const string = ["rock", "paper", "scissor"];

const getComputerChoice = (arr) => {
  return string[Math.floor(Math.random() * string.length)];
};
// console.log(getComputerChoice(string));

const getHumanChoice = () => {
  return prompt(
    "Rock, paper or scissor? Enter your choice ✊🖐️✌️"
  ).toLowerCase();
};
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


const playRound = (humanChoice, computerChoice, humanScore, computerScore) => {
  if (humanChoice === computerChoice) {
    alert("It's a tie! Try again 🎀");
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    alert("You win 🥇 Rock beats Scissor");
    humanScore++;
    return console.log("human score:", humanScore);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose 👻 Paper beats Rock");
    computerScore++;
    return console.log("comp score:", computerScore);
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    alert("You lose 👻 Scissor beats Paper");
    computerScore++;
    return console.log("comp score:", computerScore);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("You win 🥇 Paper beats Rock");
    humanScore++;
    return console.log("human score:", humanScore);
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    alert("You lose 👻 Rock beats Scissor");
    computerScore++;
    return console.log("comp score:", computerScore);
  } else {
    alert("You win 🥇 Scissor beats Paper");
    humanScore++;
    return console.log("human score:", humanScore);
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection, humanScore, computerScore);
