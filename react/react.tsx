//В React принято каждый компонент хранить в отдельном файле и при необходимости импортировать его в другие компоненты.

/* Состояние компонента — это внутренние данные в компоненте, которые меняются в процессе выполнения программы.
  В отличие от параметров, которые передаются в компонент из его родителя и не могут быть изменены внутри компонента,
  состояние может измениться в любой момент.
  Состояние обычно используется для управления поведением компонента, а параметры — для настройки его внешнего вида. */

/* Поток — это последовательность событий, распределённых во времени.
 * Потоки можно создавать практически из любых асинхронных данных:
 * событий DOM-элемента, таких как: клик, ховер;
 * промиса;
 * по таймеру или интервалу;
 * другого потока.
 * Потоки можно фильтровать, модифицировать и объединять.
 * На потоки можно подписаться и реагировать на изменения данных — вот тут реактивность и появляется. По сути, поток — реализация паттерна Observer.
 * Потоки обычно обозначаются знаком $ после названия.
 */

// import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

/* JSX — расширение языка JavaScript
  С помощью babel оно преобразуется в стандартный JavaScript
  Блок JSX-кода по правилам должен содержать только один элемент верхнего уровня
  Особенности синтаксиса:
    компонент может вернуть только один корневой элемент;
    в атрибутах используются названия свойств DOM-элементов;
    пользовательские компоненты обязательно должны начинаться с заглавной буквы;
    атрибуты пользовательских компонентов — это параметры функций;
    одиночные теги должны быть закрыты.*/


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

//!children Вывод в родителе дочернего элемента
  //в children попадает всё, что расположено между открывающим и закрывающим тегами элемента
  function HelloWorld(props) {
    return (
      <>
        <h1>Привет, Мир!!! {props.children}</h1>
        <div style={{width: '33%'}}></div> //Первые внешние фигурные скобки означают, что внутри содержится JS-выражение. А вторые внутренние — объявление JS-объекта.
        //В HTML в атрибуте style записан набор CSS-правил. А style у DOM-элементов — это специальный объект, который содержит список всех свойств стилей для этого элемента.
      </>
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

  //пример 2
  type FancyParagraphProps = {
    children: ReactNode
  }
  const FancyParagraph = (props: FancyParagraphProps): ReactElement => (
    <p className={"text-beautiful"}>
      {props.children}
    </p>
  );
  const CoolShinySwagText = (): ReactElement => (
    <FancyParagraph>Это дочерний компонент</FancyParagraph> //'Это дочерний компонент' = children
  );
  //Если текст явно передать как props children
  <FancyParagraph children={"Пицца с ананасами ужасна!"} /> // Будет выведено: Пицца с ананасами ужасна!
  //Если текст явно передать как props children + передать текст в теге
  <FancyParagraph children={"Пицца с ананасами ужасна!"}> // Будет выведено: Пицца с ананасами прекрасна!, т.к. children, описанный между тегами элемента, будет приоритетнее
    Пицца с ананасами прекрасна!
  </FancyParagraph>

  //Children как функция
  type NotificationProps = {
    children: Function,
    a: number,
    b: number
  }
  const Notification = (props: NotificationProps): ReactElement => (
    <div className="Notification">
      <p>Сумма {props.a} и {props.b} равна {props.children(3, 5)}</p>
    </div>
  );
  <Notification a={4} b={8}>
    {(a:number, b:number) => a + b}
  </Notification>

  //React.cloneElement + spread
  type ButtonProps = {
    onClick: () => void;
  }
  // Пример: Использование React.cloneElement для добавления стилей к компоненту Button
  const StyledButton = ({ children, ...props }: React.PropsWithChildren<ButtonProps>) => {
    return React.cloneElement(
      <Button>{children}</Button>,
      props
    );
  };
  const App = () => {
    return (
      <StyledButton onClick={() => console.log('Button clicked')}>Click me</StyledButton>
    );
  };


//Выделение компонентов
  function Button (props) { //Button - общий компонент для Product() и Order()
    return <button class="button" type="button" onClick={props.onClick}>{props.name}</button> //props.onClick = addProduct
  }
  function Product (props) {
    function addProduct () {
      // некоторая сложная бизнес-логика добавления товара в корзину
    }
    return (
      <Button name={"Купить"} onClick={addProduct} />
    )}
  function Order (props) {
    function createOrder () {
      // некоторая сложная бизнес-логика добавления товара в корзину
    }
    return (
      // некоторая разметка страницы оформления
      <Button name={"Оформить заказ"} onClick={createOrder} />
    )}

//Рендер списков map
  class ChatRoom extends React.Component {
    state = {
      messages: [{
        id: 1,
        user: 'Ольга',
        text: 'Привет! Можешь помочь со списками в React?',
      }, {
        id: 2,
        user: 'Николай',
        text: 'Здравствуй! Конечно, это проще простого! Какой у тебя вопрос?',
      }];
    }
    render(){
      return (
        <div className="ChatRoom">
          {this.state.messages.map((message)=>(
            <React.Fragment key={message.id}>
              <img className="Avatar" src={message.user} alt="avatar" />
              <div className="Message">
                <span className="Message-user">{message.user}</span>
                <span className="Message-text">{message.text}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    }
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
  root.render(
    React.createElement("h1", null, "Привет") ); //пример без JSX
    //h1 - Названием результирующего HTML-тега.
    //null - Дополнительными свойствами, которые прикреплены к этому тегу. Это может быть CSS-идентификатор class или id либо другие свойства.
    //"Привет" - Содержимым, которое попадёт в HTML-тег. Содержимым может быть не только текст, но и другие элементы.
    //После третьего аргумента могут идти и другие. Все они будут добавлены друг за другом внутрь создаваемого элемента, как если бы мы использовали метод appendChild.

  const renderAddress = (street: string): JSX.Element => {
    return (
      <div>
        <p>Улица {street}</p>
      </div>
    )
  }
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <section>
      <p>Я проживаю по адресу:</p>
      {renderAddress("Пушкина")}
    </section>
  );

//!Фрагменты
  //<>...</>
  //блок JSX-кода по правилам должен содержать только один элемент верхнего уровня
  //Чтобы JSX-код работал правильно, мы оборачиваем эти два элемента во фрагмент, иначе без <> получится 2 элемента верхнего уровня
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <>
      <div id="myElement">Click me!</div>
      <div id="myAnotherElement">It was clicked!</div>
    </>
  );

  //Условная логика
  //?
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  const isDaylight, isFinished, isLunchTime = true;
  root.render(
    <div>
      {isDaylight ? (
        <h2>Добрый день!</h2>
      ) : (
        <h2>Спокойной ночи!</h2>
      )}
    </div>
  );

  //&&
  //если isFinished = true, то вызовется <Modal />, Если же isFinished равно false, то выражение вернёт false и <Modal /> не вызовется
  <div> { isFinished && <Modal /> } </div>
  //пример 2
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <div>
      {isLunchTime && <h2>Время обеда!</h2>}
    </div>
  );

//!props свойства элементов
  /**
   * for = htmlFor
   *  class = className
   *  tabindex = tabIndex
   *  xlink:href = xlinkHref
   *  <img> = </img>
   *  onclick = onClick - на элемент кликнули
   *  tabindex = tabIndex
   *  fill-rule = fillRule
   *  overline-thickness = overlineThickness
   *  stroke-width = strokeWidth
   *  onmouseover = onMouseOver
   *  ... = onMouseEnter - мышка наводится на элемент
   *  ... = onMouseLeave - мышка перестала наводиться на элемент

   Как и аргумент, пропс может быть чем угодно: функцией, объектом, массивом, строкой, числом, другим компонентом, элементом.
  Пропсы можно только читать
  Значение пропсов по умолчанию равно true */

  //пример 1 События мыши
  function Button() {
    function print() {
      console.log('Вы нажали на кнопку')
    }
    return <button type="button"
                   onClick={print}
                   onClick={() => alert('Hello world')}
                   onMouseOver={() => console.log('Mouse detected!')}></button>
  }

  //пример 2 События мыши
  //чтобы обратиться к объекту события (например, чтобы получить больше информации о событии или обратиться к DOM-элементу, на котором произошло событие)
  //мы должны определить параметр (например, evt) в функции-обработчике события. В него будет подставлен объект события,
  //но это ненативный объект события, который устанавливается браузером. Вместо нативного объекта, React предоставляет экземпляр SyntheticEvent — синтетическое событие
  //В React обработчик события добавляется не напрямую к DOM-элементу, а к React-компоненту, который в свою очередь рендерит соответствующий элемент.
  //Когда происходит событие, React создает объект SyntheticEvent и передает его в обработчик события, который был задан в качестве пропса в компоненте.
  function App() {
    return (
      <button onClick={(evt) => console.log(evt)}>
        Нажми на меня
      </button>
    );
  }

  //пример 3 События мыши
  type TitleProps = {
    title: string
  }
  function Title(props: TitleProps) {
    const handleMouseEnter = (e: React.MouseEvent) => {
      console.log(e.clientX, e.clientY); // будут выведены координаты курсора, где сработало событие
    };
    return <h1 onMouseEnter={handleMouseEnter}>{props.title}</h1>
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

  //пример 4
  export const App = () => {
    return (
      <Welcome
        userName="userName"
        welcomText="welcomText"
      />
    );
  };
  type WelcomeProps = {
    userName: string;
    welcomText: string;
  };
  export default function Welcome({ userName, welcomText }: WelcomeProps): ReactElement {
    return (
      <>
        <div className="name">{userName}</div>
        <div className="welcomText">{welcomText}</div>
      </>
    );
  }

  //пример 5
  type ProductProps = {
    name: string,
    price: number
  }
  const Product = (props: ProductProps): ReactElement => (
    <div>
      <p>{props.name}</p> {/* Гидрокостюм для дайвинга */}
      <span>{props.price}</span> {/* 14299 */}
    </div>
  );
  const ShoppingCart = (): ReactElement => (
    <>
      <h1>Корзина товаров</h1>
      <Product name="Гидрокостюм для дайвинга" price={14299}  />
    </>
  );

  //пример 6
  type CardProps = {
    title: () => {};
    body: () => {};
  }
  function Card(props: CardProps) {
    return (
      <div className="card">
        <CardTitle />
        <CardBody />
        <button type="button">В корзину</button>
      </div>
    );
  };
  function CardTitle() {
    return (
      <h5 className="card-title">Звезда Сириус</h5>
    );
  };
  function CardBody() {
    return (
      <div className="card-body">
        <p>
          Звезда созвездия Большого Пса. Звезда главной последовательности,
        </p>
        <div className="price">Цена: ооооочень много</div>
      </div>
    );
  };
  export const Apps = () => {
    return (
      <Card title={CardTitle} body={CardBody} />
    );
  };

  //JavaScript-выражения как пропсы
  //пример 1
  <MusicGenreItem genre={'rock' + '&' + 'roll'} /> //props.genre равно rock&roll, потому что выражение 'rock' + '&' + 'roll' будет вычислено
  //пример 2
  function sayHi(name:string): string {
    return `Привет, ${name}!`
  }
  <WelcomeComponent textToRender={sayHi('React')} />

  //Строковые литералы как пропсы
  <WelcomeComponent name="Екатерина" />
  <WelcomeComponent name={'Екатерина'} />
  <WelcomeComponent name={`Екатерина`} />
  <WelcomeComponent name='Екатерина' />

  //Атрибуты расширения
  type CustomerPageProps = {
  profileData: {
    firstName: string,
    lastName: string
    }
  }
  function CustomerPage(props: CustomerPageProps): ReactElement {
    return (
      <ProfileInfo
        firstName={props.profileData.firstName}
    lastName={props.profileData.lastName}
    />
  );
  }
  //вар 2
  function CustomerPage(props: CustomerPageProps): ReactElement {
    return <ProfileInfo {...props.profileData} />; //деструктуризация
  }

//!События
  //Event: SyntheticEvent — это объект, который состоит из описания события, произошедшего в DOM
  //SyntheticEvent - обёртка над интерфейсом, синтетическое событие
    //Синтетическое событие в React — это абстракция браузерного события, предоставляемая React для работы с событиями в виртуальном DOM. React создает собственную систему обработки событий для упрощения и стандартизации работы событий в компонентах.

  //События мыши SyntheticEvent
  //пример, onFocus, onBlur
  //При клике на инпут (или при фокусировании с помощью Tab) будет срабатывать событие onFocus, а при уходе с инпута - onBlur.
  function BigDiv(): ReactElement {
    const handleFocus = (e: SyntheticEvent) => {
      console.log('Инпут в фокусе');
    };
    const handleBlur = (e: SyntheticEvent) => {
      console.log('Инпут потерял фокус');
    };
    return (
      <div>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Введите что-нибудь"
        />
      </div>
    );
  }

  //События клавиатуры KeyboardEvent
  //onKeyDown — срабатывает при нажатии клавиши (Событие onKeyPress устарело)
  //onKeyPress — срабатывает при нажатии клавиши, показывает введённый символ;
  //onKeyUp — срабатывает, когда клавишу отпустили.

  //пример, код ниже, выводит информацию о событии, только по клику на Esc
  function Escape(): ReactElement {
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.key === 'Escape') {
        console.log(e);
      };
    };
    return (
      <input onKeyUp={handleKeyUp} />
    )
  }

  //События формы FormEvent
  //onChange (или onInput) — в поле ввода происходит изменение (событие onChange всплывает.)
  //onSubmit — отправка формы;
  //onInvalid — при отправке формы есть некорректно заполненные поля;
  //onReset — сброс формы.

  //пример отправки формы
  function FormName(): ReactElement {
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const defaultWasPrevented = e.defaultPrevented; // записываем в переменную отменены действия по умолчанию или нет
      if (defaultWasPrevented) {
        console.log(e);
      }
    };
    return (
      <form action="" onSubmit={handleSubmit}>
        <input />
      </form>
    )
  }

//Регистрация событий
  //Когда происходит какое-либо событие, на самом деле оно возникает не на самом целевом элементе сразу, а всё происходит в 3 фазы
  //Фаза захвата (Capture Phase): Событие начинается с верхнего элемента в DOM и погружается вниз до целевого элемента. В этой фазе события обрабатываются на вложенных элементах перед тем, как достигнуть целевого элемента.
    //возможно регистрировать события не на фазе всплытия, а на фазе захвата. Для этого нужно просто на целевом элементе к названию нужного события добавить слово Capture
  //Целевая фаза (Target Phase): Событие достигает целевого элемента, где обрабатывается.
  //Фаза всплытия (Bubbling Phase): После обработки целевого элемента событие начинает всплывать обратно вверх по иерархии DOM, начиная с целевого элемента и заканчивая верхним элементом.
    //По умолчанию регистрация событий в React происходит на фазе всплытия.

  //Фаза захвата
  function DissatisfiedButton(): ReactElement {
    function handleCaptureClick() { // Добавим хендлер для события, зарегистрированного на фазе захвата.
      console.log('В консоль выйдет первым')
    }
    function handleAgressiveButtonClick() {
      console.log('В консоль выйдет вторым');
    }
    function handleClickBubble() {
      console.log('В консоль выйдет третьим')
    }
    return (
    <div onClick={handleClickBubble} onClickCapture={handleCaptureClick}>
      <button
        onClick={handleAgressiveButtonClick}
      >
        Поиграй со мной!
      </button>
    </div>
    )
  }


//Стили scc
  const planet = 'Земля';
  const styles = {
    width: 6792,
    height: 6752,
    borderRadius: '50%',
    background: 'white',
    color: 'black',
  };
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <div style={styles}>Какая я планета?</div>
  );
  //Значение можно задать сразу без промежуточной переменной styles
  //Не указывать размерность для значений в пикселях
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <div style={{
      width: 3475,
    }}>
      Я тоже хочу быть планетой!
    </div>
  );

  //Библиотека clsx
  const menuStyle = clsx({
    [classes.root] : true, // будет добавлен всегда
    [classes.menuOpen] : open // будет добавлен только когда open === true
  })

  function Menu(): ReactElement {
    return (
      <div className={menuStyle}>Пункты меню</div>
    )
  }

//Подключение изображений
  import logo from "./logo.jpg";
  function Child(): ReactElement {
    return (
      <div>
        <img src={logo} alt="логотип" />
      </div>
    );
  }

//Самозакрывающиеся теги
  //Если у элемента нет внутреннего содержимого, то тег должен быть самозакрывающимся
  <img src="logo.png" />

//Комментарии в JSX
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <div>
      {/* Это комментарий к элементу label */}
      <label htmlFor="title">
        {/* Этот комментарий многострочный, в нём можно написать подсказку для коллег. */}
        <input id="title" type="text" />
      </label>
    </div>
  );

//Функциональные компоненты
  //Функции возвращают 1 из 3 типов значений:
    //ReactElement — это интерфейс в React. Он определен в самой библиотеке React. Это виртуальное представление элемента в DOM. Он включает в себя информацию о типе элемента, его свойствах (props), дочерних элементах.
    //JSX.Element — это аналог ReactElement, но предоставляется TypeScript, а не React.
    //ReactNode — это тип, представляющий любой узел в дереве React, включая ReactElement, строку, фрагмент, массив и т. д.

//!Хуки
  //Хук — это функция. Хуки нельзя вызывать внутри условных конструкций, циклов или функций, определённых внутри компонента.
  //import {useState} from "react"

  /* 1. хук useState - для работы с состоянием, позволяет использовать состояние в функциональных компонентах.
  Он принимает начальное состояние и возвращает массив. Первый элемент массива представляет собой текущее состояние,
  а второй элемент — функцию для изменения этого состояния.
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
    const [count, setCount] = React.useState(0); //0 - начальное состояние, может быть, а также: true, false, null, string, int
    setCount(prevCount => prevCount + 1); //prevCount => prevCount + 1 - это функция обновление, которая получает актуальное состояние как аргумент
      //prevCount = count
    setCount(count + 1); //или так, в сокращенной форме

    //React поместит эти три функции prevCount => prevCount + 1 в очередь, и они будут последовательно вызваны для обновления состояния при следующей перерисовке компонента.
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); //count = 3
    //так не правильно
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

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

  //пример 3
  const Button = (props) => {
    const [click, setClick] = React.useState(false)
    function handleClick(arg) {
      setClick(arg)
    }
    return (
      <button onClick={() => handleClick(true)}>{props.text}</button>
    )
  }

  //пример 4
  function ThemeToggle() {
    const [theme, setTheme] = useState("светлая");
    const toggleTheme = () => {
      setTheme(theme === "светлая" ? "тёмная" : "светлая");
    }
    const themeClass = theme === "светлая" ? "th-light" : "th-dark";
    const buttonImage = theme === "светлая" ? "🌚" : "🌞";
    return (
      <div className={themeClass}>
        <p>Включена {theme} тема</p>
        <button onClick={toggleTheme}>
          {buttonImage}
        </button>
      </div>
    );
  }

  //пример 5. Вычисление начального состояния
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem("item");
      return item ? JSON.parse(item) : "";
    } catch {
      return "";
    }
  });

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

  //Мутации сложных объектов
  //пример 1
  const [array, setArray] = useState(["Раз", "Два", "Три" ]);
  // Так нельзя!
  array.push("Четыре");
  setArray(array);
  // Нужно делать так:
  setArray([...array, "Четыре"]);

  //пример 2
  type TPerson = {
    name: string,
    surname: string
  };
  const [person, setPerson] = useState<TPerson>({
    name: "Василий",
    surname: "Свиридов"
  });
  // Так нельзя!
  person.name = "Иван";
  setPerson(person);
  // Нужно делать так
  setPerson({
    ...person,
    name: "Иван"
  });

  /* 2. хук useEffect - позволяет компоненту совершать какую-либо побочную операцию после отрисовки компонента.
  Хук useEffect не возвращает значения, как это делают другие хуки, такие как useState.
  Он используется для регистрации «эффекта», который будет вызван после рендеринга компонента, и может останавливаться при его удалении.
  useEffect принимает на вход два аргумента:
    Первый аргумент — функция обратного вызова, которая будет вызываться после рендеринга компонента. Она называется «эффект».
    Второй аргумент — массив зависимостей, которые указывают useEffect на то, когда нужно перезапустить эффект, он необязательный
      Если не передать второй аргумент, побочный эффект в функции обратного вызова будет запускаться снова после каждой отрисовки компонента
      Если мы передаём второй аргумент в виде пустого массива [], побочный эффект в функции обратного вызова сработает только один раз после первого рендера компонента.
  useEffect вызывается каждый раз, когда компонент отрисовывается, и проверяет зависимости. Если зависимости изменились, эффект будет запущен заново
  useEffect использует только поверхностное (shallow) сравнение значений зависимостей.
    Если значение зависимости представляет собой массив или объект, то эффект будет вызван повторно только тогда, когда в зависимость будет передан новый массив или объект. Изменения элементов массива или полей объекта хук useEffect обнаружить не сможет. */

  //пример 1
  // Этот побочный эффект будет выполняться после первого рендера и после последующих перерендеров, вызванных изменениями значений пропса prop или состояния state
  function SomeComponent({prop}: TSomeType) {
    const [state, setState] = useState("");
    useEffect(() => {
    }, [prop, state]);
  }

  //пример 2 c localStorage
  const [initStyle, setInitStyle] = React.useState(false);
  React.useEffect(() => {
    if (initStyle) { //initStyle = true
      localStorage.setItem('initStyle', JSON.stringify(initStyle)); //initStyle = true
    }
  }, [initStyle]);
  const handleClick = () => {
    setInitStyle(true);
  };
  return <a onClick={handleClick}></a>

  //пример 3 реализации - таймеры, Хук useEffect может запустить таймер, будучи уверенным, что никакие параметры и состояния в этот момент не изменятся:
  //рендеринг (отрисовка) уже закончился.
  //Если вам нужно использовать таймер в зависимости от состояния компонента, можете передать это состояние в качестве второго аргумента useEffect,
  //чтобы убедиться, что таймер остановится и перезапустится при изменении этого состояния. Пустой массив зависимостей означает, что эффект будет запущен только один раз.
  //Эффект-функция может возвращать функцию очистки, которая вызывается, когда компонент размонтируется (уничтожается).
  //Функция очистки нужна для отмены таймера или отписки от события.
  function MyComponent() {
    React.useEffect(() => {
      const timerID = setTimeout(() => { //Выполнится один раз после отрисовки компонента
        console.log('Hello from timer!');
      }, 1000);

      return () => clearTimeout(timerID); //Этот побочный эффект выполняется при размонтировании компонента (при уничтожении компонента)
    }, []);

    return <div>Компонент с таймером</div>;
  }

  //пример 4 с таймером. Время на часах обновлялось каждую секунду
  const Appss = () => {
    const [clock, setClock] = useState(new Date());
    useEffect(() => {
      const timerID = setTimeout(() => {
        setClock(new Date(clock.getTime() + 1000))
      }, 1000);
      return () => clearTimeout(timerID);
    }, [clock]);
    const formattedTime = clock.toLocaleTimeString();
    return (
      <div>
        <h1 className='clock'>{formattedTime}</h1>
      </div>
    );
  };

  //Функция очистки хука useEffect
  function SomeComponent() {
    useEffect(() => {
      // Этот побочный эффект выполняется после первого рендера компонента
      return () => {
        // Этот побочный эффект выполняется при размонтировании компонента
      }
    }, []);
  }

  //пример 1. Мы хотим, чтобы была возможность закрывать это окно по нажатию на клавишу Esc
  type TModalProps = {
    onClose: () => void
  }
  function Modal({onClose}: TModalProps) {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        e.key == "Escape" && onClose();
      };
      document.addEventListener("keydown", handleEscape); //подписаться на событие нажатия на клавишу Esc при монтировании компонента
      return () => {
        document.removeEventListener("keydown", handleEscape); //отписаться от этого события
      };
    }, []);
  }

  //пример 2. пользователь вводит некоторый текст и необходимо отправить на сервер поисковый запрос с этим текстом
  function SearchForm() {
    const [query, setQuery] = useState(""); //В стейте query хранится текст, по которому нужно осуществлять поиск
    const [result, setResult] = useState(""); //в стейт result записываются результаты запроса.
    useEffect(() => {
      if (!query) {
        setResult("");
        return;
      }
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(API, {
        signal,
        body: JSON.stringify({query})
      })
        .then(response => response.json())
        .then(response => setResult(response.data))
      return () => {
        controller.abort(); // Отменяем запрос
      }
    }, [query]);
  }

  /* 3. хук useRef
  Хук позволяет компоненту взаимодействовать с DOM-элементами или запоминать данные, изменение которых ему не требуется отслеживать */
  const ref = useRef<TSomeType>(initialValue)

  //пример 1. Компонент ExchangeRate выводит курс валюты
  type TExchangeRateProps = {
    rate: number;
  }
  const ExchangeRate = ({ rate }: TExchangeRateProps) => {
    const rateRef = useRef<number | null>(null);
    const [color, setColor] = useState('gray');
    useEffect(() => {
      const oldRate = rateRef.current;
      if (rate > oldRate) {
        setColor('green');
      } else if (rate < oldRate) {
        setColor('red');
      } else {
        setColor('gray');
      }
      rateRef.current = rate; // Не забываем обновить значение вручную
    }, [rate]);
    return <div style={{ color }}>{rate}</div>;
  }

  //пример 2. требуется выставить фокус ввода на поле ввода при отображении компонента
  const TextInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
      inputRef.current!.focus();
    }, []);
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" ref={inputRef} />
      </div>
    );
  };

  //пример 3. Сменить цвет по нажатию кнопки
  export const Appq = () => {
    const headerRef = useRef(null);
    const handleChangeColor = () => {
      if (headerRef.current) {
        headerRef.current.style.backgroundColor = 'gold';
      }
    };
    return (
      <div className="page">
        <h1 className="header" ref={headerRef}>Я меняю свой цвет</h1>
        <div className="card">
          <button onClick={handleChangeColor}>Изменить цвет!</button>
        </div>
      </div>
    );
  };

  //ref Callback
  type TUser = {
    id: string;
    name: string;
  }
  type TUserListProps = {
    users: Array<TUser>
  }
  function scrollTo(el: HTMLLIElement | null) {
    if (el) { // При первой отрисовке или при размонтировании el будет равен null, поэтому нужно добавить проверку
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  function UserList({ users }: TUserListProps) {
    return (
      <ul>
        {users.map((user, i) => {
          const isLast = i === users.length - 1;
          // ref callback, осуществляющий скролл до последнего элемента
          return (
            <li
              key={user.id}
              ref={isLast ? scrollTo : undefined}
            >
              {user.name}
            </li>
          );
        })}
      </ul>
    );

  /* 4. хук useLayoutEffect
  Выполняет свой колбэк синхронно, То есть сразу после того, как React выполнит все изменения в DOM, и до того, как эти изменения будут отрисованы
  В колбэке хука useLayoutEffect мы можем изменить расположение или внешний вид DOM-элемента */
  function SmoothScrolling() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
      const container = containerRef.current!;
      const handleScroll = () => {
        container.scrollTo({ // Плавная прокрутка содержимого контейнера вверх
          top: 0,
          behavior: "smooth",
        });
      };
      handleScroll(); // Прокрутка содержимого контейнера вверх при монтировании компонента
      // Добавляем обработчик для прокручивания содержимого контейнера вверх при прокрутки пользователем самой страницы
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <div ref={containerRef}>
        {/* Содержимое контейнера */}
      </div>
    );

  /* 5. кастомные хуки */
  //useLocalStorage - хук, который будет сохранять состояние компонента в локальном хранилище браузера
  function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
      const [value, setValue] = useState<T>(() => {
          try {
              const item = window.localStorage.getItem(key);
              return item ? JSON.parse(item) : initialValue;
                  } catch {
            return initialValue;
          }
      });
      useEffect(() => {
          try {
              const item = JSON.stringify(value);
              window.localStorage.setItem(key, item);
          } catch (error: Error) {
            console.log(error.message);
          }
      }, [value]);
      return [value, setValue];
  }


//Подъём состояния через пропсы
  type TUser = {
    name: string;
  }
  const App = () => {
    const [user, setUser] = useState<TUser | null>(null);
    const handleLogin = (user: TUser) => setUser(user);
    return (
      <div>
        <Header />
        { user
          ? <Dashboard user={user} /> //Компоненту Dashboard требуются данные о пользователе, чтобы отобразить их на экране
          : <Login onLogin={handleLogin} /> //Компонент Login изменяет эти данные, поэтому они и были подняты в родительский компонент App.
        }
        <Footer />
      </div>
    );
  };

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

//map для массива
  <ul>
    {[
        'Первый элемент списка',
        'Тест2'
      ].map((item) => <li>{item}</li>) //Если метод вернёт JSX, то элементы будут отрендерены.
    }
  </ul>

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

//Наследование extends
  import logo from "./img/logo.jpg"
import { ReactElement, ReactNode } from 'react';
  //import { ReactElement } from 'react'; //импорт картинок
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

//Жизненный цикл в функциональных компонентах
  //Для управления жизненным циклом без классовых методов в функциональных компонентах используются хуки useEffect и useLayoutEffect.
  //Хук useEffect, содержит в себе три метода жизненного цикла:
    //componentDidMount,
    //componentDidUpdate,
    //componentWillUnmount.

  //Действия при монтировании (единожды)
  useEffect(() => {
    // Ваш код для запуска один раз при монтировании
  }, []);

  //Действия при обновлении
  useEffect(() => {
    // Код для выполнения при обновлении компонента,
    // когда изменяются зависимости, указанные в массиве ниже
  }, [firstDependency, secondDependency]);

  //Действия при размонтировании
  useEffect(() => {
    // Код для запуска при монтировании
    return () => {
      // Код для выполнения при размонтировании
    };
  }, []);

  //пример
  function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timeout>();
    const [date, setDate] = useState(new Date());
    /* функция в хуке будет вызываться на componentDidMount и componentDidUpdate методы жизненного цикла */
    useEffect(() => {
      setTimerId(setInterval(() => setDate(new Date()), 1000));
      // функция, которую возвращает useEffect, будет вызвана при размонтировании компонента, то есть она соответствует методу жизненного цикла - componentWillUnmount
      return () => clearInterval(timerId);
    }, []);
      return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
