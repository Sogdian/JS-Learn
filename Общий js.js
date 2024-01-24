/*Ванильный js ------------------------------
Типы данных:
  примитивы (элементарные типы), у которых есть только значение:
    number — числа: целые и с точкой
    string — строки
    boolean — логические, или булевы, значения: true — «истина» и false — «ложь»
    undefined — undefined; - Значение не определено
    массивы - для хранения однородных элементов, хранит последовательность значений, и порядок этих значений важен. сложные, или составные, типы данных
    функции -
    null - Значения нет
  объекты, имеющие свойства пары: «ключ + значение»:
    объекты - состоит из множества пар «ключ-значение», порядок этих пар не важен; сложные, или составные, типы данных
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
  console.log('вино' + 'град'); //Конкатенация
  console.log('Время, мин: ' + 50); // = 'Время, мин: 50'. Плюс может быть знаком сложения или конкатенации, но так как один из операндов — строка, то сложение не подходит. Поэтому число 50 приводится к строке '50' и склеивается со строкой 'Время, мин: '.
  console.log('2' * 50); // = 100. Звёздочка — это знак умножения, со строками она не используется. Поэтому JavaScript пытается превратить строку '2' в число, и ему это удаётся. Затем числа 2 и 50 перемножаются, и получается 100.
  console.log("Республика Кот-д'Ивуар");
  console.log('Никогда не говори "никогда" — можешь ошибиться.');
  console.log(`Это - шаблонная строка,
  несколько строк`); //Шаблонные строки, ограничиваются с обеих сторон обратными кавычками ``
  console.log(`${2 + 5} раз отмерь - ${value} отрежь`); // "7 раз отмерь - 1 отрежь"
  let merry = true;
    console.log(!merry); // false

//Символы. Фактически их можно воспринимать как гарантированно уникальное значение, предоставляемое JavaScript.
  //Для его создания нужно явно обратиться к типу по имени Symbol и в качестве аргумента передать подпись
  let id = Symbol('id');
  console.log(id); //Выведет Symbol(id)

//Строки
  console.log('эспрессо'[0]); // "э". получить символ из строки по его индексу

//Числа
  //После объявления эти числа можно использовать в вычислениях наряду с десятичными, но при выводе они будут автоматически сконвертированы в десятичную систему
  let hex = 0xFF; //255
  let binary = 0b011110; //30
  let num = 1234; //это десятичное число

/* Мат операции
  Остаток от деления %
    1 % 3: 1. Поскольку 1 не делится на 3 нацело, остаток равен самому числу, то есть 1. Поэтому результат равен 1.
    2 % 5: 2. Поскольку 2 не делится на 5 нацело, остаток также равен самому числу, то есть 2. Поэтому результат равен 2.
    3 % 3: 0. В данном случае 3 делится на 3 нацело (1 раз), поэтому остаток равен 0. Поэтому результат равен 0. */

//Неявное преобразование типов
  //Приведение к строке
  console.log(100 + '500'); // "100500"
  console.log(1 + ''); // "1"
  console.log(undefined + ''); // "undefined"

  //Приведение к числу
  console.log(null >= 1); // false
  console.log('451' < 452); // true
  //Унарные операторы приводят нечисловые значения после «+, -, /, *» к численному типу. Так +'33' вернёт число 33, +'-77' вернет число -77.
  //Если операторы сложения и унарный плюс стоят рядом, они не помешают друг другу
  console.log(67 + +'33'); // 100
  console.log('3' - 1); // 2
  console.log('4' / 4); // 1
  console.log('2' * 2); // 4
  //Но сложения со строкой — будет воспринято как конкатенация
  console.log('4' + 4); // 44 - здесь выполнится конкатенация

  //Приведение к булевым значениям
  //В круглых скобках условия if любые данные всегда приводятся к логическому типу
  //Если элемента с классом username на странице нет, в переменную usernameElement запишется null.
  //В круглых скобках условной конструкции null приводится к логическому типу и становится false. Поэтому тело условия if выполнено не будет
  const usernameElement = document.querySelector('.username');
  if (usernameElement) {
    console.log('Привет, ' + usernameElement.textContent);  }

//Явное преобразование типов
  //Приведение к строке
  const numberToString = String(2); // "2"
  const nanToString = String(NaN); // "NaN"
  const undefinedToString = String(undefined); // "undefined"
  const nullToString = String(null); // "null"
  const booleanToString = String(true); // "true"
  num.toString(1); // Выведет строку: 1 (String)
  num.toString(16); //4d2 это уже шестнадцатеричное число
  num.toString(2); //10011010010 а вот так двоичное

  //Приведение к числу
  const stringToNumber = Number('2'); // 2
  const nullToNumber = Number(null); // 0
  const anotherStringToNumber = Number('счастье не за горами'); // NaN
  const undefinedToNumber = Number(undefined); // NaN
  num.parseInt('17');   // Вернёт 17.
  num.parseInt('10001', 2); // Вернёт 17. вторым аргументом в parseInt мы передаём именно систему исчисления, из которой мы преобразуем исходное число.
  num.parseInt('11', 16);   // Вернёт 17

  //Приведение к булевым значениям
  Boolean(2) // true
  Boolean(0) // false
  Boolean('') // false
  Boolean(NaN); Boolean(null); Boolean(undefined) // false
  Boolean('Непустая строка'); // true
  Boolean({}); // true
  Boolean([]); //true

//Определение типа данных. Оператор typeof
  typeof 10; // "number"
  typeof 'Hello World!'; // "string"
  typeof true; // "boolean"
  typeof undefined; // "undefined" - Значение не определено
  typeof (10 + 5) // "number". Скобки ставят, когда нужно определить тип целого выражения
  typeof NaN; // "number". "Not a Number" имеет тип данных "number"
  typeof null; // "object"
  typeof function () {} // "function". Хоть такого типа и нет.

  console.log(typeof(input.value));

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

//Логические операторы
  //Оператор логическое НЕ (!)
  //Если поставить ! перед небулевым значением, движок JS сначала приведёт тип к булю, а затем изменит значение на противоположное
  !false; // true
  !'Непустая строка' // false
  !!true; // true

  //Оператор логическое ИЛИ (||)
  //true || true - возвращает true, если хотя бы один из операндов равен true.
  let condition =  0 || NaN || 'строка' || false;  // Значение переменной condition: 'строка'

//Оператор логическое И (&&)
  //true && true - возвращает значение true, если оба операнда равны true.
  //сокращенное вычисление логического выражения в реакте
  <div> { isFinished && <Modal /> } </div> //если isFinished = true, то вызовется <Modal />, Если же isFinished равно false, то выражение вернёт false и <Modal /> не вызовется
  //Если поставить && между правдивыми условиями, оператор вернёт последнее из них:
  console.log(2 * 2 === 4 && 5 < 6 && 'Каждый может стать'); // 'Каждый может стать'
  //Если среди условий есть ложные, && вернёт из них первое ложное:
  console.log(2 * 2 === 4 && undefined && 'Каждый может стать'); // undefined

  //оператор строгого равенства, тут нет приведения типов. https://htmlacademy.ru/courses/209/run/5
  'a' === 'a'; // Результат: true
  'a' !== 'a'; // Результат: false
  //оператор нестрогого равенства, тут есть приведение типов
  'a' == 'a'; // Результат: true
  //оператор нестрогого неравенства
  'a' != 'a';

  //Приоритетность операторов
  //сначала выполняется логическое НЕ, потом И, а затем — ИЛИ
  //Операции в скобках выполняются первыми
  const optimism = !'Жить' && !'Быть' || 'Жить и быть';
  //Сначала !'Жить' → false, потом !'Быть' → false, затем false && false → false и наконец false || 'Жить и быть' → 'Жить и быть'.
  console.log(optimism); // "Жить и быть". сначала выполняется !, потом &&, затем ||

//Пример
  function checkTheCar (distance, ownersNumber, crushed) {
    if (distance <= 100000) { // проверяем пробег
      if (ownersNumber === 1) { // 1 владелец по ПТС?
        if (crushed === false) { // не битая?
          return true;
        }
        else return false;
      }
      else if (ownersNumber === 2) { // Владелец не 1? Тогда может 2?
        if (crushed === false) { // не битая?
          return true;;
        } else return false
      } else return false;
    } else return false;
  }

  //Сравнение чисел - сравнивает два объекта по полю economy.
  //Если значение поля economy у объекта a меньше, чем у объекта b, то функция возвращает отрицательное число (-1) и т.д.
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

//Методы поиска в строке
  //Поиск по строке. Метод indexOf. Метод indexOf ищет символ в строке и возвращает его индекс
  //indexOf чувствителен к регистру
  'Яндекс.Практикум'.indexOf('Я'); // 0
  'эспрессо'.indexOf('c'); // 1. Если таких символов в строке несколько, метод вернёт индекс первого из них
  'эспрессо'.indexOf('к'); // -1. Если символа в строке нет, indexOf вернёт -1
  //indexOf может найти и комбинацию символов. При этом вернётся индекс первого символа из последовательности
  const blok = 'Ночь, улица, фонарь, аптека';
  blok.indexOf('фонарь'); // 13.

//Поиск в начале и конце строки. Методы startsWith и endsWith
  //Метод startsWith сравнивает начало строки с переданной ему подстрокой
  'Вендетта'.startsWith('В'); // true
  'Родина'.startsWith('Картинка в букваре'); // false

  //Метод endsWith делает всё то же самое, только с концом строки
  const theRealEnd = 'Это ещё не конец';
  theRealEnd.endsWith('конец'); // true

//Управление регистром. Методы toLowerCase и toUpperCase
  'Включите Caps Lock'.toLowerCase(); // "включите caps lock"
  'Выключите Caps Lock'.toUpperCase(); // "ВЫКЛЮЧИТЕ CAPS LOCK"

//Превращение строки в массив. Метод split
  //Метод split принимает на вход один аргумент — разделитель. Он показывает, где заканчивается один элемент массива и начинается следующий
  'Пришёл. Увидел. Победил.'.split(' '); // ["Пришёл.", "Увидел.", "Победил."]
  'Пришёл. Увидел. Победил.'.split('. '); // ["Пришёл", "Увидел", "Победил."]

//Извлечение части строки. Метод slice
  //Метод slice возвращает часть строки. На вход он принимает два аргумента — с какого индекса начинать отсчёт и на каком закончить
  //Второй аргумент необязательный: если его не указать, slice() вернёт все символы от заданного в первом аргументе до конца строки
  'Не прислоняться'.slice(6, 10); // "слон"
  'Яндекс.Практикум'.slice(7); // "Практикум"

//Объект Math и его методы
  // округляет переданное число «вниз»
  Math.floor(9.99); // 9
  // округляет «вверх»
  Math.ceil(9.01); // 10
  // округляет до ближайшего целого
  Math.round(9.51); // 10
  // возвращает наибольшее из переданных чисел
  Math.max(1, 2, 3, 4, 5); // 5
  // возвращает наименьшее из переданных чисел
  Math.min(1, 2, 3, 4, 5); // 1
  // возвращает случайное число от 0 включительно до 1 не включительно
  Math.random(); // 0.31764219954126016

//Работа с дробной частью. Функция parseInt
  //Функция parseInt приводит переданный аргумент к целому числу.
  //Она читает аргумент слева направо, если встречает не цифру, останавливается и возвращает всё, что прочитала до этого
  //Если первый символ передаваемой строки не цифра, parseInt вернёт NaN:
  parseInt('37 лет, 8 месяцев и 10 дней'); //37
  parseInt('38 попугаев'); //38
  //Второй аргумент parseInt — система счисления, в которой число передаётся функции
  parseInt('100', 10); // 100. Чаще всего вам нужна десятичная система. Явно указывайте её, чтобы избежать неожиданных результатов.
  parseInt('100', 2); // 4 (100 в двоичной системе)

//Функция parseFloat
  //Функция parseFloat работает аналогично parseInt, только выделяет не целое число, а число с плавающей точкой
  parseFloat('36.6'); // 36.6
  parseFloat('36.6 нормальная температура человека '); // 36.6

//Проверка на принадлежность к целым числам. Метод Number.isInteger
  //Метод Number.isInteger принимает число как аргумент и проверяет, целое оно или дробное
  const eightAndAHalf = 8.5;
  Number.isInteger(eightAndAHalf); // false



/* массивы
  в массиве можно хранить любые данные: строки, булевы значения, числа и даже другие массивы.
  если в массиве нет элемента под тем номером, под которым мы записываем, то этот элемент будет создан */
  let phrases = []; //пустой массив
  let numbers = [1, 2, 3, 4, 5];
      numbers.push(6); //добавить новый элемент в конец массива
      numbers[numbers.length] = 7; //добавить новый элемент в конец массива
  let aliExpress = [1, 2, 3].length //длина массиыв = 3 элемента

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

//Поиск по строке. Метод includes. Метод используется для проверки наличия элемента в строке / массиве.
  //Если элемент найден, возвращает true, если нет — false
  //Пример 1 с массивом
    const fruits = ["apple", "banana", "orange", "mango"];
    console.log(fruits.includes("banana")); // true
    console.log(fruits.includes("kiwi")); // false
      //Эту же операцию можно записать методом indexOf, который вернёт индекс нужного элемента в массиве, и сравнить его с -1.
    //Пример 2 с массивом
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
    //Пример со строкой
      'Гарри Поттер и узник Азкабана'.includes('Гарри Поттер'); // true

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

//объекты. Объекты состоят из пар «ключ — значение». Пары «ключ — значение» часто называют полями.
  //Значение — это данные, которые мы хотим записать.
  //Значением может быть строка, число, булево значение, массив, другой объект - такую пару называют свойством
  //Значением может быть функция - такую пару называют методом
  //Ключ — это уникальное имя этого значения. По ключу мы можем обратиться к значению
  //Пары «ключ — значение» делятся на два типа: свойства и методы.
  let user = {
      nickname: 'Мария',
      getGreeting: function() {
          return 'nickname';
      },
      getGreeting2: function() {
          return this.nickname; //вернуть значение ключа этого же объекта
      }
  };
  console.log(user.nickname); //Мария
  console.log(user['nickname']); //Мария
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
  obj.newName = "newName"; //добавление нового свойства в объект

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

//Тернарный оператор. тернарный оператор возвращает значение, а условная конструкция — нет
  //условие ? значение1 : значение2;
  const a = 5, b = 10;
  const max = (a > b) ? a : b;
  //тернарный оператор в реакт
  <div>{ condition ? <Component1 /> : <Component2 />; }</div>

//циклы
  //for
    for (let i = 0; i <= 4; i = i + 1) {
        console.log(aliExpress[i]);
      continue; //Директива continue не прерывает весь цикл, а только пропускает текущую итерацию.
      break; //Директива break нужна, когда дальнейшее выполнение цикла бессмысленно или может привести к неправильным результатам
    }
  //for of
    for (let tooltipButton of tooltipButtons) { //элемент tooltipButton из коллекции tooltipButtons
        console.log(tooltipButton);
    }
  //for in
  for (let tooltipButton in tooltipButtons) {
    console.log(tooltipButton);
  }

  //while
    let a = 1; let b = 0;
    while (a >= b) {
      console.log("do");
      a +=1;
    }

  //do while. тело цикла выполнится хотя бы один раз
  do {
    console.log("do");
  } while (a >= b);

  //Конструкция switch-case
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

  //пример 2. Можно сознательно пропустить break, чтобы прописать логику сразу нескольких случаев
  let catName;
  const cartoon = 'Зима в Простоквашино';
  switch (cartoon) {
    case 'Зима в Простоквашино':
    case 'Весна в Простоквашино':
      catName = 'Матроскин';
      break;
    case 'Лето кота Леопольда':
      catName = 'Леопольд';
  }
  console.log(catName); // "Матроскин"

//функции
  let functionName = function (userName, bookName) { //Передавать аргументы надо в том же порядке, в котором объявлены параметры функции. Потому что порядок аргументов соответствует порядку параметров в функции. У нас параметры записаны в таком порядке: userName, bookName.
      console.log('Меня зовут ' + userName + '. Моя любимая книга: ' + bookName);
      let name = userName + bookName;
      return name;
  };

  function sayHello(name) {
      return 'Привет, ' + name;
  }
  //return без значения просто говорит функции «хватит». Если передать такой функции пустую строку, она прекратит работу. Функция при этом вернёт специальное значение undefined
  function sayHello(name) {
    if (name === '') {
      return; // если имя — пустая строка, выйдем из функции
    }

    let greeting = 'Привет, ' + name;
    return greeting;
  }

//prompt. позволяет получить ответ от пользователя.
  //Функция выводит диалоговое окно с текстовым полем. Если пользователь введёт что-то и нажмёт кнопку "ОК", в переменной password сохранится введённый текст.
  //Если пользователь не настроен на диалог и нажмёт «Отмена», в переменную попадёт null.
  password = prompt('Введите пароль:');


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
  const formattedPrice = `Значение = ${price.toLocaleString()} ₽/час`; // = price.toLocaleString() + " ₽/час"
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



/* Браузерный js ------------------------------
JavaScript особым образом воспринимает разметку: элементы здесь не строки, которые мы пишем в HTML-файлах, а объекты.
  При этом каждый объект связан с другими такими же объектами и знает о своём родителе, соседних объектах-элементах, вложенных объектах.
  В итоге получается древовидная структура, которая называется DOM (Document Object Model или объектная модель документа).
  DOM расшифровывается как Document Object Model. Фактически это и есть HTML-разметка: блоки, из которых состоит документ.

aria-pressed - атрибут указывает, в каком состоянии находится кнопка-переключатель. Например, если лайк стоит, то значение у атрибута должно быть "true", а если лайка нет, то "false". Атрибут aria-pressed не влияет на внешний вид кнопки, но он помогает скринридерам правильно прочитать содержимое страницы. https://medium.com/web-standards/toggle-buttons-a41388e80974#2347
append - метод не копирует элементы, а перемещает. Если указать в скобках элемент, который уже есть в разметке, этот элемент исчезнет со своего прежнего места и появится там, куда его добавил метод append. Получить таким образом несколько элементов не выйдет.
data-name1-name2 - дата атрибут. Атрибуты, начинающиеся с data-, обычно используют, чтобы хранить вспомогательную информацию. https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes
output - тег используют, чтобы показать на странице результат вычислений, полученный с помощью JavaScript. https://htmlacademy.ru/courses/74/run/14

document
  В каждом DOM-дереве есть корневой объект, из которого «растут» другие объекты. Он называется document.
  Этот глобальный объект доступен во всех программах, которые работают в браузере. Проще говоря, document — страница, которая содержит все элементы разметки (объекты).

методы DOM API:
  querySelector, addEventListener

Псевдомассив - HTMLCollection
*/

//Поиск элементов в DOM-дереве
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

//Родственные связи в DOM
  //свойства доступны только для чтения. Перезаписать их не получится
  /*На примере: <body>
    <p>Ребёнок 1</p>
    <p>Ребёнок 2</p>
    <p>Ребёнок 3</p>
  </body> */
  //Ссылка на родителя — parentElement
  const element = document.querySelector('p');
  console.log(element.parentElement); // body, так как это родитель p

  //Псевдомассив (HTMLCollection) детей — children
  //children содержит псевдомассив всех дочерних элементов указанного элемента
  const body = document.querySelector('body');
  console.log(body.children); // HTMLCollection(3) [p, p, p]

  //Первый и последний ребёнок — firstElementChild и lastElementChild
  //Если у элемента нет дочерних элементов, firstElementChild и lastElementChild вернут null.
  const body = document.querySelector('body');
  console.log(body.firstElementChild); // <p>Ребёнок 1</p>
  console.log(body.lastElementChild); // <p>Ребёнок 3</p>

  //Предыдущий и следующий сосед — previousElementSibling и nextElementSibling
  //если соседа нет — вернётся null
  const element = document.querySelectorAll('p')[1]; // <p>Ребёнок 2</p>
  console.log(element.previousElementSibling); // <p>Ребёнок 1</p>
  console.log(element.nextElementSibling); // <p>Ребёнок 3</p>

//Управление атрибутами через вызов специальных методов
/* В действительности эти методы срабатывают не на самóм элементе, а на его представлении в DOM — объекте: */
    let a = document.querySelector('a'); //let а - это объект элемента <a href="https://ya.ru">Поиск</a>
    a.href; //= https://ya.ru — у объекта "a" появилось свойство href
/* Чаще всего можно работать как с атрибутами тегов, так и со свойствами объектов: они хранят одни и те же значения.
Но из этого правила есть исключения. Например, если в атрибут href записать неполную ссылку, в объекте она всё равно преобразуется в полную  */
  let a = document.querySelector('a'); //<a href="/search">Поиск</a> - Представьте, что на сайте ya.ru есть такая ссылка
  a.href; // https://ya.ru/search — ссылка в свойстве отличается от ссылки в атрибуте

  //1. Получаем значение атрибута: метод getAttribute
    //Если атрибут задан, но не подразумевает значения, например, disabled, мы получим пустую строку
    let imageOnPage = document.querySelector('img');
    imageOnPage.getAttribute('src'); // вернётся ссылка, записанная в атрибуте src первого изображения, которое вернул метод querySelector
  //2. Проверяем, есть ли у тега атрибут: метод
    //который возвращает true, если атрибут задан, и false, если нет
    bigAndRed.hasAttribute('onclick'); // true
  //3. Задаём значение атрибута: метод setAttribute
    //принимает на вход два аргумента: имя атрибута, значение которого мы хотим задать, и само значение
    bigAndRed.setAttribute('lang', 'ru');
    disabledCheckbox.setAttribute('disabled', true); // Делаем чекбокс неактивным. Значение второго параметра вообще не важно
    resetButton.setAttribute('style', 'background-color: #f1f1f1');
    resetButton.style.backgroundColor = '#f1f1f1'; //или так
      resetButton.style.fontSize = '33px'; //менять размер шрифта
      //Стили, заданные с помощью свойства style, они имеют больший приоритет, чем CSS-правила из файла со стилями.
  //4. Удаляем атрибут: метод removeAttribute
    bigAndRed.removeAttribute('disabled'); // удаляем атрибут

  element.dataset.tooltipText; //dataset - получить значение дата атрибута data-tooltip-text (без data и без префикса, в camelCase)

//Замене атрибута через свойство DOM-элемента.
  /* Когда мы хотим работать с элементом на странице, сначала нужно сделать из него объект: ведь JS умеет работать только с объектами.
  При этом атрибуты тега становятся свойствами объекта  */
  let a = document.querySelector('a'); //let а - это объект элемента <a href="https://ya.ru">Поиск</a> //это все элемент
    a.href; //= https://ya.ru — у объекта "a" появилось свойство href
    a.href = 'https://praktikum.yandex.ru/' //перезаписывать свойства объекта

//Получение имени класса. Свойство className
  // выбираем элемент c классом 'queen'
  let rank = document.querySelector('.queen');
  console.log(rank.className); //her majesty queen - Если у элемента несколько классов

//Получение списка классов. Свойство classList
  element.classList.remove('class'); //Метод убирает с элемента тот класс, который указан в скобках
  element.classList.add('class'); //метод добавляет элементу класс (без точки), указанный в скобках.
  element.classList.toggle('class'); //добавление класса (add), когда этого класса нет и удаление класса (изначального), когда этот класс есть (remove).
    // Если класс у элемента есть, метод classList.toggle ведёт себя как classList.remove и класс у элемента убирает.
    //А если указанного класса у элемента нет, то classList.toggle, как и classList.add, добавляет элементу этот класс.
  element.classList.contains('class'); //проверить, есть ли у элемента класс. вернёт true (истина), если класс у элемента есть, и false (ложь), если класса нет.

//Содержимое элемента. Свойство innerHTML
  //Свойство innerHTML содержит в себе строку со всем наполнением элемента (в том числе и разметкой)
  //каждый раз, когда вы переопределяете свойства (innerHTML, textContent), всё DOM-дерево, вложенное в элемент, удаляется и пересоздаётся заново
  //и все значения свойств объектов удаляются
  document.body.innerHTML; //Если в документе нет разметки, вернёт пустую строку
  document.body.innerHTML = ''; //удалить всё содержимое элемента
  document.body.innerHTML = '<div>Добавим разметку</div>'; //перезаписывание
    list.innerHTML = list.innerHTML + '<div>Добавим разметку</div>'; //добавление разметки в конец списка (массива)
//Содержимое элемента. Свойство insertAdjacentHTML
  //добавляет разметку и текст в документ и не затрагивают существующие элементы
  list.insertAdjacentHTML('beforeend', '<div class="tiger"></div>'); /*
    beforeend - указывает, что мы вставили HTML-код перед закрывающим тегом элемента
    afterbegin — вставка после открывающего тега
    afterend — вставка после закрывающего тега  */

//Текстовое содержимое. Свойство textContent
  //textContent позволяет получить или перезаписать текстовое содержимое элемента. Обратите внимание: вёрстка при этом не затрагивается
  //Если в один элемент вложены другие, их текстовое содержимое склеится
  //каждый раз, когда вы переопределяете свойства (innerHTML, textContent), всё DOM-дерево, вложенное в элемент, удаляется и пересоздаётся заново
  //и все значения свойств объектов удаляются
  element.textContent = "123"; //<p>123</p>
  element.children[0].textContent = 1; //если element это div, то это строка создаст <span>1</span>
//Содержимое элемента. Свойство insertAdjacentText
  //добавляет разметку и текст в документ и не затрагивают существующие элементы
  element.insertAdjacentText = "123"; //работает аналогичным образом, только вставляет текст, как и свойство textContent

//заменить текстовое содержимое. Свойство innerText
  //innerText, которое тоже предназначено для получения текстового содержимого.
  //Оно отличается от textContent тем, что innerText возвращает только видимое текстовое содержимое.
  //То есть innerText проигнорирует всё, что скрыто свойством display: none, а textContent — нет:
  element.innerText;

//Реакция на действия пользователя. События
  button.addEventListener('click', function () {}); //addEventListener слушатели событий» //https://developer.mozilla.org/ru/docs/Web/Events
  element.addEventListener('click', showClick); //showClick - обработчик событий (это колбек функция) (имя функции без скобок). Скобки не ставят, потому что мы не вызываем функцию, а просто передаём её как аргумент
  //addEventListener, onclick, oninput - обработка событий в DOM-элементах без React. Сначала находим DOM-элемент, затем подписываемся на нужное событие.
  button.onclick = function() {}; //onclick - событие
  button.onclick = function(evt) {
    evt.preventDefault(); //отменить действие браузера по умолчанию (при наступлении события) - переход по ссылке
  };

  //Объект event
  document.addEventListener('keydown', function(evt) { // keydown - код выполнится при каждом нажатии любой клавиши
    if (evt.keyCode === 27) {} //Код отсюда выполнится только при нажатии ESC
    if (evt.keyCode === 13) {} //Код отсюда выполнится только при нажатии Enter
    //коды клавиш KeyboardEvent: keyCode property https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if (evt.key === 13) {} //вернет название клавиши в виде строки - «Escape» //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    if (evt.code === 13) {} //вернет название клавиши в виде строки - «Escape», при этом на значение не влияет выбранный язык клавиатуры //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  });  //слушать это событие можно только на элементах, которые имеют состояние фокуса: поля ввода, кнопки, элементы с атрибутом tabindex, документ.
  //При нажатии фокус должен находиться на соответствующем элементе.

  //Цель события. Cвойство target
  //В target хранится элемент, на котором сработало событие:
  const button = document.querySelector('.button');
  button.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
  });


checkbox.addEventListener('change', showClick); //change - событие изменения инпута
  form.addEventListener('submit', function () {}); //отправка формы, событие на теге <form>
  //при успешной отправке формы и отсутствующем атрибуте action страница перезагружается — это называется стандартным событием.
  //Чтобы такого поведения не происходило — передайте в функцию-обработчик параметр evt. В самом начале тела функции вызовите метод evt.preventDefault()

//Свойства элементов
  //Значение поля ввода. Свойство value
  let inputs = document.querySelectorAll('input');
    console.log(inputs[0].value);

  form.onsubmit = function() {}; //обработчик событий onsubmit добавляется на форму <form> (не на кнопку)
    input = document.querySelector('input').value; //value - это значение поля ввода (input), значение вернется только после того, как форма была отправлена.
    //textContent вернет пусто, т.к. для JavaScript поля формы не имеют текстового содержимого, их значения хранятся именно в value.
    element.oninput = function() {} //вернет value из формы в процессе ввода текста (сразу каждую букву)

  //Состояние чекбокса и радиокнопки. Свойство checked
  showPassword.checked; //свойство чекбоксов и радиокнопок true/false, включен ли он или выключен

  //Свойства и методы элемента. Метод console.dir
  //console.dir отобразит список свойств и методов переданного объекта
  console.dir(document.body);

  //Другие свойства
  button.disabled = true; //заблокировать кнопку
  input.type = 'text'; //сменить тип на 'text'
  document.title = "123"; //заголовок документа
  document.querySelector('#user').content; //получить содержимое тега

//Создание элементов: createElement и createTextNode
//метод createElement принимает на вход имя тега в виде строки
  let li1 = document.createElement('li'); //Создание элемента li в document
  let li2 = document.createElement('li');

  const textItem = document.createTextNode('Hello, world'); //метод createTextNode принимает строку — текст узла

//Добавление элементов на страницу. Методы append, prepend, before, after и replaceWith - принимают на вход любое количество аргументов
/*Существует 5 методов добавления элементов на страницу^
  node.append(...nodes or strings) — добавляет узлы или строки в конец node;
  node.prepend(...nodes or strings) — в начало node;
  node.before(...nodes or strings) — до node;
  node.after(...nodes or strings) — после node;
  node.replaceWith(...nodes or strings) — заменяет node заданными узлами или строками. */

  parent.append(element); //Добавляем новый элемент в конец элемента-родителя. При этом содержимое элемента-родителя не затирается.
    //Добавлять с помощью этого метода можно и элементы, и простые строки.
    //Метод append устроен так, что принимает на вход неограниченное количество аргументов
  parent.append(li1, li2);
  parent.appendChild(li1); //добавить li в родителя list(ul)

//Удаление и перемещение элементов. Удаление элементов. Методы remove и closest
  element.remove();  //но статичная коллекция (массив) будет иметь ту же длину length

  const listItem = deleteButton.closest('.todo__item'); //метод closest возвращает ближайший родительский элемент с переданным селектором
    //это пример, когда кнопка удалить button находиться внутри, например, тега li
  listItem.remove();
  //или так без closest
  listItem.remove();

//Перемещение элементов
  //Это справедливо для всех пяти методов добавления: append, prepend, before, after и replaceWith.
  //при перемещении элемент удаляется с прежнего места
  const list = document.querySelector('.todo-list');
  const listItems = list.children; //в свойстве children хранится псевдомассив дочерних элементов
  list.append(listItems[0]); //переместили первый элемент to do листа в конец

//Клонирование элементов
  //обработчики событий элемента не скопируются. Их придётся добавить заново
  //Метод cloneNode только копирует элемент, но не добавляет его в DOM. Для этого к копии используют append или другой метод добавления
  element.cloneNode(false); //Вернёт склонированный элемент без вложенностей
  element.cloneNode(true); //Вернёт склонированный элемент со всеми вложенностями

  const songTemplate = document.querySelector('#song-template').content; //пример с <template>
  const songElement = songTemplate.querySelector('.song').cloneNode(true); //внутри <template> найти <div class="song">, который и надо склонировать, а не сам шаблон

//Тег template
  const userTemplate = document.querySelector('#user'); //например, #user это тег <template>
  const userTemplate = document.querySelector('#user').content; //получить содержимое тега


//НЕРАЗОБРАННОЕ
  window.onscroll = function () {} //отслеживание скрола (мин на 1 px). window - окно (или вкладка) браузера. Обработчик событий onscroll можно добавлять не только окну браузера, но и отдельным элементам на странице. Чтобы обработчик сработал, у элемента должна быть своя полоса прокрутки. Управлять прокруткой элемента можно с помощью CSS свойства overflow https://www.w3.org/TR/css-overflow-3/#overflow-properties
  window.pageYOffset; //Вычисляет на какое кол-во пикселей была прокручена страница по Y
    //Величина горизонтальной прокрутки хранится в свойстве pageXOffset.
  window.scrollTo(100, 50); //Прокрутит страницу на 100px вправо и на 50px вниз. Если страница помещается в окно целиком и полосы прокрутки нет, то браузер проигнорирует эту инструкцию. По умолчанию автоматическая прокрутка в браузерах происходит очень быстро, скачком. Чтобы сделать её более плавной, мы использовали CSS свойство scroll-behavior со значением smooth. Подробнее об этом свойстве вы можете узнать из спецификации.
  filter.onchange = function() {} //обработчик срабатывает, когда пользователь чтото меняет: выбирает новое значение из выпадающего списка, переключает чекбокс или радиокнопки, вбивает чтото в инпут
  window.getComputedStyle; //Получить стили, но только те стили, которые заданы в разметке в атрибуте style самого элемента. https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-OverrideAndComputed-h3
  document.write('Семь раз отмерь - один отрежь.'); //выводит на страницу текст,

//Кнопка открытия dialog
 //<button type="button" onClick="window['dialog-id'].show();" aria-controls="dialog-id">Открыть окно</button>
 //<button type="button" onClick="window['dialog-id'].showModal()" aria-controls="dialog-id">Открыть окно</button>
 //<dialog id="dialog-id"></dialog>

/*
  событие - обработчик без реакта - обработчик с реактом (атрибут / пропс).
    React сохраняет исходные имена событий (onclick), но устанавливает правило: события именуются в стиле camelCase (onClick)
  click - onclick - onClick
  ??? - oninput - onInput
  mouseover - onmouseover - onMouseOver
  mouseover - mouseOver
  mouseout
  scroll
*/



/*
select - раскрывающийся список, фильтрация. Значение фильтра записывается в select.value

CSS	/ JаvaScript
font-size /	fontSize
background-color / backgroundColor
border-left-width /	borderLeftWidth
*/
