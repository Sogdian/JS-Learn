let player1 = {
  name: '1',
  goals: 10,
  passes: 5
}
let player2 = {
  name: '2',
  goals: 20,
  passes: 10
}
let players = [player1, player2];

let percentFun = function(players) {
  let goalsSum = 0;
  let percentForPlayer = 0;
  let array = [];
  for(let i = 0; i < players.length; i++){
    goalsSum = Math.round(goalsSum + players[i].goals);
  }
  for(let i = 0; i < players.length; i++){
    percentForPlayer =  Math.round(players[i].goals / goalsSum * 100);
    array.push(percentForPlayer);
  }
  return array;
}

let getStatistics = function (players) {
  let array = [];
  let copyPlayers = {
    name: '',
    goals: 0,
    passes: 0,
    coefficient: 0,
    percent: 0
  }
  for (let i = 0; i < players.length; i++) {
    copyPlayers.name = players[i].name;
    copyPlayers.goals = players[i].goals;
    copyPlayers.passes = players[i].passes;
    copyPlayers.coefficient = players[i].goals * 2 + players[i].passes;
    copyPlayers.percent = percentFun(players)[i];
    array.push(copyPlayers);
  }
  return array;
};

newPlayers = getStatistics(players);
console.log(newPlayers);