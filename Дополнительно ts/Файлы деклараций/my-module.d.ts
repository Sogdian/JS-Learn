//Амбиентные модули
  declare module 'my-module' {
    //типы и интерфейсы, которые доступны в модуле
    //export - Сделать определённые типы или интерфейсы видимыми для других модулей
    export interface Person {
      name: string;
      age: number;
    }

    function greet(person: Person): void;
  }

//Глобальные модули
  declare global {
    interface Window {
      myGlobalVar: number;
    }
  }

//Создание пространства имён
  namespace MyNamespace {
    export interface Person {
      name: string;
      age: number;
    }

    export function greet(person: Person): string {
      return `Hello, ${person.name}!`;
    }
  }
