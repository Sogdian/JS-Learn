let diceNumber = 2;

let firstCat = {
  name: 'Кекс',
  points: 0
};

let secondCat = {
  name: 'Рудольф',
  points: 0
};

let cats = [firstCat, secondCat];

let runGame = function (quantity, players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};

runGame(diceNumber, cats);
