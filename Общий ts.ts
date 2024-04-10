/*
  на стадии компиляции (во время компиляции кода) - статической строгой (или сильной) типизацией, нет авто приведение типов
  на стадии runtime (во время исполнения программы) - динамическая (слабая) типизация, авто приведение типов

  npm install --save-dev typescript //установка typescript
  ./node_modules/.bin/tsc --init //в корне появился файл tsconfig.json
  npm install --save-dev ts-node //установить ts-node
 ./node_modules/.bin/tsc //компиляция TypeScript в JavaScript

 "start tsc": "ts-node script.ts", //запустить код в файле
 "build tsc": "tsc" //компиляция TypeScript в JavaScript

*/

//JSDoc предоставляет специальные теги, которые можно использовать для аннотации типов
/** @type {number} roomNumber */ //Тег @type позволяет добавить тип, название и описание переменной.
const roomNumber = 345;
/** @type {{name: string, age: number}} personOne */
  const personOne = {} // Ошибка, отсутствуют свойства name и age
  const personOne1 = {name: 'Bob', age: 23} // Здесь ошибки не будет
/**
 * Собрать полное имя пользователя
 * @param {string} firstName — имя
    //С помощью тега @param нужно добавить название, тип и описание параметра функции
    //Название — обязательное поле
    //Тип параметра может быть встроенным типом JavaScript
 * @returns {string} — полное имя
    //Тег @returns используется для описания того, что функция возвращает.
 */
const getFullName = (firstName, lastName) => {
  console.log(firstName + ' ' + lastName);
}

//instanceof
  //Проверяет принадлежность объекта к определённому классу с помощью проверки цепочки прототипов
  class Rabbit {}
  let rabbit = new Rabbit();
  // это объект класса Rabbit?
  console.log( rabbit instanceof Rabbit ); // true

  const Book = {
    title: 'The Stand',
    author: 'Steven King'
  }
  //проверить, лежит ли в переменной объект
  const isObj = typeof Book === 'object'; //true
  const isObj1 = Book instanceof Object; //true

  //Кастомные защитники типов
  //Эта конструкция проверяет, что в объекте есть все необходимые свойства интерфейса и они имеют нужный тип
  interface UserData {
    id: number;
  }
  function processUserData1(data: any) {
    if (isUserData(data)) {
      console.log(`User ID: ${data.id}`); // Теперь TypeScript знает, что data имеет тип UserData
    } else {
      console.error("Invalid user data");
    }
  }
  //Конструкция data is UserData убеждает TypeScript в том, что, если функция вернула true, значит, data точно соответствует UserData.
  function isUserData(data: any): data is UserData {
    return typeof data === "object" && "id" in data;
  }

//Структура проекта
  //.d.ts — расширение заголовочных (или декларативных) файлов. Они описывают структуру и свойства функций, но не их реализацию. Такие файлы нужны, чтобы компилятор смог работать с JavaScript как с TypeScript. Заголовочные файлы обычно генерируются автоматически и лежат рядом с файлами .js.
  //.tsx — файлы с таким расширением встречаются в React-приложениях, которые используют TypeScript.

//Типы данных в TypeScript
  let x: number = 10;
  let hello: string = "Hello, world!";
  let isValid: boolean = true;
  let anyValue: any; //Любое значение. Переменную с таким типом данных можно заполнить чем угодно и использовать в любом месте
  let unknownValue: unknown; //сохранить в переменную любое значение, но TS всё же попросит явно привести её к какому-то типу — иначе использовать значение переменной не получится
    //тип пока не известен, в unknown можно передать любое значение, но перед использованием нужно его проверить.
  let nullValue: null; //отсутствие значения и никогда не появится
  let undefinedValue: undefined; //значение ещё не определено, но должно появиться в будущем
  let neverValue: never; //значения не может быть.
  let voidValue: void; //это специальный тип данных, которые возвращает функция
    //для нас неважно, что она возвращает. Реализация функции может быть любой и возвращать может любое значение.

  //Однородные данные
  const stringArray: string[] = ["a", "b", "c"]
  const numberArray: number[] = [1, 2, 3]
  const booleanArray: boolean[] = [true, false, true]

  //Данные с разными типами
  const arrayWithMixedItems: (string|number)[] = ["a", 1]
  const arrayWithMixedItems2: (string|number)[] = [1, "a"]
  const arrayWithMixedItems3: (string|number|boolean)[] = ["a", 2, true];

  //Кортеж - массив определённой длины
  //Кортеж будет принимать столько элементов, сколько типов указано
  const carthage: [string, number] = ["a", 1]
  const carthage2: [string, number, boolean] = ["a", 2, true]; //некорректный код, нужно (string|number|boolean)[]

  //Объекты
  const staticList: { itemA: string, itemB: number } = {
    itemA: "my thing",
    itemB: 321
  }
  //Разные данные в свойстве объекта - значение есть и значения нет
  const objWithOptionalField: {mayBe: string | undefined} = {mayBe: "yes"} //ok
  const objWithOptionalField2: {mayBe: string | undefined} = {mayBe: undefined} //ok, не то же что и = {}
  const objWithOptionalField3: {mayBe: string | undefined} = {} // ошибка: поле должно быть объявлено

  //Опциональные поля ?. какого-то поля (или полей) у объекта может не быть
  const objectWithOptional: {requiredField: string, optionalField?: string} = {
    requiredField: "Hi, there",
    optionalField: "General Kenobi"
  } //ok
  const objectWithOptional2: {requiredField: string, optionalField?: string} = {
    requiredField: "Hi, there",
  } //ok

  const objectWithOptional3: { firstValue: string | number, secondValue?: number, thirdValeu: boolean | string }  = {
    firstValue: "myString",
    secondValue: 123,
    thirdValeu: false,
  } //ok
  const objectWithOptional4: { firstValue: string | number, secondValue?: number, thirdValeu: boolean | string }  = {
    firstValue: 123,
    thirdValeu: "myString",
  } //ok

  //Тип объекта - объект
  const firstUser: {name: string, age?: number, contacts?: {phone: string}} = {
    name: "alex",
    age: 34
  }
  const secondUser: {name: string, age?: number, contacts?: {phone: string}} = {
    name: "mary",
    contacts: {
      phone: "123321"
    }
  }

  //Function Expression и стрелочные функции
  //Каждому параметру функции мы прописали тип данных через двоеточие - a: number
  //После круглых скобок, также через двоеточие, мы указали тип данных, который вернёт функция - (...): number
  const double = (a: number): number => {
    return a * a;
  };
  const triple = function(a: number): number {
    return a * a
  }
  let fn: () => void; //функция возвращает void

  //синтаксис типизации переменной, которая должна хранить только функцию - ...: ...
    //тип данных: «функция, которая принимает один аргумент с числовым значением и возвращает числовое значение»
    const double1: (a: number) => number = (a) => {
      return a * a;
    };
    const triple1: (a: number) => number = function(a) {
      return a * a
    }

  //Function declaration
  function double2(a: number): number {
    return a * a;
  }

  //Неявное приведение типов
  let num: number = 42;
  let str1: string = "Hello";
  let result: string = num + str1; // JavaScript неявно преобразует число в строку

//Явное приведение типов
  //as
  const myArg: any = 1
  const myNumber = myArg as number;
  const summ = (a: number): number => a * a
  summ(myArg) // ошибка TS, потому что ожидается number, а передан any
  summ(myNumber) // всё ок
  //пример 2
  enum Color {
    White = 'white',
    Black = 'black',
  }
  const colorFromApi = 'white'; //тип переменной colorFromApi — string
  const color: Color = colorFromApi as Color; //меняем тип colorFromApi на Color

  //Функции явного приведения типов
  let numberValue: number = Number("42"); // Преобразование строки в число
  let booleanValue: boolean = Boolean("true"); // Преобразование строки в логический тип
    //Важно отметить, что Boolean() приведёт к true любую строку, даже такую: Boolean("false")
  let parsedInt: number = parseInt("10"); // Парсинг строки в целое число
  let parsedFloat: number = parseFloat("3.14"); // Парсинг строки в число с плавающей точкой (дробное)

//null или undefined
  const myInt: number = 12
  const mayBeUndef: number | undefined = undefined
  const summ2 = myInt + mayBeUndef // ошибка TS: mayBeUndef может быть undefined, мы должны что-то сделать на этот случай, например дать фолбэк
  const summ3 = myInt + (mayBeUndef || 12) // если в mayBeUndef нет значения, то вторым слагаемым будет 12

  //never
  //Такая функция не может вернуть данные
  const neverReturn = () => {
    throw new Error("Fancy error")
  }

  //Именованные типы
  type MyType = string
  type ShoppingList = { coke: number }
  const age: MyType = "12"

  //Литералы
  let strictString: "iCanHaveOnlyThat" = "iCanHaveOnlyThat"
  // strictString = "otherValue" // ошибка, разные типы
  strictString = "iCanHaveOnlyThat" //ok

  let limitedValue: "one" | "two" | "three";
  limitedValue = "one" // ок
  limitedValue = "two" // ок
  limitedValue = "three" // ок
  // limitedValue = "four" // ошибка типизации: переменная может принять только указанное значение

  //Объединение типов
  type StringOrNumber = string | number
  const value1: StringOrNumber = "HI"
  const value2: StringOrNumber = 12

  //Пересечение типов
  type Favorit = 'red' | 'pink'; //тут типы перечислены через объединение
  type Available = 'red' | 'green' | 'blue'; //тут типы перечислены через объединение
  type Color = Favorit & Available; //а здесь используем пересечение
    //в результате получим те значения, которые есть в обоих типах: type Color = "red"

  //Пересечение двух примитивных типов - получится пустое множество значений
  type Empty = string & number; //type Empty = never

  //Пересечение в объектах
  type CommonObjectPart = {
    stringField: string;
  }
  type FirstObject = CommonObjectPart & {
    numberField: number;
  }
  type SecondObject = CommonObjectPart &  {
    booleanField: boolean;
  }

  //Использовать enum как значение типа
  enum Status {
    STOPPED = 0,
  }
  type Machine = {
    operationStatus: Status
  }
  const computer: Machine = {
    operationStatus: Status.STOPPED
  }

//Классы
  //Класс описывается с помощью свойств. Бывают:
  //свойства-данные, их называют полями класса
  //свойства-функции, их называют методами
  //свойства-аксессоры get set
  class User {
    name: string;
    //Конструктор
    //Конструктор должен быть всегда и только один. Если его не указать, будет использован конструктор по умолчанию — пустой.
    constructor(name: string) {
      this.name = name;
    }
    //Методы класса описывают отдельно, не в конструкторе. Они будут помещены в прототип [Prototype] объекта-экземпляра класса
    sayHi() {
      console.log(this.name);
    }
  }
  //user - экземпляр класса
  const user = new User('Иван');

  //другой вариант написания
  class User2 {
    constructor(public login: string, public password: string) {}
  }

  //Методы — это свойства класса, которые являются функциями. Писать без function
  class User3 {
    writeEmailHeader(to: string): string {
      return to;
    }
  }
  //пример
  class User4 {
    email: string;
    constructor(email: string) {
      this.email = email;
    }
    writeEmailHeader(to: string): string {
      const from = this.email; // При выполнении this имеет ссылку на конкретного пользователя
      return `From: ${from} to ${to}`;
    }
  }
  const user4 = new User4('my@some.ru');
  user4.writeEmailHeader('friend@some.ru'); //From: my@some.ru to friend@some.ru

  //get set
  //Дескрипторы свойств-аксессоров: функция get и set
  class User5 {
    login?: string;
    get email() { //Геттер для свойства email
      if (!this.login) {
        throw new Error('Пользователь не авторизован!');
      }
      return this.login + '@some.ru';
    }
    set email(value: string) { // Сеттер для свойства email
      this.login = value.split('@')[0];
    }
  }
  const user5 = new User5();
  user5.email = 'petr123@some.ru'; // Присвоение значения — сработает сеттер
  user5.email; //Чтение значения — сработает геттер //petr123@some.ru

//Интерфейсы (тип объекта) - для типизации классов и объектов, без реализации
  //Типизация объекта
  interface User8 {
    login: string; // Описание свойства
    password?: string; // Свойство можно сделать опциональным
    email: string | undefined; // Не то же самое, что { email?: string }
    auth(password: string): boolean; // Описание метода
  }
  const petr: User8 = {
    login: 'petr123',
    email: undefined, // Необходимо явно указывать в отличие от password
    auth(password) { // Типизация метода уже есть в интерфейсе, дублировать не нужно
      return password === this.password;
    },
  }

  //Указать тип всем ключам с типом number
  interface MyArray {
    [number]: string;
  }

  //Типизация аргумента функции
  interface TripOptions {
    numberOfPeople: number;
    weather: 'плохая' | 'хорошая';
    car?: boolean;
  }
  function makeTrip(options: TripOptions) {
    const { weather, numberOfPeople, car } = options;
  }
  //пример2, типизация makeTrip2: ILogger
  interface ILogger {
    error(...args: (string | number)[]): void;
    log(...args: (string | number)[]): void;
  }
  function makeTrip2(logger: ILogger) { //makeTrip2 реализует интерфейс ILogger
    logger.error('Поездка отменяется из-за плохой погоды ⛈');
    logger.log('Поездка состоится! 🔥');
  }
  makeTrip2(console); //console соответствует интерфейсу ILogger
  //пример2+, типизация DebugLogger: ILogger
  class DebugLogger implements ILogger {
    error(...args: (string | number)[]) {
      console.error('DEBUG', ...args);
    }
    log(...args: (string | number)[]) {
      console.log('DEBUG', ...args);
    }
  }
  const debug = new DebugLogger(); //debug соответствует интерфейсу ILogger
  makeTrip2(debug); //makeTrip2 соответствует интерфейсу ILogger

  //Типизация класса implements
  //Класс должен содержать все обязательные свойства интерфейса
  //Эти свойства и методы должны быть публичными
  interface IUser {
    login: string;
    password?: string;
    email: string | undefined;
    auth(password: string): boolean;
    new (login: string, password: string): IUser
  }
  class User9 implements IUser {
    login: string;
    email: string | undefined;
    password: string;
    constructor(login: string, password: string) {
      this.login = login;
      this.password = password;
      this.email = undefined;
    }
    auth(password: string) { //типизировать возвращаемое значение auth не надо, т.к. в IUser это уже сделано (: boolean)
      return password === this.password;
    }
  }
  //объект petr соответствует и типу User, и типу IUser
  const petr9 = new User9('petr', '1234');

//В ООП выделяют три основных принципа:
  //Инкапсуляция — разделение публичного интерфейса и внутренней логики работы класса.
  //Наследование — создание новых классов на основе старых. Это помогает оптимизировать код.
  //Полиморфизм — возможность расширять классы с помощью новой функциональности или переопределения старой.

//Инкапсуляция
  //После компиляции из ts в js все модификаторы доступа пропадают и свойства становятся публичными
  //public, по умолчанию все свойства класса public

  //!protected _свойство
  //доступно внутри класса и в производных классах (через extends)
  //но на этапе написания кода компилятор будет выдавать ошибку
  //можно переопределять защищённые свойства с модификатором protected (можно сделать публичным, но не наоборот)
  class User9 {
    login: string;
    protected _extraRoots = false; // Защищённое свойство, объявлено с модификатором protected
  }
  const user9 = new User9('abram');
  user._extraRoots; // Будет ошибка! // TS2445: Property '_extraRoots' is protected and only accessible within class 'User' and its subclasses.

  //private или #свойство (останется и после компиляции в js)
  //Доступны только внутри класса
  //В DevTools к приватному свойству обратиться можно, ошибки не будет
  //TypeScript обеспечивает приватность только на этапе проверки типов — такую приватность называют мягкой
  class User10 {
    private password;
    constructor(login, password) {
      this.login = login;
      this.password = password;
    }
    auth(value) {
      return this.password === value;
    }
  }
  const user10 = new User10('abram', '1234');
  user.password; // При выполнении будет синтаксическая ошибка: // SyntaxError: Private field '#password' must be declared in an enclosing class
  user.auth('0000'); // false
  user.auth('1234'); // true
  console.log(user['password']); // А так можно! – это уязвимость приватности TypeScript

//Наследование extends + super
  //Новый класс называется производным — он наследует все свойства и методы своего родителя
  //Можно переопределять свойства (и методы) родительского класса
  //Конструктор производного класса дополняет родительский через super
  //можно переопределять и защищённые свойства с модификатором protected (можно сделать публичным, но не наоборот)
  class Student {
    private name: any;
    private profession: any;
    constructor(name, profession) {
      this.name = name;
      this.profession = profession;
    }
    graduate() {
      return {
        name: this.name,
        profession: this.profession,
      };
    }
  }
  class MathStudent extends Student {
    private programmingLanguge: any;
    constructor(name, programmingLanguge) {
      super(name, 'Math'); //super - вызываем конструктор родителя
      this.programmingLanguge = programmingLanguge;
    }
    graduate() {
      const base = super.graduate(); //base = profession из Student, т.е. Student.profession
      return {
        ...base,
        programmingLanguge: this.programmingLanguge,
      }
    }
  }
  const student = new MathStudent('Евгений', 'MathLanguge'); //+ profession = 'Math'
  student.graduate(); // { name: 'Евгений', profession: 'Math', programmingLanguge: 'Python' }

  //пример2
  class Parent {
    method() {
      console.log('privateMethod');
    }
  }
  class Child extends Parent {
    method() { //переопределение родительского метода
      super.method(); //вызов родительского метода
      console.log('childMethod');
    }
  }
  const str = new Child();
  str.method(); //privateMethod childMethod

//Полиморфизм
  //при одинаковом интерфейсе реализация классов может отличаться
  //Переопределение методов класса при наследовани - полиморфизм
  interface Pet {
    name: string;
    beWeird(): void;
  }
  class Cat implements Pet {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    beWeird() {
      console.log(`Кот ${this.name}. Могу поцарапать...`) // Различная реализация метода beWeird
    }
  }
  class Dog implements Pet {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    beWeird() {
      console.log(`Пёс ${this.name}. Веду себя хорошо, но шерсть устанете подметать...`) // Различная реализация метода beWeird
    }
  }
  const cat = new Cat('Барсик'); //одинаковый интерфейс
  const dog = new Dog('Шарик'); //одинаковый интерфейс
  cat.beWeird(); // Кот Барсик. Могу поцарапать...
  dog.beWeird(); // Пёс Шарик. Веду себя хорошо, но шерсть устанете подметать...

//Приведение типов
  //Типизация объекта
  type TUser = {
    name: string;
    age: number;
    address: TAddress;
  }
  type TAddress = {
    city: string;
  }
  const user11: TUser = {
    name: 'John',
    age: 18,
    address: {
      city: 'Moscow',
    },
  };
  //Типизация функции
  type TUpdateUserDataFn = (user: TUser, field: string, newValue: string | number) => TUser
  const updateUserData: TUpdateUserDataFn = (user, field, newValue) => {
    const updatedUser = { ...user }
    updatedUser[field] = newValue;
    return updatedUser
  }

  //Типизация в запросе (пример)
  interface IUserData {
    userId: number;
  }
  fetch('https://some.ru/api/data')
    .then((response) => response.json())
    .then((data: object) => {
      processUserData(data as IUserData);
    });
  function processUserData(data: IUserData) {
    console.log(`User ID: ${data.userId}`);
  }

