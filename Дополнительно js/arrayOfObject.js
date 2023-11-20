let firstCat = {
  name: 'Кекс',
  points: 0
};

let secondCat = {
  name: 'Рудольф',
  points: 0
};

let cats = [firstCat, secondCat];
/*
= let cats = [
  {
    name: 'Кекс',
    points: 0
  },
  {
    name: 'Рудольф',
    points: 0
  }
]; */

let runGame = function (quantity, animals) {
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
};

runGame(2, cats);
