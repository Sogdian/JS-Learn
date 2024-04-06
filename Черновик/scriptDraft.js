const tools = {
  bestPricePerformanceRatio() {
    const candidates = this.phones;

    let bestRatio = Infinity;
    let bestCandidate = null;

    for (let candidate of candidates) {
      const ratio = candidate.price / candidate.benchmark;

      if (ratio < bestRatio) {
        bestRatio = ratio;
        bestCandidate = candidate;
      }
    }

    return bestCandidate;
  }
}

function Phone(name, price, benchmark) {
  this.name = name;
  this.price = price;
  this.benchmark = benchmark;
}

const available = {
  phones: [
    new Phone('GigglePhone Pro', 89770, 1607836),
    new Phone('SmartyTech 12', 131159, 1605327),
    new Phone('HahaWei G24', 89274, 1556351),
    new Phone('iPear 366+', 59437, 1553040),
    new Phone('SkySung Ultra', 70335, 1540980),
    new Phone('WriteMe 12', 80664, 1511174),
    new Phone('Psyomi S30', 64591, 1486260),
  ]
}

const bestPhone = tools.bestPricePerformanceRatio.apply(available)

console.log('Лучшим по соотношению цена/производительность признан смартфон', bestPhone.name);
