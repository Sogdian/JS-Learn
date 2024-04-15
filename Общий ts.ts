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

  //Record<string, number>
  const colorsMap: Record<string, number> = {};

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

//Именованные типы !type
  //Псевдонимы типов
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
  //финальный тип, должен соответствовать хотя бы одному из исходных типов
  type StringOrNumber = string | number
  const value1: StringOrNumber = "HI"
  const value2: StringOrNumber = 12

  //Пересечение типов
  //финальный тип, который соответствует обоим исходным, то есть содержит все их свойства
  type Favorit = 'red' | 'pink'; //тут типы перечислены через объединение
  type Available = 'red' | 'green' | 'blue'; //тут типы перечислены через объединение
  type Color = Favorit & Available; //а здесь используем пересечение
    //в результате получим те значения, которые есть в обоих типах: type Color = "red"
  //пример2
  type A = { a: number }
  type B = { b: number }
  const ab: A & B = {
    a: 5,
    b: 12,
  }

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

  //Имплементацию объединенного типа
  type Foo = { one: number }
  type Bar = { another: string }
  type Union = Foo | Bar;
  // TS2422: A class can only implement an object type or intersection of object types with statically known members.
  class Baz implements Union {
    one;
    another;
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

//!Интерфейсы (тип объекта) - для типизации классов и объектов, без реализации
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

  //Типизация класса !implements (имплементация интерфейса классом)
  //Класс должен содержать все обязательные свойства интерфейса
  //Эти свойства и методы должны быть публичными
  interface IUser {
    login: string;
    password?: string;
    email: string | undefined;
    auth(password: string): boolean; //без указания дефолтного значения
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

  //Множественная имплементация
  interface Foo { one: number }
  interface Bar { another: string }
  class Baz implements Foo, Bar {
    one;
    another;
  }

  //Декларативное слияние
  interface Foo {
    one: number;
  }
  interface Foo {
    another: string;
  }
  //интерфейсы сольются в один
  const obj: Foo = {
    one: 1,
    another: 'some'
  }

  //Расширение интерфейса через другой интерфейсов !extends
  interface Foo {
    one: number;
  }
  interface Bar extends Foo {
    another: string;
  }
  const obj: Bar = {
    one: 1,
    another: 'some',
  }

  //Расширение класса через интерфейсов implements
  interface Foo {
    one: number;
  }
  class Baz implements Foo {
    one;
  }

  //Объединение типов и интерфейса
  //Интерфейсы преобразуются в псевдонимы типов
  type A = { a: number }
  interface B { b: number }
  const ab: A & B = {
    a: 5,
    b: 12,
  }
  //Псевдонимы типов становятся интерфейсами при имплементации
  type Foo = { one: number }
  class Baz implements Foo {
    one;
    constructor(one: number) {
      this.one = one;
    }
  }

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

//Типизация DOM-элементов
  //https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API
  //HTMLElement - общий тип любого DOM-элемента
  //HTMLButtonElement - кнопка
  //HTMLInputElement - инпут
  //HTMLImageElement - изображение

  //HTMLElement
  //Типизация при поиске
  const myElement: HTMLElement | null = document.querySelector('#my-element');
  if (myElement) {
    myElement.textContent = 'Найден элемент!'; //Теперь myElement имеет правильный тип HTMLElement
  }

  //HTMLImageElement
  const myImage: HTMLImageElement | null = document.querySelector('#my-image');
  if (myImage) {
    myImage.src = 'new-image.jpg'; //TypeScript гарантирует, что у нас есть доступ к атрибуту src
  }

//Типизация событий
  //MouseEvent - событие клика
  //InputEvent - событие изменения в поле ввода

  //MouseEvent
  function handleClick(event: MouseEvent) {
    // Теперь TypeScript знает, что event имеет тип MouseEvent
    console.log(`Кликнуто по координатам ${event.clientX}, ${event.clientY}`); //у события MouseEvent есть свойства clientX и clientY
  }
  const myButton: HTMLButtonElement | null = document.querySelector('#my-button');
  if (myButton) {
    myButton.addEventListener('click', handleClick);
  }

  //InputEvent
  function handleInputChange(event: InputEvent) {
    if (event.target) { //проверку на то, что в event.target действительно инпут. ПОСМОТРЕТЬ В ДЕБАГЕ!!!!!!!!
      console.log(`Data: ${event.data}`); //у события InputEvent есть свойство data
    }
  }

//Типизация стандартных объектов JS
  //Примеры объетов в JS: Map, Set, Date, Promise

  //Типизация Map
  //Map — объект со структурой данных в формате «ключ-значение»
  //Map предоставляет эффективные операции добавления, удаления и поиска элементов
  //при этом ключи могут быть разных типов — не только строками, как в стандартных объектах
  type KeyType = number; //Определяем типы ключей и значений
  type ValueType = string; //Определяем типы ключей и значений
  const userRoles = new Map<KeyType, ValueType>(); //Создание Map с указанием типов для ключей и значений
  // Добавление элементов в Map
  userRoles.set(1, 'Администратор');
  // Получение значения по ключу
  const role = userRoles.get(1); // role имеет тип string

  //пример2
  //создаём кэш, чтобы хранить данные. В качестве ключа будем использовать строку из инпута, которую получаем на вход, а значением будет результат работы функции
  const cache = new Map<string, number>();
  function cachedFunction(input: string): number {
    if (cache.has(input)) { // проверяем, есть ли уже закэшированные данные по такому ключу
      return cache.get(input); // если есть, то просто возвращаем результат из кэша
    }
    //если нет, то запускаем функцию и кладём результат в кэш
    const result = expensiveCalculation(input);
    cache.set(input, result);
    return result;
  }
  const res = cachedFunction("1+2") //3

  //Типизация Set
  //Set — коллекция уникальных значений — каждое значение встречается только один раз
  type ValueType = string; //Определяем тип значений
  const stringSet: Set<ValueType> = new Set(); //Создаём типизированный Set
  //Добавляем данные в Set
  stringSet.add('banana');
  stringSet.add('banana'); // второй раз строка 'banana' не добавится
  //Проверка наличия элемента
  const hasApple = stringSet.has('apple'); //false

  //пример2
  //Также Set используют для удаления дубликатов из массива
  const originalArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueValues = [...new Set(originalArray)]; // [1, 2, 3, 4, 5]

  //пример3
  //для управления выбором пользователей.
  //Когда пользователи веб-приложения выбирают элементы из списка, Set отслеживает эти элементы и гарантирует уникальность
  const selectedItems: Set<string> = new Set();
  function toggleSelection(item: string) {
    if (selectedItems.has(item)) {
      selectedItems.delete(item); // Элемент был выбран, снимаем выбор
    } else {
      selectedItems.add(item); // Элемент не был выбран, выбираем
    }
  }

  //Типизация Date
  //Date — объект для работы с датой и временем
  const currentDate: Date = new Date(); // Создание объекта Date с указанием типа Date
  const currentYear: number = currentDate.getFullYear(); // Работа с датой и временем

  //пример2
  //отслеживание сроков
  const taskDeadline: Date = new Date('2023-10-31');
  const today: Date = new Date();
  if (today > taskDeadline) {
    console.log('Срок задачи истёк!');
  } else {
    console.log('У вас ещё есть время для выполнения задачи.');
  }

  //пример3
  //вычислить разницу между датами
  const eventStart: Date = new Date('2023-09-20T08:00:00Z');
  const eventEnd: Date = new Date('2023-09-20T15:30:00Z');
  const timeDifference: number = eventEnd.getTime() - eventStart.getTime();
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  console.log(`Продолжительность события: ${hours} часов`);

  //пример4
  //форматирвоание даты с использованием библиотеки dayjs https://day.js.org/
  import dayjs from 'dayjs';
  const date = dayjs('2023-09-29'); // Создаём объект даты
  const formattedDate = date.format('DD/MM/YYYY'); // Форматируем дату в строку с заданным форматом
  console.log(formattedDate); // Вывод: '29/09/2023'

  //Типизация Promise
  //Promise — этот объект используется для асинхронных операций и обещает вернуть результат в будущем (либо успешный, либо ошибку)
  //TypeScript позволяет создавать Promise с явной типизацией. Это особенно полезно при работе с асинхронными операциями, такими как HTTP-запросы
  type TUser = { // выносим ожидаемые данные в отдельный тип
    id: number;
    name: string;
  }
  //Создание функции, которая возвращает Promise с типизированными данными
  async function fetchUserData(): Promise<TUser> {
    return fetch('https://ourverycoolapiserver.ru/api/v1/user')
      .then((response) => {
        if (response.status === 200) {
          return response.json() as Promise<TUser>;
          //или
          //const data = await response.json();
          //return data as TUser;
          //или
          //const data = await response.json() as Promise<TUser>;
          //return data as TUser;
        } else {
          throw new Error('Ошибка при получении данных');
        }
      });
  }
  //Использование Promise и цепочки then
  await fetchUserData()
    .then((data) => { // data имеет тип TUser
      processUserData(data);
    })
    .catch((error) => {
      console.error('Произошла ошибка', error);
    });
  function processUserData(userData: TUser) {
    console.log(`User ID: ${userData.id}`);
    console.log(`User Name: ${userData.name}`);
  }

  //Тип Awaited<Type>
  //тип который можно использовать для извлечения типа значения, возвращаемого из асинхронной функции с помощью оператора await
  //Этот тип предоставляет информацию о типе значения, которое будет доступно после успешного выполнения асинхронной операции
  async function fetchData(): Promise<string> {
    return "Some data"; // Пример асинхронной функции, возвращающей строку
  }
  type ResultType = Awaited<ReturnType<fetchData>>; //или Awaited<ReturnType<typeof fetchData>>
  //что означает «тип ожидаемого значения, которое возвращается из fetchData», т.е. Promise<string>, т.е. тип string
  //ReturnType<fetchData> = ReturnType<typeof fetchData> = Promise<string> = string
  const result: ResultType = await fetchData(); //тип result это string
  console.log(result); //"Some data"

//Файлы деклараций d.ts
  //Файлы декларации, или d.ts-файлы, содержат информацию о типах для библиотек и модулей JavaScript, которые не написаны на TypeScript.
  //Они позволяют TypeScript обеспечивать статическую типизацию кода, написанного на JavaScript, предотвращая ошибки во время компиляции и написания.

  //Установка готовых файлов декларации
  //npm install @types/library-name --save-dev

  //Создание собственных файлов декларации см. в my-module.d.ts

  //Амбиентные модули
  //используются, когда вы хотите добавить типы для библиотек и переменных, которые уже существуют в глобальной области видимости, но не имеют объявления типов

  //Глобальные модули
  //предоставляют типы для переменных и объектов, не связанных с конкретной библиотекой или модулем, и доступны на глобальном уровне.
  //Например, для глобальных переменных в браузере или Node.js

  //Создание пространства имён см. в my-module.d.ts

  //Группировка и структурирование кода вместо Пространства имени MyNamespace
  //Модуль person.ts
  export interface Person {
    name: string;
    age: number;
  }
  //Модуль greeting.ts
  import type { Person } from './person';
  export function greet(person: Person): string {
    return `Hello, ${person.name}!`;
  }
  //Использование модулей
  import type { Person } from './person';
  import { greet } from './greeting';
  const person: Person = { name: 'John', age: 30 };
  const greeting = greet(person);

//Статические поля и методы static
  //Статические свойства — собственность самого класса, а не его экземпляров
  //Чтобы воспользоваться такими свойствами, создавать экземпляр класса не нужно, т.к. они доступны прямо из самого класса
  //Примеры статических свойств и методов: Math.abs(), Math.PI, Date.now(), Object.create()

  class Example {
    static field3: string;
    protected static field4 = 'string';
    static method2() {}
  }
  Example.field3;
  Example.method2();

  //Контекст this
  //В статических методах this то объект до точки, а объект это не экхемпляо класса (как в нестатических метдах), а сам класс
  //через this в статических методах можно воспользоваться другими статическими методами и свойствами.
  class Car {
    static count: number = 0;
    static getLastCarId() {
      // В статическом методе есть доступ к другим статическим полям и методам
      return this.count ? this.count - 1 : undefined;
    }
  }

  //Наследование
  //производному классу доступны все статические свойства родительского
  class Parent {
    static staticParentField;
    static staticParentMethod() {}
    parentField;
    parentMethod() {}
  }
  class Child extends Parent {
    static staticChildField;
    static staticChildMethod() {}
    childField;
    childMethod() {}
  }
  const obj1 = new Child();
  //С помощью прототипа экземпляры класса Child имеют доступ к родительским (нестатическим) полям и методам
  obj1.parentFiled;
  obj1.parentMethod();
  //Класс Child использует класс Parent как прототип и получает доступ к его статическим полям и методам
  Child.staticParentField;
  Child.staticParentMethod();

//Нестатические поля и методы
  //Поля класса становятся полями объектов-экземпляров этого класса
  //Методы помещаются в специальный объект, который является прототипом для экземпляров этого класса
    //Методы класса одни и те же для каждого экземпляра — им самое место в прототипе
    //Т.е. методы хранятся не в экземплярах класса, а в прототипе класса Parent.prototype (из примера выше)
  //Получается, что поля и методы, объявленные в классе, на самом деле принадлежат его экземплярам
  //Нестатические свойства для каждого экземпляра разные, а значит, должны быть непосредственно в объектах-экземплярах

//Абстрактные классы !abstract
  //нельзя создать экземпляр абстрактного класса
  //Абстрактный класс нельзя инстанцировать
  //Абстрактный класс можно наследовать
  //Нужны для вынесения логики в отдельный класс
  abstract class Figure {
    constructor(public name: string, public color: string = 'black') {};
    print() {
      console.log(this.name, 'цвета', this.color);
    }
  }
  class Rectangle extends Figure {
    constructor(public width: number, public height: number) {
      super('Прямоугольник');
    }
  }
  class Circle extends Figure {
    constructor(public radius: number) {
      super('Круг');
    }
  }
  const circle = new Circle(15);
  circle.print(); // Круг цвета black
  const square = new Rectangle(12, 12);
  square.print(); // Прямоугольник цвета black

  //Абстрактные методы
  abstract class Figure {
    abstract getSquare(): number;
  }
  class Circle extends Figure {
    getSquare() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  class Rectangle extends Figure {
    getSquare() {
      return this.width * this.height;
    }
  }
  const square1 = new Rectangle(12, 12);
  square1.getSquare() // 144

  //Абстрактные свойства
  abstract class Figure {
    abstract isPerfect: boolean;
  }
  class Circle extends Figure {
    isPerfect; //свойство как обычное свойство
    constructor(isPerfect) {
      this.isPerfect = true;
    }
  }
  class Rectangle extends Figure {
    get isPerfect() { //свойства через геттер
      return this.width === this.height;
    }
  }
  const circle2 = new Circle(15);
  circle2.isPerfect // true
  const square2 = new Rectangle(12, 12);
  square2.isPerfect // truе

//!Дженерики <T>. Обобщенный тип
  //TypeScript определяет, какого типа аргументы переданы функции, и сам подставляет нужный тип на место обобщённого
  function getFirst<T>(arr: T[]): T | undefined {
    return arr[0]
  }
  getFirst(['qqwer', 'wert']); 


  //Обобщённых типов может быть несколько
  function main<T, K>(params: T, rest: K): [T, K] {
    return [params, rest]
  }
  const one = main(1, '123');
  const two = main<number, string>(1, '123');
  const three = main(false, 2);

  //Дженерик стрелочной функции
  const identityArrow = <T, >(arg: T): T => {
    return arg;
   }

  //Дженерик интерфейса
  interface ApiResponse<T> {
    status: number;
    data: T;
  }
  type Optional<T> = T | undefined;
  type Post = {
    id: string;
    name: string;
  }
  //Значение обобщённых типов в дженерике задано явно
  function handlePosts(response: ApiResponse<Post>): Optional<Post> { ... }

  //Дженерик псевдонима типов
  type Optional1<T> = T | undefined;
