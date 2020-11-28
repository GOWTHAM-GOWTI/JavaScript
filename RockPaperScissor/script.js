function rps(yourchoice) {
  let human, bot;
  human = yourchoice.id;
  bot = (numtoword(botchoice()));
  // console.log(human, bot);
  winner = chooseWinner(human, bot);
  // console.log(winner);
  message = finalMessage(winner);
  // console.log(message);
  frontend = display(human, bot, message);
}
function botchoice() {
  let choice =Math.floor(Math.random(0-3) * 3);
  console.log(choice);
  return choice;

}
function numtoword(botchoice){
  let choice= ['rock','papper','scissor'][botchoice];
  console.log(choice);
  return choice;
}

function chooseWinner(humanChoice, botChoice) {
  let setDatabase = {
    rock: { scissor: 1, rock: 0.5, papper: 0 },
    papper: { rock: 1, papper: 0.5, scissor: 0 },
    scissor: { papper: 1, scissor: 0.5, rock: 0 },
  };
  let humanValue = setDatabase[humanChoice][botChoice];
  let botValue = setDatabase[botChoice][humanChoice];

  return [humanValue, botValue];
}

function finalMessage([human, bot]) {
  if (human === 0) {
    return { message: "You lost", color: "red" };
  } else if (human === 0.5) {
    return { message: "you Tied", color: "yellow" };
  } else {
    return { message: "you won", color: "green" };
  }
}
function display(human, bot, message) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    papper: document.getElementById("papper").src,
    scissor: document.getElementById("scissor").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("papper").remove();
  document.getElementById("scissor").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src= '" +
    imageDatabase[human] +
    "' height=150px width=150px style='box-shadow:0px 0px 20px blue' >";

  messageDiv.innerHTML =
    "<h1 style='color:" + message["color"] + " ; '> " + message["message"];
  +"</h1>";

  botDiv.innerHTML =
    "<img src= '" + imageDatabase[bot] + "' height=150 width=150 style='box-shadow:0px 0px 20px red'>"

  document.getElementById("result-box").appendChild(humanDiv);
  document.getElementById("result-box").appendChild(messageDiv);
  document.getElementById("result-box").appendChild(botDiv);
}
