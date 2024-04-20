// Определение абстрактного класса
abstract class AbstractClass {
  // Абстрактное свойство
  abstract abstractProperty: string;

  // Неабстрактное свойство
  nonAbstractProperty: number;

  // Конструктор абстрактного класса
  protected constructor(nonAbstractProperty: number) {
    return this.nonAbstractProperty = nonAbstractProperty;
  }

  // Абстрактный метод
  abstract abstractMethod(): void;

  // Неабстрактный метод
  nonAbstractMethod(): void {
    console.log("Это неабстрактный метод абстрактного класса.");
  }
}

// Определение производного класса
class ConcreteClass extends AbstractClass {
  // Реализация абстрактного свойства
  abstractProperty: string;

  // Конструктор производного класса
  constructor(nonAbstractProperty: number, abstractProperty: string) {
    super(nonAbstractProperty); // Вызов конструктора абстрактного класса
    this.abstractProperty = abstractProperty;
  }

  // Реализация абстрактного метода
  abstractMethod(): void {
    console.log("Это реализация абстрактного метода в производном классе.");
  }
}

// Создание экземпляра производного класса
const instance = new ConcreteClass(10, "Пример абстрактного свойства");

// Вызов методов экземпляра
instance.nonAbstractMethod(); // Выведет: "Это неабстрактный метод абстрактного класса."
instance.abstractMethod(); // Выведет: "Это реализация абстрактного метода в производном классе."
