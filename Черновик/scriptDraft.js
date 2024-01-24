function getNormal(sys, dia) {
  return ((sys >= 100 && sys <= 135) || (dia >= 60 && dia <= 85))
}

console.log(getNormal(110, 70)); // true
console.log(getNormal(140, 75)); // false
console.log(getNormal(98, 80)); // false
