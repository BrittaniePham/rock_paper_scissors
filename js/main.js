var options = ["rock", "paper", "scissors"]
//var compChoice = options[Math.floor(Math.random() * options.length)]
var compPicked = document.getElementById('compPicked')
var userScore = 0
var compScore = 0

function selectChoice(option) {
  var compChoice = options[Math.floor(Math.random() * options.length)]
  if (option == 'rock') {
    userChoice = 'rock'
    userPicked.innerHTML = "You picked: " + option
    compPicked.innerHTML = "The computer picked: " + compChoice
    compareUserRock(userChoice, compChoice)
    compareUserPaper(userChoice, compChoice)
    compareUserScissors(userChoice, compChoice)
  } else if (option == 'paper') {
    userChoice = 'paper'
    userPicked.innerHTML = "You picked: " + option
    compPicked.innerHTML = "The computer picked: " + compChoice
    compareUserRock(userChoice, compChoice)
    compareUserPaper(userChoice, compChoice)
    compareUserScissors(userChoice, compChoice)
  } else if (option == 'scissors') {
    userChoice = 'scissors'
    userPicked.innerHTML = "You picked: " + option
    compPicked.innerHTML = "The computer picked: " + compChoice
    compareUserRock(userChoice, compChoice)
    compareUserPaper(userChoice, compChoice)
    compareUserScissors(userChoice, compChoice)
  }
}

function compareUserRock(userChoice, compChoice) {
  if (userChoice == 'rock' && compChoice == 'rock'){
    compare.innerHTML = "It was a tie!"
  }
  else if (userChoice == 'rock' && compChoice == 'paper') {
    compare.innerHTML = "Paper beats rock! You lost!"
    compScore++
  }
  else if (userChoice == 'rock' && compChoice == 'scissors') {
    compare.innerHTML = "Rock beats scissors! You win!"
    userScore++
  }
}

function compareUserPaper(userChoice, compChoice) {
  if (userChoice == 'paper' && compChoice == 'paper'){
    compare.innerHTML = "It was a tie!"
  }
  else if (userChoice == 'paper' && compChoice == 'rock') {
    compare.innerHTML = "Paper beats rock! You win!"
    userScore++
  }
  else if (userChoice == 'paper' && compChoice == 'scissors') {
    compare.innerHTML = "Scissors beats paper! You lost!"
    compScore++
  }
}

function compareUserScissors(userChoice, compChoice) {
  if (userChoice == 'scissors' && compChoice == 'scissors') {
    compare.innerHTML = "It was a tie!"
  }
  else if (userChoice == 'scissors' && compChoice == 'rock') {
    compare.innerHTML = "Rock beats scissors! You lost!"
    compScore++
  }
  else if (userChoice == 'scissors' && compChoice == 'paper') {
    compare.innerHTML = "Scissors beats paper! You win!"
    userScore++
  }
}

function printScore() {
  score.innerHTML = userScore
  score.innerHTML = compScore
}