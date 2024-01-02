/*
Все компоненты должны располагаться в файлах с расширением .jsx
React поддерживает два вида компонентов: функциональные и классовые.
  Функциональный компонент — обычная функция. Компонентом его делает факт, что эта функция возвращает JSX.
{computedDate} - шаблонизация, в шаблон вставляется выражение
  Выражение — это конструкция языка JavaScript, которая возвращает значение (тернарый оператор — это выражение)
*/

//Создаем элемненты
function HelloWorld(props) { //или function HelloWorld({date})
    //Все данные, передаваемые в компонент, обязательно являются свойствами объекта props. Их нельзя делать отдельными параметрами функции
  const computedDate = props.date ? props.date : '29.05.2013'; //или const computedDate = {date} ? {date} : '29.05.2013';
    //const content = type === 'image' ? <img src="url" /> : <span>text</span>; //другой похожий пример
  return (<h1>Привет, Мир!!! Моё приложение создано: {computedDate}</h1>) //JSX синтаксис
}

function App({children}) {
  let dateTime = '30.05.2013'
  return (
    <section>
      <HelloWorld date={dateTime} /> //или date='30.05.2013'
      {children}
    </section> //<h1>Привет, Мир!!! Моё приложение создано: 30.05.2013</h1>
  )
}

function MyComponent () {
  return (
    <>
      <h1 className="title">Hello React!</h1>
    </>
  );
}

const child = React.createElement('span', { className: 'text-green' }, 'Hello React!');
const element = React.createElement('h1', { className: 'title', children: 'Hello world!' }); //Метод создаёт новый React-элемент
const element2 = React.createElement('h1', { className: 'title'}, child);

//Вызываем функции библиотеки React
const containerElement = document.getElementById('root');
const root = ReactDOM.createRoot(containerElement); //создать коревой элемент
root.render(element); //Hello world! //Для отрисовки используем метод render у объекта ReactDOM
  root.render(element2); //Hello React!
  root.render(<HelloWorld date='13.02.23' />); //
  root.render(HelloWorld({date: '13.02.23'})); //<h1>Привет, Мир!!! Моё приложение создано: 13.02.23</h1>
  root.render(<App />); //<h1>Привет, Мир!!! Моё приложение создано: 13.02.23</h1>
    root.render(<App> <p>Это дочерний компонент</p> </App>); //<p>...</p> = children
  root.render(<h1>Hello world!</h1>); //Hello world!
  root.render('Hello world!'); //Hello world!
  root.render(<MyComponent />); //Hello React! //вызвать <React.Fragment>. Этот компонент вместо DOM-элемента создаёт «фрагмент» документа, который объединяет вложенные в него элементы.

const className = `card ${ isSelected ? 'selected' : ''} ${ isFinished ? 'disabled' : '' }`; //card selected disabled или card или другие вариации

//onClick - пропс React-элементов
  //пример 1
    function Button () {
      function print() {
        console.log('Вы нажали на кнопку')
      }
      return <button type="button"
                     onClick={print}
                     onClick="showMessage()"
                     onClick={() => alert('Hello world')}
                     onMouseOver={() => console.log('Mouse detected!')}
      >Нажми меня </button> //onClick, onMouseOver - обработка событий в DOM-элементах c React
    }
  //пример 2 с объектом события, чтобы обратиться к объекту события (например, чтобы получить больше информации о событии или обратиться к DOM-элементу, на котором произошло событие)
    //мы должны определить параметр (например, evt) в функции-обработчике события. В него будет подставлен объект события,
    //но это ненативный объект события, который устанавливается браузером. Вместо нативного объекта, React предоставляет экземпляр SyntheticEvent — синтетическое событие.+
    //В React обработчик события добавляется не напрямую к DOM-элементу, а к React-компоненту, который в свою очередь рендерит соответствующий элемент.
    //Когда происходит событие, React создает объект SyntheticEvent и передает его в обработчик события, который был задан в качестве пропса в компоненте.
    function App() {
      return (
        <button onClick={(evt) => console.log(evt)}>
          Нажми на меня
        </button>
      );
    }
  //пример 3. В этом примере мы рендерим список кнопок, каждая из которых выводит в консоль свой текст при клике.
    function ButtonList () {
      const buttons = ['Нажми меня', 'И меня', 'И меня']
      return (
        <div>
          {buttons.map((text, index) => {
            return <button type="button" key={index} onClick={() => console.log(index, text)}>{text}</button>
          })}
        </div>
      )
    }




/* Хуки. Хук — это функция. Её необходимо импортировать из пакета React, например, import {useState} from "react"
  useState - для работы с состоянием, позволяет использовать состояние в функциональных компонентах. Состояния позволяют делать интерактивные интерфейсы, которые реагируют на действия пользователя.
    Он принимает начальное состояние и возвращает массив. Первый элемент массива представляет собой текущее состояние, а второй элемент — функцию для изменения этого состояния.
    useState можно вызывать только внутри компонента, useState нельзя вызывать в инструкциях ветвления if, for и так далее.
    state не приходит извне, а является частью самого компонента и находится внутри него. Изменение состояния — это реакция на внешние действия: клики пользователя

    В коде мы объявили переменную count и функцию setCount и использовали для этого деструктуризацию массива.
    Затем используем count для отображения количества нажатий кнопки и setCount (функция «сеттер», которая позволяет изменять состояние) для обновления состояния count.
    useState() — это функция, которая принимает один аргумент. В нём необходимо передать начальное состояние.
    Каждый раз при изменениях, React перерисовывает элементы так, чтобы они соответствовали новому состоянию компонента. */
function Example() {
  const [count, setCount] = React.useState(0); //const [count, setCount] = React.useState(0) - это состояние. начальное состояние счётчика 0
  return (
    <div>
      <p>Вы нажали {count} раз</p> //разметка, которая зависит от состояния
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}

//Паттерны
//«Композиция» - один реакт компонент вызывает (содержит в себе) другой

//Деструктуризация в React.js
function UserCard({ name, email, phone, phone2 = ""  }) { //мы получаем объект props и обращаемся к его свойствам напрямую, используя имена свойств
  return (
    <div>
      <h2>{name}</h2> //используем фигурные скобки для извлечения свойств name, email и phone из объекта props
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );}
//Еще пример деструктуризации
const [firstCardData, secondCardData] = cards;

/* Особенности синтаксиса JSX:
  компонент может вернуть только один корневой элемент;
  в атрибутах используются названия свойств DOM-элементов;
  пользовательские компоненты обязательно должны начинаться с заглавной буквы;
  атрибуты пользовательских компонентов — это параметры функций;
  одиночные теги должны быть закрыты.
HTML to JSX:
  for = htmlFor
  class = className
  tabindex = tabIndex
  xlink:href = xlinkHref
  <img> = </img>

Значения false, null, undefined и true не рендерятся. Поэтому удобно использовать оператор && для условного рендеринга

//map для массива
<ul>
  {[
      'Первый элемент списка',
      'Тест2'
    ].map((item) => <li>{item}</li>) //Если метод вернёт JSX, то элементы будут отрендерены.
  }
</ul>
*/
