"use strict";
/*
  на стадии компиляции (во время компиляции кода) - статической строгой (или сильной) типизацией, нет авто приведение типов
  на стадии runtime (во время исполнения программы) - динамическая (слабая) типизация, авто приведение типов

  npm install --save-dev typescript //установка typescript
  ./node_modules/.bin/tsc --init //в корне появился файл tsconfig.json
  npm install --save-dev ts-node //установить ts-node
 ./node_modules/.bin/tsc //компиляция TypeScript в JavaScript

*/
//JSDoc предоставляет специальные теги, которые можно использовать для аннотации типов
/** @type {number} roomNumber */ //Тег @type позволяет добавить тип, название и описание переменной.
const roomNumber = 345;
/** @type {{name: string, age: number}} personOne */
const personOne = {}; // Ошибка, отсутствуют свойства name и age
const personOne1 = { name: 'Bob', age: 23 }; // Здесь ошибки не будет
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
};
//instanceof. проверяет принадлежность объекта к определённому классу с помощью проверки цепочки прототипов
class Rabbit {
}
let rabbit = new Rabbit();
// это объект класса Rabbit?
console.log(rabbit instanceof Rabbit); // true
const Book = {
    title: 'The Stand',
    author: 'Steven King'
};
//проверить, лежит ли в переменной объект
const isObj = typeof Book === 'object'; //true
const isObj1 = Book instanceof Object; //true
//Структура проекта
//.d.ts — расширение заголовочных (или декларативных) файлов. Они описывают структуру и свойства функций, но не их реализацию. Такие файлы нужны, чтобы компилятор смог работать с JavaScript как с TypeScript. Заголовочные файлы обычно генерируются автоматически и лежат рядом с файлами .js.
//.tsx — файлы с таким расширением встречаются в React-приложениях, которые используют TypeScript.
