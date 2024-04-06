const formatter = Intl.NumberFormat();

class Car {
  maker: string;
  model: string;
  year: number;
  mileage: number;
  totalFuel: number;
  lastService: number;
  serviceInterval: number;

  constructor(maker: string, model: string, year: number) {
    this.maker = maker;
    this.model = model;
    this.year = year;
    this.mileage = 0;
    this.totalFuel = 0;
    this.lastService = 0;
    this.serviceInterval = 8000;
  }
  trip(dist: number, fuel: number) {
    this.mileage + dist;
    this.totalFuel + fuel;
  }
  makeAnnouncementOfSale() {
    return console.log(`Продаётся автомобиль ${this.maker} ${this.model}, ${this.year} года выпуска, с пробегом ${this.mileage} км`);
  }
}

const cherok = new Car('Jeep', 'Grand Cherokee', 2021);

cherok.trip(480, 40);
cherok.trip(1650, 150);
cherok.makeAnnouncementOfSale();
