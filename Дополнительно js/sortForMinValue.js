//Сортировка массива по минимальному элементу
let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);
let currentIndex = 0;

for (currentIndex = 0; currentIndex < usersByDay.length - 1; currentIndex++) { //usersByDay.length - 1, т.к. на последнем месте в массиве автоматически останется самой большое число
  let minValue = usersByDay[currentIndex]; //далее весь код ниже = //Поиск минимального элемента
  for (let j = currentIndex + 1; j < usersByDay.length; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = minValue;
      usersByDay[j] = swap;
      console.log('Меняю местами ' + swap + ' и ' + minValue);
      console.log('Массив сейчас: ' + usersByDay);
    }
  }
}

//Поиск минимального элемента
let userDays = [4, 2, 1, 3];
console.log(userDays);

let currentInd = 0;
let minVal = userDays[currentInd]; //минимальный элемент = первый элемент массива ("4")

for (let j = currentInd + 1; j < userDays.length; j++) { //let j = currentInd + 1 - начали с проверки второго элемента в массиве ("2"), т.к. в minVal присвоили userDays[0], т.е. первый элемент массива ("4")
  if (userDays[j] < minVal) { //если второй элемент в массиве ("2") < минимального "4", т.е. true
    minVal = userDays[j]; //minVal = 2
    let swap = userDays[currentInd]; //=userDays[0] - для хранения значения первого элемента массива ("4")
    userDays[currentInd] = minVal; //userDays[0] = 2, присвоили минимальное значение на первое место массива = [2, 2, 1, 3];
    userDays[j] = swap; ///userDays[1] = 4, второй элемент массива "2" меняем на "4" = [2, 4, 1, 3];
    console.log('Меняю местами ' + swap + ' и ' + minVal);
    console.log('Массив сейчас: ' + userDays);
  }
}
