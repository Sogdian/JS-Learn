//Использование модулей
  import { Person, greet } from 'my-module';
  const person: Person = { name: 'John', age: 30 };
  greet(person);

//Использование пространства имён
  const person: MyNamespace.Person = { name: 'John', age: 30 };
  const greeting = MyNamespace.greet(person);
