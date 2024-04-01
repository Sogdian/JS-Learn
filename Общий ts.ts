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

//instanceof. проверяет принадлежность объекта к определённому классу с помощью проверки цепочки прототипов
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

//Структура проекта
  //.d.ts — расширение заголовочных (или декларативных) файлов. Они описывают структуру и свойства функций, но не их реализацию. Такие файлы нужны, чтобы компилятор смог работать с JavaScript как с TypeScript. Заголовочные файлы обычно генерируются автоматически и лежат рядом с файлами .js.
  //.tsx — файлы с таким расширением встречаются в React-приложениях, которые используют TypeScript.

//Типы данных в TypeScript
  let x: number = 10;
  let hello: string = "Hello, world!";
  let isValid: boolean = true;
  let anyValue: any; //тело ответа от сервера по умолчанию имеет тип any, потому что в момент разработки мы не знаем, какие данные к нам придут

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


  //Function Expression и стрелочные функции
  //Каждому параметру функции мы прописали тип данных через двоеточие - a: number
  //После круглых скобок, также через двоеточие, мы указали тип данных, который вернёт функция - (...): number
  const double = (a: number): number => {
    return a * a;
  };
  const triple = function(a: number): number {
    return a * a
  }
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
  };

  //as
  //независимо ни от чего, TS будет считать значение в том типе, в котором мы написали
  const myArg: any = 1
  const myNumber = myArg as number;
  const summ = (a: number): number => a * a
  summ(myArg) // ошибка TS, потому что ожидается number, а передан any
  summ(myNumber) // всё ок










