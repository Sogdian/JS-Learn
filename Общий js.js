/*Типы данных: числа, строки, массивы (для хранения однородных элементов), функции, булевы величины, объекты (Для хранения разнородных данных)
Конкатенацией - сложение строк (“catenate” — «связывать в одну цепь».)
зарезервированные слова https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%9A%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0
*/

console.log(21 + "2"); //"212"
    console.log(2 ** 3); // возведение в степень. выведет в консоль 8
    console.log((2 + 2) / 2);
console.log(document.querySelector('.page'));
// alert('Привет, Андрей');

let pages;
    pages = 0;
    pages++; //Увеличит число на 1. Значение переменной: 1
    pages--; //Уменьшит число на 1. Значение переменной: 0

//оператор строгого равенства. Значения, которые проверяет оператор, называют операндами
'a' === 'a'; // Результат: true
'a' !== 'a'; // Результат: false
    //оператор нестрогого равенства
    'a' == 'a'; // Результат: true
    //оператор нестрогого неравенства
    'a' != 'a';
    //логическое И
    //true && true; Результат: true; true && false;  // Результат: false; false && true;  // Результат: false; false && false; // Результат: false
    //логическое ИЛИ
    //true || true;   // Результат: true; // true || false;  // Результат: true; // false || true;  // Результат: true; // false || false; // Результат: false

//массивы
let phrases = []; //пустой массив
let aliExpress = ['Лазерная указка Xioamo', 'Гарнитура в виде телефонной трубки', 'Форма для льда «Титаник»'];
    console.log(aliExpress[1]);
aliExpress.length //длина массиыв

let user = { //user - объект. Объекты содержат свойства
    name: 'Мария',
    dotaLevel: 21,
    dogName: 'Железногорск'
};
console.log(user.name);

//Генерация случайного числа
Math.random() ;//Она возвращает случайное число между 0 и 0.99999999999, включая 0:
    Math.random() * 10; //если нужно случайное число от 0 до 10

//Округлить до целых
Math.floor(Math.random() * 10);

function sayHello(name) {
    return 'Привет, ' + name;
}
    let greeting = sayHello('Венера');

//циклы
for (let i = 0; i <= 4; i = i + 1) {
    console.log(aliExpress[i]);
}
for (let tooltipButton of tooltipButtons) { //элемент tooltipButton из коллекции tooltipButtons
    console.log(tooltipButton);
}

//------------------------------
/*
aria-pressed - атрибут указывает, в каком состоянии находится кнопка-переключатель. Например, если лайк стоит, то значение у атрибута должно быть "true", а если лайка нет, то "false". Атрибут aria-pressed не влияет на внешний вид кнопки, но он помогает скринридерам правильно прочитать содержимое страницы. https://medium.com/web-standards/toggle-buttons-a41388e80974#2347
append - метод не копирует элементы, а перемещает. Если указать в скобках элемент, который уже есть в разметке, этот элемент исчезнет со своего прежнего места и появится там, куда его добавил метод append. Получить таким образом несколько элементов не выйдет.
data-name1-name2 - дата атрибут. Атрибуты, начинающиеся с data-, обычно используют, чтобы хранить вспомогательную информацию. https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes
output - тег используют, чтобы показать на странице результат вычислений, полученный с помощью JavaScript. https://htmlacademy.ru/courses/74/run/14
*/


element = document.querySelector('.class'); //Метод ищет по селектору, который указан в скобках. Словом document обозначается веб-страница, к которой подключили скрипт.
element = document.querySelectorAll('.class'); //Метод ищет по всем селекторам и возвращает коллекцию
element.textContent = "123"; //textContent хранит в себе текстовое содержимое элемента
element.style.fontSize = '33px'; //менять размер шрифта
element.classList.remove('class'); //Метод убирает с элемента тот класс, который указан в скобках
element.classList.add('class'); //метод добавляет элементу класс (без точки), указанный в скобках.
button.addEventListener('click', function () { }); //addEventListener слушатели событий» //https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
    button.onclick = function() { }; //Свойство onclick означает «по клику» //function() - обработчик событий
element.classList.toggle('.class'); //добавление класса, когда этого класса нет и удаление класса (изначального), когда этот класс есть. Если класс у элемента есть, метод classList.toggle ведёт себя как classList.remove и класс у элемента убирает. А если указанного класса у элемента нет, то classList.toggle, как и classList.add, добавляет элементу этот класс.
element.classList.contains('.class'); //проверить, есть ли у элемента класс. вернёт true (истина), если класс у элемента есть, и false (ложь), если класса нет.
element.onsubmit = function() {}; //обработчик событий onsubmit добавляется на форму <form> (не на кнопку)
input = document.querySelector('input').value; //value - это значение поля ввода (input), значение вернется только после того, как форма была отправлена. textContent вернет пусто, т.к. для JavaScript поля формы не имеют текстового содержимого, их значения хранятся именно в value.
    element.oninput = function() {} //вернет value из формы в процессе ввода текста (сразу каждую букву)
parent.append(element); //Добавляем новый элемент в конец элемента-родителя. При этом содержимое элемента-родителя не затирается. Добавлять с помощью этого метода можно и элементы, и простые строки.
document.createElement('div'); //Создание элемента div в document
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




/*
select - раскрывающийся список, фильтрация. Значение фильтра записывается в select.value

CSS	/ JаvaScript
font-size /	fontSize
background-color / backgroundColor
border-left-width /	borderLeftWidth

*/