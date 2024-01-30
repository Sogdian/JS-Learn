function evenSum(numbers) {
  console.log(numbers)
  let sum = 0;

  for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if(number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
}

// Правильный результат: 2 + 4 = 6
console.log(evenSum([1, 2, 3, 4]));

// Правильный результат: 2 + 10 + 16 = 28
console.log(evenSum([5, 2, 10, 1, 99, 16]));
