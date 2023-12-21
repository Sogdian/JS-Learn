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

//Приведение к типу
String(1); // Выведет строку: 1 (String)
    toString(1); // Выведет строку: 1 (String)
    Number('1'); // Выведет число: 1 (Number)
    parseInt('17');   // Вернёт 17
    parseInt('10001', 2); // Вернёт 17
    parseInt('11', 16);   // Вернёт 17
/*Приведение к логическому типу данных
    Значения, которые как бы ничего в себе не содержат (как 0, пустая строка '' или undefined), приводятся к false, а все остальные приводятся к true */

let pages = 0;
    pages++; //Увеличит число на 1. Значение переменной: 1
    pages--; //Уменьшит число на 1. Значение переменной: 0

//операторы
    //оператор строгого равенства, тут нет приведения типов. https://htmlacademy.ru/courses/209/run/5
    'a' === 'a'; // Результат: true
    'a' !== 'a'; // Результат: false
    //оператор нестрогого равенства, тут есть приведение типов
    'a' == 'a'; // Результат: true
    //оператор нестрогого неравенства
    'a' != 'a';
    //логическое И
    //true && true; Результат: true; true && false;  // Результат: false; false && true;  // Результат: false; false && false; // Результат: false
    //логическое ИЛИ
    //true || true;   // Результат: true; // true || false;  // Результат: true; // false || true;  // Результат: true; // false || false; // Результат: false

//массивы
    /* в массиве можно хранить любые данные: строки, булевы значения, числа и даже другие массивы.
    если в массиве нет элемента под тем номером, под которым мы записываем, то этот элемент будет создан */
let phrases = []; //пустой массив
let numbers = [1, 2, 3, 4, 5];
    numbers.push(6); //добавить новый элемент в конец
let aliExpress = ['Лазерная указка Xioamo', 'Гарнитура в виде телефонной трубки', 'Форма для льда «Титаник»'];
    aliExpress.length //длина массиыв = 3 элемента
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
//includes - содержит элементов в масссиве
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

//словари
let users = {
    'favorite food': 'Сметана',
    fullname: 'Иванова'
};
console.log(users['favorite food']); //Сметана
console.log(user['fullname']); //Иванова

//циклы
for (let i = 0; i <= 4; i = i + 1) {
    console.log(aliExpress[i]);
}
for (let tooltipButton of tooltipButtons) { //элемент tooltipButton из коллекции tooltipButtons
    console.log(tooltipButton);
}
while (a >= b) {
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
//принимает на вход число и округляет его до целого в большую сторону
Math.ceil(number);
//делает то же самое, только округляет в меньшую сторону
Math.floor(number)
//округляет число до ближайшего целого значения
Math.round(number)
//Генерация случайного числа
Math.random() ;//Она возвращает случайное число между 0 и 0.99999999999, включая 0:
    Math.random() * 10; //если нужно случайное число от 0 до 10
//генерирует случайные числа в заданном промежутке, включая минимальное и максимальное значение.
throwDice(min, max)
//
price.toLocaleString(); //1500 -> 1 500 //преобразует число в строку и возвращает значение, используя указанный языковой стандарт. Если метод используется без параметров, то он использует язык по-умолчанию.
//Интерполяция шаблонной строки
const formattedPrice = `${price.toLocaleString()} ₽/час`; // = price.toLocaleString() + " ₽/час"
    const formattedPrice = {`cards ${!isShownByGrid ? 'list' : ''}`}; // "cards list" или "cards"


//Деструктуризация
const x = 5;
    const obj = {x}; // или const obj = {x: x}; //создать объект со свойством x, равный значению этой переменной х = «возьми значение из переменной x и помести его в свойство объекта с таким же именем».
    const arr = [x]; //также для массивов
//Деструктуризация объекта (destructuring) — это синтаксический способ извлечения значений из объекта и присвоения их переменным.
const obj = {x: 5};
const { x } = obj; // Вместо сonst x = obj.x
console.log(x); // Выведет в консоль 5


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
    element2 = element.querySelector('class'); //искать черз querySelector внутри element, который ищем тоже через querySelector
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
    button.onclick = function() {}; //Свойство onclick означает «по клику» //function() - обработчик событий
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

element.onsubmit = function() {}; //обработчик событий onsubmit добавляется на форму <form> (не на кнопку)
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
select - раскрывающийся список, фильтрация. Значение фильтра записывается в select.value

CSS	/ JаvaScript
font-size /	fontSize
background-color / backgroundColor
border-left-width /	borderLeftWidth

*/
