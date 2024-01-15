//Ванильный js ------------------------------
/*Типы данных:
    number — числа: целые и с точкой; простые типы данных
    string — строки; простые типы данных
    boolean — логические, или булевы, значения: true — «истина» и false — «ложь». простые типы данных
    undefined — undefined; простые типы данных
    массивы - для хранения однородных элементов, хранит последовательность значений, и порядок этих значений важен. сложные, или составные, типы данных
    функции - ;
    объекты - состоит из множества пар «ключ-значение», порядок этих пар не важен; сложные, или составные, типы данных
        {month: 'june', day: 15}
Составные типы содержат не одно, а несколько значений

Операция сложения — бинарная, так как в ней два операнда.
    Cуществуют и унарные операции, с одним операндом, и тернарные операции, с тремя операндами.
    Приоритет операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Конкатенацией - сложение строк (“catenate” — «связывать в одну цепь».)
Зарезервированные слова https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%9A%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0

*/
console.log(21 + "2"); //"212"
    console.log(2 ** 3); // возведение в степень. выведет в консоль 8
    console.log((2 + 2) / 2);
    console.log(4 * 3 ** 2); // = 4 * 3 в степени 2
    console.log(document.querySelector('.page'));
    console.log('Время, мин: ' + 50); // = 'Время, мин: 50'. Плюс может быть знаком сложения или конкатенации, но так как один из операндов — строка, то сложение не подходит. Поэтому число 50 приводится к строке '50' и склеивается со строкой 'Время, мин: '.
    console.log('2' * 50); // = 100. Звёздочка — это знак умножения, со строками она не используется. Поэтому JavaScript пытается превратить строку '2' в число, и ему это удаётся. Затем числа 2 и 50 перемножаются, и получается 100.

//Мат операции
/*  //%
    1 % 3: 1. Поскольку 1 не делится на 3 нацело, остаток равен самому числу, то есть 1. Поэтому результат равен 1.
    2 % 5: 2. Поскольку 2 не делится на 5 нацело, остаток также равен самому числу, то есть 2. Поэтому результат равен 2.
    3 % 3: 0. В данном случае 3 делится на 3 нацело (1 раз), поэтому остаток равен 0. Поэтому результат равен 0.
*/


//Приведение к типу
  String(1); // Выведет строку: 1 (String)
      toString(1); // Выведет строку: 1 (String)
      Number('1'); // Выведет число: 1 (Number)
      parseInt('17');   // Вернёт 17
      parseInt('10001', 2); // Вернёт 17
      parseInt('11', 16);   // Вернёт 17
/* Приведение к логическому типу данных
    Значения, которые как бы ничего в себе не содержат (как 0, пустая строка '' или undefined), приводятся к false, а все остальные приводятся к true */

let pages = 0;
    pages++; //Увеличит число на 1. Значение переменной: 1
    pages--; //Уменьшит число на 1. Значение переменной: 0

//Date
  //Если параметры метода не указаны, то он использует настройки браузера для локализации даты.
  //getDay() - выяснить день недели для указанной даты в виде целого числа от 0 до 6.
    //У метода есть одна особенность началом недели он считает воскресенье, то есть число 0 соответствует воскресенью, 1 — это понедельник, 2 — вторник, 6 — суббота
  const date = new Date('2023-03-05');
  const options = { day: "numeric", month: "short" }; //вывести день числом, а месяц в сокращённом формате
    const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //В консоли отобразится "воскресенье, 5 марта 2023 г."
    //Для форматирования даты на русском языке используется локаль «ru».
  new Date(date).toLocaleDateString('ru-RU', options); //date - объект класса Date

  const formatDate = (date) => new Date(date).toLocaleDateString("ru", {
    day: "numeric",
    month: "short",
  }); //Функция formatDate вернёт дату в виде 5 мар.
  const getWeekday = (date) => new Date(date).toLocaleDateString("ru", {
    weekday: "short"
  }); //Функция getWeekday вернёт дату в виде первых двух букв для недели — вс.


//операторы
    //оператор строгого равенства, тут нет приведения типов. https://htmlacademy.ru/courses/209/run/5
      'a' === 'a'; // Результат: true
      'a' !== 'a'; // Результат: false
    //оператор нестрогого равенства, тут есть приведение типов
      'a' == 'a'; // Результат: true
    //оператор нестрогого неравенства
      'a' != 'a';
    //логическое И
      //true && true - возвращает значение true, если оба операнда равны true.
      //сокращенное вычисление логического выражения в реакте
      <div> { isFinished && <Modal /> } </div> //если isFinished = true, то вызовется <Modal />, Если же isFinished равно false, то выражение вернёт false и <Modal /> не вызовется
    //логическое ИЛИ
     //true || true - возвращает true, если хотя бы один из операндов равен true.
  //Сравнение чисел - сравнивает два объекта по полю economy. Если значение поля economy у объекта a меньше, чем у объекта b, то функция возвращает отрицательное число (-1) и т.д.
  function compareTicketsByEconomyPrice(ticket1, ticket2) {
    if (ticket1.economy < ticket2.economy) {
      return -1;
    } else if (ticket1.economy > ticket2.economy) {
      return 1;
    } else {
      return 0;
    }
  }
    //Или тоже самое в более лаконичной форме:
      [...tickets].sort((a, b) => a.date > b.date ? 1 : -1); //Отсортируйте данные по возрастанию даты. Перед тем как сортировать данные, нужно создать их копию через [...tickets]
  //Сравнение строк - сравнение будет производиться в соответствии с лексикографическим порядком символов (сравниваются символьные коды)
  function compareStrings(a, b) {
    const stringA = a.toLowerCase();
    const stringB = b.toLowerCase();

    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  }
    //Прямое сравнение для строк, которые содержат символы кириллицы, может дать неправильный результат. Универсальный способ сравнения строк — метод localeCompare(). Метод localeCompare() сравнивает две строки в соответствии с локалью (языком), учитывая правила сортировки этого языка, и возвращает целое число, которое указывает, какая строка должна быть отсортирована перед другой строкой. Пример сортировки массива строк по алфавиту:
    const fruits = ['яблоко', 'банан', 'арбуз', 'груша'];
    fruits.sort((a, b) => a.localeCompare(b));
    console.log(fruits); // ["арбуз", "банан", "груша", "яблоко"]
    //Добавим строки со «сложными» символами в массив:
    const fruits = ['яблоко', 'банан', 'арбуз', 'груша', 'ёжик', 'йогурт'];
    fruits.sort((a, b) => a.localeCompare(b));
    console.log(fruits); // ['арбуз', 'банан', 'груша', 'ёжик', 'йогурт', 'яблоко']
    fruits.sort((a, b) => a > b ? 1 : -1);
    console.log(fruits); // ['арбуз', 'банан', 'груша', 'йогурт', 'яблоко', 'ёжик']

/* массивы
  в массиве можно хранить любые данные: строки, булевы значения, числа и даже другие массивы.
  если в массиве нет элемента под тем номером, под которым мы записываем, то этот элемент будет создан */
  let phrases = []; //пустой массив
  let numbers = [1, 2, 3, 4, 5];
      numbers.push(6); //добавить новый элемент в конец массива
  let aliExpress = ['Лазерная указка Xioamo', 'Гарнитура в виде телефонной трубки', 'Форма для льда «Титаник»'];
      aliExpress.length //длина массиыв = 3 элемента

  const results = new Array(size); //size - размер массива. У этого массива задана длина, но он не будет заполнен элементами. Для элементов создаются «ячейки» — слоты
    const results = new Array(size).fill(value); //fill - для заполнения слотов пустого массива

  const count = 5;
    const results = Array.from({length: count}, (_,i) => i * 2); //Где size — это желаемый размер массива, i — значение, которое мы добавляем в массив.
      //Метод from создаёт массив из любого объекта, похожего на массив. Здесь мы создаём новый массив с помощью метода Array.from()
    console.log(results)

  const count = 5;
    const results = [...Array(count)].map((_, i) => i * 2); //Ещё один способ заполнить «разреженный» массив — создать его копию spread-оператором
    console.log(results)

  //map
    const newArray = array.map(item => {
      // код преобразования элемента из array в newArray
    })
    //пример
      const numbers = [1, 2, 3, 4, 5];
      const results = numbers.map(number => number * 2);
      console.log(results); // [2, 4, 6, 8, 10]
    //вывод элементов массива (feature) в шаблоне { featuresList }
      const features = [
          '2 каюты',
          '4 спальных места',
      ];
      const featuresList = features.map((feature) => (
        <li>{feature}</li>
      ));
      <ul className="card-features">
          { featuresList }
      </ul>

  //includes - Метод используется для проверки наличия элемента в массиве. Если элемент найден, возвращает true, если нет — false.
    const fruits = ["apple", "banana", "orange", "mango"];
    console.log(fruits.includes("banana")); // true
    console.log(fruits.includes("kiwi")); // false
      //Эту же операцию можно записать методом indexOf, который вернёт индекс нужного элемента в массиве, и сравнить его с -1.
    //пример
      root.render(<App words={words} selectedItems={selectedItems}/>);
      const selectedItems = ['3', '4'];
      const words = [ { id: '1', word: 'Сasa' };
      function App({words = [], selectedItems = []}) {
          const cards = words.map((item) => (
            <Card isSelected={selectedItems.includes(item.id)} /> //https://up.htmlacademy.ru/fe-react/1/demos/10321#19
          ));
          return (
                <ul> {cards} </ul>
          );}

  //filter. если при переборе в массиве item === true, то элемент добавляется в новый массив
  const persons = [
    { name: 'Пётр', age: 16 },
    { name: 'Максим', age: 18 },
  ];
  const fullAgePersons = persons.filter(person => person.age >= 18); //На вход filter передадим другую функцию, которая возвращает true, если поле age больше либо равно 18.
  console.log(fullAgePersons); //fullAgePersons - массив, который будет содержать только совершеннолетних

  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const itemToRemove = 'orange';
  const filteredFruits = fruits.filter((item) => item !== itemToRemove); //filter можно использовать и для удаления элемента из массива
  console.log(filteredFruits);

  //find - используется для поиска первого элемента в массиве, который удовлетворяет заданному условию в виде колбэк-функции
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const result = numbers.find((item) => item > 3);
    console.log(result); // 4. Метод find находит первый элемент массива, удовлетворяющий условию, и возвращает его. В нашем случае это элемент 4.
    //пример с объектами
      const persons = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const resultByName = persons.find((item) => item.name === 'Bob'); //Метод find можно использовать для поиска объекта в массиве по значению одного из его полей.
      console.log(resultByName); // { id: 2, name: 'Bob' }

  //slice - извлекает подмассив из массива
  const shownTickets = tickets.slice(0, 9); //выберутся первые 10 элементов в массиве

  //findIndex() - нахождения индекса объекта в массиве, Этот метод работает аналогично indexOf
    //Если элемент в массиве найден, findIndex вернёт его индекс, в противном случае метод вернёт значение -1.

//объекты
  let user = {
      nickname: 'Мария',
      getGreeting: function() {
          return 'nickname';
      },
      getGreeting2: function() {
          return this.nickname; //вернуть значение ключа этого же объекта
      }
  };
  console.log(user.getGreeting()); //Мария
  console.log(user.getGreeting2()); //Мария

  //obj[propertyName]
  const obj = {
    firstName: 'John',
    lastName: 'Doe',
  };
  const propertyName = 'firstName';
  console.log(obj[propertyName]); // Выведет 'John'
  //задания динамических свойств объектов
  const propertyName = 'firstName';
  const obj = {
    [propertyName]: 'John',
    lastName: 'Doe',
  };
  console.log(obj.firstName); // Выведет 'John'

//словари
  let users = {
      'favorite food': 'Сметана',
      fullname: 'Иванова'
  };
  console.log(users['favorite food']); //Сметана
  console.log(user['fullname']); //Иванова

//условия if else
  //блоки if else нельзя использовать в JSX-выражениях в фигурных скобках.
  const a = 5, b = 10;
  let max;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  //тернарный оператор
    const a = 5, b = 10;
    const max = (a > b) ? a : b; //условие ? значение1 : значение2;
    //тернарный оператор в реакт
    <div>{ condition ? <Component1 /> : <Component2 />; }</div>

//циклы
  //for
    for (let i = 0; i <= 4; i = i + 1) {
        console.log(aliExpress[i]);
    }
    for (let tooltipButton of tooltipButtons) { //элемент tooltipButton из коллекции tooltipButtons
        console.log(tooltipButton);
    }
    while (a >= b) {    }

  //switch
    let day = 'Monday';
    switch (day) {
      case 'Monday':
        alert('Сегодня понедельник');
        break;
      case 'Tuesday':
        document.body.style.backgroundColor = 'blue';
        break;
      default:
        alert('Сегодня неизвестный день недели');
        break;
    }

//функции
  let functionName = function (userName, bookName) { //Передавать аргументы надо в том же порядке, в котором объявлены параметры функции. Потому что порядок аргументов соответствует порядку параметров в функции. У нас параметры записаны в таком порядке: userName, bookName.
      console.log('Меня зовут ' + userName + '. Моя любимая книга: ' + bookName);
      let name = userName + bookName;
      return name;
  };
  function sayHello(name) {
      return 'Привет, ' + name;
  }


//js функции

  Math.ceil(number); //принимает на вход число и округляет его до целого в большую сторону
  Math.floor(number) //делает то же самое, только округляет в меньшую сторону
  Math.round(number) //округляет число до ближайшего целого значения
  Math.random() ;//Она возвращает случайное число между 0 и 0.99999999999, включая 0:
  Math.max(a, b, c...) / Math.min(a, b, c...); //возвращает наибольшее или наименьшее число из перечисленных аргументов.
  Math.round(arg); //округляет аргумент до ближайшего целого.
  Math.ceil(arg); //округляет аргумент в большую сторону.
  throwDice(min, max); //генерирует случайные числа в заданном промежутке, включая минимальное и максимальное значение.
  const x = Math.floor(Math.random() * array.length); //floor - Мы можем округлить наше число от 0 включительно до array.length в меньшую сторону, «отбрасывая» дробную часть случайного числа
  price.toLocaleString(); //1500 -> 1 500 //преобразует число в строку и возвращает значение, используя указанный языковой стандарт.
    //Если метод используется без параметров, то он использует язык по-умолчанию.
    //const formatPrice = (price) => `${price.toLocaleString()} ₽`; //1 500 ₽

//Интерполяция шаблонной строки
  const formattedPrice = `${price.toLocaleString()} ₽/час`; // = price.toLocaleString() + " ₽/час"
    const formattedPrice = {`cards ${!isShownByGrid ? 'list' : ''}`}; // "cards list" или "cards"
    className="{'button button-${firstSelectedOption}'}";

//Деструктуризация
  const x = 5;
      const obj = {x}; // или const obj = {x: x}; //создать объект со свойством x, равный значению этой переменной х = «возьми значение из переменной x и помести его в свойство объекта с таким же именем».
      const arr = [x]; //также для массивов
  //Деструктуризация объекта (destructuring) — это синтаксический способ извлечения значений из объекта и присвоения их переменным.
    const obj = {x: 5};
    const { x } = obj; // Вместо сonst x = obj.x
    console.log(x); // Выведет в консоль 5
  //Деструктуризация чтобы поменять местами два элемента
    const array = [1, 2, 3, 4];
    [array[i], array[j]] = [array[j], array[i]];

//Типовые решения
  //перетасовка массива методом Фишера-Йетса
  function shuffle(array) {
    for (const i = array.length - 1; i > 0; i--) { // Для каждого индекса массива от конца к началу
      const j = Math.floor(Math.random() * (i + 1)); // Получаем случайный индекс с начала массива
      [array[i], array[j]] = [array[j], array[i]]; // Меняем элементы местами
    }
    return array;
  }
  //алгоритм сортировки
  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;  // a = b
  }
  const array = [3, 1, 2, 4];
  array.sort(compare);
  console.log(array); // Выведет [1, 2, 3, 4]

//Таймеры
//setTimeout - Она принимает два аргумента: функцию, которую нужно запустить, и время в миллисекундах, через которое эта функция должна быть вызвана
  //для установки в таймер отложенного выполнения кода нужно передать функцию, а не вызывать её.
  function tellMeLater() {
    console.log("Hello from timer!");
  }
  setTimeout(tellMeLater, 1000);
//clearTimeout - отменяет таймер, созданный функцией setTimeout.
  //На вход функциям подаётся таймер ID — идентификатор таймера. Его возвращают setTimeout и setInterval, которые создают этот таймер.
  //timerId
  const timerId = setTimeout(() => console.log({ timerId }), 1000);
  //пример, программа, которая будет выводить сообщение «Hello, world!» в консоль каждые две секунды. После 10 секунд выполнение программы должно завершиться
  function sayHello() {
    console.log('Hello, world!');
  }
  let timerId = setTimeout(function tick() {
    sayHello();
    timerId = setTimeout(tick, 2000);
  }, 2000); //каждые 2 секунды выводится sayHello()
  setTimeout(function() {
    clearTimeout(timerId);
    console.log('The program has stopped!');
  }, 10000); //После 10 секунд выполнение программы должно завершиться

//setInterval - функция запускается не один раз, а периодически через указанный интервал времени
  setInterval(tellMeLater, 1000); //команда tellMeLater будет повторяться каждые 1000 миллисекунд
//clearInterval - отменяет таймер, созданный функцией setInterval



//Браузерный js ------------------------------
/*
JavaScript особым образом воспринимает разметку: элементы здесь не строки, которые мы пишем в HTML-файлах, а объекты. При этом каждый объект связан с другими такими же объектами и знает о своём родителе, соседних объектах-элементах, вложенных объектах.
    В итоге получается древовидная структура, которая называется DOM (Document Object Model или объектная модель документа).
aria-pressed - атрибут указывает, в каком состоянии находится кнопка-переключатель. Например, если лайк стоит, то значение у атрибута должно быть "true", а если лайка нет, то "false". Атрибут aria-pressed не влияет на внешний вид кнопки, но он помогает скринридерам правильно прочитать содержимое страницы. https://medium.com/web-standards/toggle-buttons-a41388e80974#2347
append - метод не копирует элементы, а перемещает. Если указать в скобках элемент, который уже есть в разметке, этот элемент исчезнет со своего прежнего места и появится там, куда его добавил метод append. Получить таким образом несколько элементов не выйдет.
data-name1-name2 - дата атрибут. Атрибуты, начинающиеся с data-, обычно используют, чтобы хранить вспомогательную информацию. https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes
output - тег используют, чтобы показать на странице результат вычислений, полученный с помощью JavaScript. https://htmlacademy.ru/courses/74/run/14

document
    В каждом DOM-дереве есть корневой объект, из которого «растут» другие объекты. Он называется document.
    Этот глобальный объект доступен во всех программах, которые работают в браузере. Проще говоря, document — страница, которая содержит все элементы разметки (объекты).

методы DOM API:
    querySelector, addEventListener
*/

element = document.querySelector('.class'); //Метод ищет по селектору, который указан в скобках. Словом document обозначается веб-страница, к которой подключили скрипт.
    elementBody = document.body;  //элемент body
    element2 = element.querySelector('.class'); //искать черз querySelector внутри element, который ищем тоже через querySelector
    element.href; //вывести значение атрибута элемента
    element = document.querySelector('.slider-preview-item .active'); //поиск по селектору (двум классам)
        element = document.querySelector('li:last-child');
    element = document.querySelector('ul'); //поиск по тегу
parent.children; //вернет список (динамическую коллекцию) дочерних элементов. Можно использовать вместо querySelectorAll
    //children возвращает тип коллекции — HTMLCollection. Такая коллекция содержит только DOM-элементы
array = document.querySelectorAll('.class'); //Метод ищет по всем селекторам и возвращает статичную коллекцию (псевдомассив с DOM-элементами )
    //querySelectorAll находит необходимые элементы один раз, фиксирует их и всё. // Эта запись остаётся статичной и изменения в DOM на неё никак не влияют.
    // Можно сказать, что querySelectorAll работает, как любая переменная, в которую мы записали какое-нибудь значение.
    // Пока мы не переопределим переменную, в ней так и будет находиться то значение, которое мы в неё записали, независимо от того, что происходит в коде.
    //querySelectorAll возвращает тип коллекции — NodeList. может содержать не только DOM-элементы вроде li или div, но и перенос строки, текстовое содержимое элементов в качестве отдельных элементов коллекции. NodeList может быть статичной или динамической, это зависит от того, каким способом она вызвана.
document.querySelector('#text-template'); //поиск по id. может быть вызван только на всём документе, а не отдельном элементе

element.cloneNode(false); // Вернёт склонированный элемент без вложенностей
    element.cloneNode(true);  // Вернёт склонированный элемент со всеми вложенностями


element.textContent = "123"; //textContent хранит в себе текстовое содержимое элемента
    //<p>123</p>
    element.children[0].textContent = 1; //если element это div, то это строка создаст это <span>1</span>
element.style.fontSize = '33px'; //менять размер шрифта

element.classList.remove('class'); //Метод убирает с элемента тот класс, который указан в скобках
element.classList.add('class'); //метод добавляет элементу класс (без точки), указанный в скобках.
element.classList.toggle('class'); //добавление класса, когда этого класса нет и удаление класса (изначального), когда этот класс есть. Если класс у элемента есть, метод classList.toggle ведёт себя как classList.remove и класс у элемента убирает. А если указанного класса у элемента нет, то classList.toggle, как и classList.add, добавляет элементу этот класс.
element.classList.contains('class'); //проверить, есть ли у элемента класс. вернёт true (истина), если класс у элемента есть, и false (ложь), если класса нет.

button.addEventListener('click', function () { }); //addEventListener слушатели событий» //https://developer.mozilla.org/ru/docs/Web/Events
    //addEventListener, onclick, oninput - обработка событий в DOM-элементах без React. Сначала находим DOM-элемент, затем подписываемся на нужное событие.
    button.onclick = function() {}; //onclick - событие //function() - обработчик событий
    button.onclick = function(evt) {
        evt.preventDefault(); //отменить действие браузера по умолчанию (при наступлении события) - переход по ссылке
    };
    document.addEventListener('keydown', function(evt) { // keydown - код выполнится при каждом нажатии любой клавиши
        if (evt.keyCode === 27) {} //Код отсюда выполнится только при нажатии ESC
        if (evt.keyCode === 13) {} //Код отсюда выполнится только при нажатии Enter
            //коды клавиш KeyboardEvent: keyCode property https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        if (evt.key === 13) {} //вернет название клавиши в виде строки - «Escape» //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        if (evt.code === 13) {} //вернет название клавиши в виде строки - «Escape», при этом на значение не влияет выбранный язык клавиатуры //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    });  //слушать это событие можно только на элементах, которые имеют состояние фокуса: поля ввода, кнопки, элементы с атрибутом tabindex, документ.
        //При нажатии фокус должен находиться на соответствующем элементе.
    checkbox.addEventListener('change', function () {}); //change - событие изменения инпута
    form.addEventListener('submit', function () {}); //отправка формы, событие на теге <form>

form.onsubmit = function() {}; //обработчик событий onsubmit добавляется на форму <form> (не на кнопку)
input = document.querySelector('input').value; //value - это значение поля ввода (input), значение вернется только после того, как форма была отправлена. textContent вернет пусто, т.к. для JavaScript поля формы не имеют текстового содержимого, их значения хранятся именно в value.
element.oninput = function() {} //вернет value из формы в процессе ввода текста (сразу каждую букву)

let li = document.createElement('li'); //Создание элемента div в document
    parent.appendChild(li); //добавить li в родителя list(ul)
parent.append(element); //Добавляем новый элемент в конец элемента-родителя. При этом содержимое элемента-родителя не затирается. Добавлять с помощью этого метода можно и элементы, и простые строки.
element.remove(); //удалить элемент
    //но статичная коллекция (массив) будет иметь ту же длину length

element.dataset.tooltipText; //dataset - получить значение дата атрибута data-tooltip-text (без data и без префикса, в camelCase)

button.disabled = true; //заблокировать кнопку
window.onscroll = function () {} //отслеживание скрола (мин на 1 px). window - окно (или вкладка) браузера. Обработчик событий onscroll можно добавлять не только окну браузера, но и отдельным элементам на странице. Чтобы обработчик сработал, у элемента должна быть своя полоса прокрутки. Управлять прокруткой элемента можно с помощью CSS свойства overflow https://www.w3.org/TR/css-overflow-3/#overflow-properties
window.pageYOffset //Вычисляет на какое кол-во пикселей была прокручена страница по Y
//Величина горизонтальной прокрутки хранится в свойстве pageXOffset.
window.scrollTo(100, 50); //Прокрутит страницу на 100px вправо и на 50px вниз. Если страница помещается в окно целиком и полосы прокрутки нет, то браузер проигнорирует эту инструкцию. По умолчанию автоматическая прокрутка в браузерах происходит очень быстро, скачком. Чтобы сделать её более плавной, мы использовали CSS свойство scroll-behavior со значением smooth. Подробнее об этом свойстве вы можете узнать из спецификации.
filter.onchange = function() {} //обработчик срабатывает, когда пользователь выбирает новое значение из выпадающего списка. Обработчик событий onchange можно использовать с разными элементами. Например, он срабатывает, когда пользователь переключает чекбокс или радиокнопки.
element.style.color = 'green'; //изменить цвет текста. Стили, заданные с помощью свойства style, они имеют больший приоритет, чем CSS-правила из файла со стилями.
window.getComputedStyle; //Получить стили, но только те стили, которые заданы в разметке в атрибуте style самого элемента. https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-OverrideAndComputed-h3
input.type = 'text'; //сменить тип на 'text'
showPassword.checked; //свойство чекбокса true/false, включен ли он или выключен

/*js в html, кнопка открытия dialog */
  // <button type="button" onClick="window['dialog-id'].show();" aria-controls="dialog-id">Открыть окно</button>
  // <button type="button" onClick="window['dialog-id'].showModal()" aria-controls="dialog-id">Открыть окно</button>
  // <dialog id="dialog-id"></dialog>


/*
  событие - обработчик без реакта - обработчик с реактом (атрибут / пропс).
    React сохраняет исходные имена событий (onclick), но устанавливает правило: события именуются в стиле camelCase (onClick)
  click - onclick - onClick
  ??? - oninput - onInput
  mouseover - onmouseover - onMouseOver
  mouseover - mouseOver
*/



/*
select - раскрывающийся список, фильтрация. Значение фильтра записывается в select.value

CSS	/ JаvaScript
font-size /	fontSize
background-color / backgroundColor
border-left-width /	borderLeftWidth

*/
