var collectContainer = function () {
  var food = 'макароны';
  var eatDinner = function () {
    console.log('Поел ' + food);
  };
  return eatDinner;
};

var schoolkid = collectContainer();
console.log(schoolkid);
schoolkid();
