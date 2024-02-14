//В React принято каждый компонент хранить в отдельном файле и при необходимости импортировать его в другие компоненты.

/* Состояние компонента — это внутренние данные в компоненте, которые меняются в процессе выполнения программы.
  В отличие от параметров, которые передаются в компонент из его родителя и не могут быть изменены внутри компонента,
  состояние может измениться в любой момент.
  Состояние обычно используется для управления поведением компонента, а параметры — для настройки его внешнего вида. */

import React from "react";
import ReactDOM from "react-dom/client";

//Создаем элемненты
function HelloWorld(props) { //или HelloWorld({date})
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

//вывод в родителе дочернего элемента
  function HelloWorld(props) {
    return (
      <h1>Привет, Мир!!! {props.children}</h1>
      <div style={{width: '33%'}}></div> //Первые внешние фигурные скобки означают, что внутри содержится JS-выражение. А вторые внутренние — объявление JS-объекта.
        //В HTML в атрибуте style записан набор CSS-правил. А style у DOM-элементов — это специальный объект, который содержит список всех свойств стилей для этого элемента.
    )
  }
  <HelloWorld>
    <span>Этот текст передан как дочерний элемент для HelloWorld</span> //children = <span>...</span>

    <h1>
      <span>Первый элемент</span> //когда children много, надо указать общий корневой элемент, пример, h1
      <span>Второй элемент</span>
    </h1>
  </HelloWorld>
  //в итоге выведется: <h1>Привет, Мир!!! <span>Этот текст передан как дочерний элемент для HelloWorld</span></h1>

//Выделение компонентов
  function Button (props) { //Button - общий компонент для Product() и Order()
    return <button class="button" type="button" onClick={props.onClick}>{props.name}</button> //props.onClick = addProduct
  }
  function Product (props) {
    function addProduct () {
      // некоторая сложная бизнес-логика добавления товара в корзину
    }
    return <section>
      //некоторая разметка карточки продукта
      <Button name={"Купить"} onClick={addProduct} />
    </section>
  }
  function Order (props) {
    function createOrder () {
      // некоторая сложная бизнес-логика добавления товара в корзину
    }
    return <section>
      // некоторая разметка страницы оформления
      <Button name={"Оформить заказ"} onClick={createOrder} />
    </section>
  }


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
  перехват функций в чужих процессах. Т.е. мы выполняем действия автоматически в зависимости от того, что было выполнено в другом процессе
//1. хук useState - для работы с состоянием, позволяет использовать состояние в функциональных компонентах.
  Он принимает начальное состояние и возвращает массив. Первый элемент массива представляет собой текущее состояние, а второй элемент — функцию для изменения этого состояния.
  useState можно вызывать только внутри компонента, useState нельзя вызывать в инструкциях ветвления if, for и так далее.
  state не приходит извне, а является частью самого компонента и находится внутри него. Изменение состояния — это реакция на внешние действия: клики пользователя
  Для каждого экземпляра компонента будет создано своё собственное значение состояния [..., ...] = React.useState(..)
  Компоненты, которые расположены на одном уровне, не могут влиять и не могут учитывать состояние друг друга.
    Чтобы пользователь мог открыть только одну статью одновременно, вы должны управлять этим состоянием в вышестоящем компоненте.
    Родительский компонент управляет состоянием, а потомки получают его в качестве параметра.

  В коде мы объявили переменную count и функцию setCount и использовали для этого деструктуризацию массива.
  Затем используем count для отображения количества нажатий кнопки и setCount (функция «сеттер», которая позволяет изменять состояние) для обновления состояния count.
  useState() — это функция, которая принимает один аргумент. В нём необходимо передать начальное состояние.
  Каждый раз при изменениях, React перерисовывает элементы так, чтобы они соответствовали новому состоянию компонента. */
  function Example() {
    const [count, setCount] = React.useState(0);
      //const [count, setCount] = React.useState(0) - это состояние
        //count - текущего значения состояния
        //setCount - функции для его изменения
        //0 - начальное состояние, может быть, а также: true, false, null, string, int
    setCount(prevCount => prevCount + 1); //prevCount => prevCount + 1 - это функция обновление, которая получает актуальное состояние как аргумент
      //prevCount = count
    setCount(count + 1); //или так, в сокращенной форме

    const [isOpen, setOpen] = React.useState(false);
    const handleClick = () => { //handleClick - функция обработчик. пользовательские события обрабатываются с помощью функций-обработчиков
      //Они вызываются, когда пользователь совершает определённое действие, например, кликает на элемент.
      //обработчик события используется для изменения состояния компонентов приложения (через setOpen / setCount)
      setOpen(!isOpen); //setOpen((state) => !state); - можно и через эту функцию обновления, state - универсальный параметр

      const Words = {
        german,
        italian
      };
      const getWords = (type) => [...Words[type]];
      const [words, setWords] = React.useState(() => getWords('german')); //функция будет возвращать нужный набор данных по его имени.
    };
    return (
      <div>
        <p>Вы нажали {count} раз</p> //разметка, которая зависит от состояния
        <button
          onClick={() => setCount(count + 1)}>
          Нажми меня
        </button>
        <button
          onClick={handleClick} className="more" type="button"
          onClick={() => setOpen(true)} //можно сразу так
        >
          {isOpen ? 'Закрыть' : 'Открыть'}
        </button>
      </div>
    );
  }
  //пример 2
    const Button = (props) => {
      const [click, setClick] = React.useState(0)
      const handleClick = () => {
        setClick(click + 1)
      }
        return (
          <button onClick={handleClick}>{props.text}</button>
          <button onClick={() => setClick(click + 1)}>{click}</button> //или через анонимную функцию
      )
    }


  //типовые команды для работы с массивом в состоянии (state)
    //Добавление элемента в массив-состояние
      //setItems([...items, newItem]);
    //Удаление элемента из массива-состояния
      //setItems(items.filter(item => item.id !== id));
    //Обновление всех элементов массива-состояния
      //updateItem - функция-модификатор элементов массива
      //setItems(items.map(updateItem));
    //Сброс массива-состояния
      //setItems([]);

/* Хуки
//2. хук useEffect - позволяет компоненту совершать какую-либо побочную операцию после отрисовки компонента.
  Это может быть запрос данных с сервера, обработка медиазапросов или управление таймерами.
  Хук useEffect не возвращает значения, как это делают другие хуки, такие как useState.
  Он используется для регистрации «эффекта», который будет вызван после рендеринга компонента, и может останавливаться при его удалении.
  useEffect принимает на вход два аргумента:
    Первый аргумент — функция, которая будет вызываться после рендеринга компонента. Она называется «эффект».
    Второй аргумент — массив зависимостей, которые указывают useEffect на то, когда нужно перезапустить эффект.
  useEffect вызывается каждый раз, когда компонент отрисовывается, и проверяет зависимости. Если зависимости изменились, эффект будет запущен заново */

  //пример реализации - таймеры, Хук useEffect может запустить таймер, будучи уверенным, что никакие параметры и состояния в этот момент не изменятся: рендеринг (отрисовка) уже закончился.
  //Если вам нужно использовать таймер в зависимости от состояния компонента, можете передать это состояние в качестве второго аргумента useEffect, чтобы убедиться, что таймер остановится и перезапустится при изменении этого состояния. Пустой массив зависимостей означает, что эффект будет запущен только один раз.
  //Эффект-функция может возвращать функцию очистки, которая вызывается, когда компонент размонтируется (уничтожается). Функция очистки нужна для отмены таймера или отписки от события.
  function MyComponent() {
    React.useEffect(() => {
      const timerID = setTimeout(() => { // Выполнится один раз после отрисовки компонента
        console.log('Hello from timer!');
      }, 1000);

      return () => clearTimeout(timerID); // Будет вызвана при уничтожении компонента
    }, []);

    return <div>Компонент с таймером</div>;
  }
  //пример 2 (без setTimeout)
    const Button = (props) => {
      const [click, setClick] = React.useState(0)
      const handleClick = () => {
        setClick(click + 1)
      }
      React.useEffect(() => { //после каждого вызова setClick (это "эффект" - первый аргумент) (т.е. после смены любого состояния) будет меняться заголовок документа
        document.title = `Вы нажали ${click}`;
      })
        return (
          <button onClick={handleClick}>{props.text}</button>
      )
    }

//Паттерны
  //«Композиция» - один реакт компонент вызывает (содержит в себе) другой

  //«Подъем состояния»
    //Вынести состояние в родительский компонент и передавать его в качестве параметра для дочерних компонентов
    //При смене компонентов с Calendar на Tariff и обратно локальное состояние этих компонентов сбрасывается.
      //И если пользователь решит вернуться на предыдущую страницу, он не увидит выбранные им данные. Для этого из компонента Calendar и Tariff используем «подъем состояния» в компонент App
  //Derived state(или производное состояние) в React — это состояние, которое вычисляется на основе других состояний или свойств компонента.

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

//Импорт и экспорт
  //Именованное импортирование. Именованных значений можно экспортировать сколько угодно
  //module1.js
  //Чтобы переменную или другую сущность из одного модуля (module1.js) можно было использовать в другом (module2.js), перед ней нужно указать ключевое слово export:
  //Экспорт в момент создания
  export const variable = 0;
  //module2.js
  //Теперь константу variable из модуля module1.js можно использовать во всех остальных модулях проекта, для этого нужно использовать import:
  import { variable } from './module1.js';
    //variable - сущность, которую мы хотим импортировать
    //'./module1.js' - путь до модуля, т.к. в данном примере module1.js и module2.js находятся в одной папке

  //Экспорт по умолчанию. Экспорт по умолчанию внутри модуля может быть только один
  //module1.js
  const variable = 3.14; //при импортировании по умолчанию тут без export
  export default variable; //экспорт по умолчанию
  export default [12, 22, 31]; //еще пример, можно при дефолтном экспорте не указывать имена классов, функций и переменных, а при импорте дать им имя (random)
  //module2.js
  import random from './module1.js'; //random - можно указывать любое название

  //Экспорт после создания
  const array = [1, 2, 3, 4];
  const arrSquared = arr.map(item => item * item);
  export { array, arrSquared }; // экспорт нескольких значений

  //Экспорт с другим именем: директива export as
  const array = [1, 2, 3, 4];
  export { array as arr };   // переименовали при экспорте
  //а в импорте уже используем новые имена
  import { arr } from './constants.js';

  //Если импортировать нужно всё, то поставить *
  import * as data from './data.js';
  console.log(data.name); //в data теперь экспортированный name

  //директива import as
  //Длинные имена модулей можно сокращать и при импорте:
  import { array as arr, arrSquared as sq } from './data.js'

//Наследование
  import logo from "./img/logo.jpg" //импорт картинок
  export class Header extends React.Component { //extends - наследование
    helpText = "Help Text";
    render() { //render() функция, но писать function необязательно
      return (
        <h1>{this.helpText}</h1> //this - для обращения к переменной в этом же классе (используется только в классах)
        <Header2 className="headers" title="Header2" /> //для использования стилей для .headers из styles.css
        <Header2 title="HeaderNew" />
        <Image image={logo} />
        <img src={logo} /> //или так
      )
    }
  }
  export class Header2 extends React.Component {
    render() {
      return (
        <h1>{this.props.title}</h1> //props.title - обращение (режим чтения) к тому, что передается в title, см. в title="Header2" в компоненте Header
      )
    }
  }
  export class Image extends React.Component {
    render() {
      return (
        <img src={this.props.image} /> //при вызове Image возвращается в img то, что мы передали
      )
    }
  }

//Конструктор constructor
  export class ApplicationError extends Error {
    constructor(props) { //constructor - конструктор
      super(props); //super - вызвать конструктор данного класса (класса ApplicationError)
      this.name = this.constructor.name;
    }
  }
  export class NotImplementedError extends ApplicationError {
    constructor() {
      super("Operation not implemented");
    }
  }

//Состояния state
  export class ErrorBoundary {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false,
        helpText: "Help Text",
        helpText2: ""
      }
      this.onHandleClick = this.onHandleClick.bind(this); //bind - вызывает событие
        //вся эта конструкция нужна для наших собственных (кастомных) методов onHandleClick
        //для onChange (см. ниже) не надо
    }
    render() {
      return (
        <h1>{this.state.helpText}</h1>
        <button onClick={this.onHandleClick}></button>

        <h2>{this.state.helpText2}</h2>
        <input onChange={ //onChange - срабатывает при изменении инпута (при вводе символов)
          event => this.state({helpText2: event.target.value}) //через event можно получить значение, которое ввел пользователь в инпут
            //в качестве значения helpText2 мы устанавливаем то, что ведет пользователь (event.target.value)
        }></input>
     )
    }
    onHandleClick() {
      this.React.setState({
        helpText: "Changed"
      })
    }
  }

//Дефолтные свойства defaultProps
  const Button = (props) => { //в () мы должны указать, что мы принимаем props, из которого мы используем text
    return (
      <button>{props.text}</button>
    )
  }
  Button.defaultProps = { //установка дефолтных свойств для, например, text
    text: "DefaultText"
  }
  const Header = () => {
    return (
      <Button text="Text" />
      <Button /> //вызов с дефолтным свойством text: "DefaultText"
    )
  }
//
