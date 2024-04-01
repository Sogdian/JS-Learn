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

Псевдомассивы:
  Для работы с коллекциями применяют методы работы с массивами
  Способ превратить любой псевдомассив в массив - Array.from. Он создаёт массив из «массивоподобного» объекта.
  Объект считается массивоподобным, если: его элементы имеют числовые индексы, у него есть свойство length.
  Метод querySelectorAll вернёт коллекцию, которая под эти критерии подходит
  У псевдомассивов нет методов forEach и map
  NodeList — коллекция, которая очень похожа на массив.
    Такую коллекцию можно получить с помощью метода querySelectorAll.
    В NodeList элементы упорядочены, можно обратиться к свойству length и воспользоваться методом forEach
    NodeList может содержать не только DOM-элементы вроде li или div, но и перенос строки, текстовое содержимое элементов в качестве отдельных элементов коллекции.
    NodeList может быть статичной или динамической, это зависит от того, каким способом она вызвана.
  HTMLCollection — свойство children, хранит дочерние элементы в этой коллекции
    Такая коллекция содержит только DOM-элементы. У этой коллекции вообще нет методов

Колбэком - если функцию передают как аргумент, её называют «колбэком»
  передавать надо именно как аргумент, т.е. так integersToCheck.every(isPrime), а не так integersToCheck.every(isPrime());
  или полностью прописывая integersToCheck.every(function(){});
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
//children возвращает тип коллекции — HTMLCollection.
array = document.querySelectorAll('.class'); //Метод ищет по всем селекторам и возвращает статичную коллекцию (псевдомассив с DOM-элементами )
//querySelectorAll находит необходимые элементы один раз, фиксирует их и всё. // Эта запись остаётся статичной и изменения в DOM на неё никак не влияют.
// Можно сказать, что querySelectorAll работает, как любая переменная, в которую мы записали какое-нибудь значение.
// Пока мы не переопределим переменную, в ней так и будет находиться то значение, которое мы в неё записали, независимо от того, что происходит в коде.
//querySelectorAll возвращает тип коллекции — NodeList.
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
  //выбираем элемент c классом 'queen'
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
  //textContent позволяет получить или перезаписать текстовое содержимое элемента. Вёрстка при этом не затрагивается
  //Если в один элемент вложены другие, их текстовое содержимое склеится
  //каждый раз, когда вы переопределяете свойства (innerHTML, textContent), всё DOM-дерево, вложенное в элемент, удаляется и пересоздаётся заново
  //и все значения свойств объектов удаляются
  element.textContent = "123"; //<p>123</p>
  element.children[0].textContent = 1; //если element это div, то это строка создаст <span>1</span>
  //Содержимое элемента. Свойство insertAdjacentText
  //добавляет разметку и текст в документ и не затрагивают существующие элементы
  element.insertAdjacentText = "123"; //работает аналогичным образом, только вставляет текст, как и свойство textContent

//Заменить текстовое содержимое. Свойство innerText
  //innerText, которое тоже предназначено для получения текстового содержимого.
  //Оно отличается от textContent тем, что innerText возвращает только видимое текстовое содержимое.
  //То есть innerText проигнорирует всё, что скрыто свойством display: none, а textContent — нет:
  element.innerText;

//События https://developer.mozilla.org/ru/docs/Web/Events
  //addEventListener - слушатель событий, создается новый объект функции addEventListener, объект занимает память
  //при каждом вызове функция (которую вызывает слушать, она не множится) имеет новый адрес, т.к. каждый раз создается новый объект (множится) слушателя
  //слушатели (объекты) могут копиться (и не использоваться) и будет память утекать


  //Клавиатура
  //keydown — «клавиша нажата». Сработает на любой клавише в тот момент, когда на неё нажмут. В таких случаях говорят, что клавиша «в нижнем положении»;
  //keypress — «нажатие на клавишу». Тоже сработает при нажатии, но проигнорирует клавиши-модификаторы: alt, ctrl, shft и win — на Windows, и control, option, shift и command — на macOS.
  //keyup — «клавиша не нажата». Сработает на любой клавише, но только когда её отпустят.
  const input = document.querySelector('.text-field');
  input.addEventListener('keydown', function () { //keydown - обработать нажатие клавиши
    console.log('Я возникаю, когда печатают в текстовом поле.');
  });
  //Обработчик нажатия клавиши можно повесить и на весь документ
  document.addEventListener('keydown', function () {
    console.log('На что ни нажми — я появлюсь');
  });

  //Мышь
  //mouseover — мышь появляется над элементом, на который установлен слушатель;
  //mouseout — курсор мыши покидает элемент.
  //mousedown — при щелчке мышью, когда кнопка в нижнем положении;
  //mouseup — тоже при щелчке мышью, но когда кнопка отпущена.
  //click — при щелчке левой кнопкой, но только если она нажата и отпущена на элементе
  //contextmenu — при щелчке правой кнопкой, когда она в нижнем положении
  //dblclick — при двойном щелчке левой кнопкой

  //Координаты по горизонтали и вертикали от угла веб-страницы хранятся в свойствах event.pageX и event.pageY соответственно
  button.addEventListener('dblclick', function (event) {
    hint.setAttribute('style',
    `top: ${event.pageY}px;
          left: ${event.pageX}px; `);
  });
  //Координаты относительно угла окна просмотра хранятся в свойствах event.clientX и event.clientY.
  map.addEventListener('click', function(event) {
    whatIsThis.setAttribute('style',
      `left: ${event.clientX}px;
          top: ${event.clientY}px; `);
  });
  //Свойства event.screenX и event.screenY хранят координаты относительно угла монитора, на котором открыт сайт

  element.addEventListener('click', showClick); //showClick - обработчик событий (это колбэк функция)

  //Отмена стандартного поведения браузера
  //Перечислим основные стандартные реакции браузера:
  //клик правой кнопкой — браузер показывает контекстное меню,
  //клик на ссылку — браузер перезагружает страницу и открывает её в той же вкладке,
  //нажатие клавиши в текстовом поле — браузер добавляет в него символ нажатой клавиши,
  //отправка формы и отправки данных — браузер перезагружает страницу.
  button.addEventListener('click', function(evt) {
    evt.preventDefault()
  });

  //addEventListener, onclick, oninput - обработка событий в DOM-элементах без React.
  //Сначала находим DOM-элемент, затем подписываемся на нужное событие.
  button.onclick = function(evt) {
  };

  //Объект event. У разных событий — разное содержимое объекта event, потому что у каждого из них своя специфика.
  //key - название нажатой клавиши
  //keyCode - порядковые номера клавиш
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {} //Код отсюда выполнится только при нажатии ESC
    if (evt.keyCode === 13) {} //Код отсюда выполнится только при нажатии Enter
    //коды клавиш KeyboardEvent: keyCode property https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if (evt.key === 13) {} //вернет название клавиши в виде строки - «Escape» //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    if (evt.code === 13) {} //вернет название клавиши в виде строки - «Escape», при этом на значение не влияет выбранный язык клавиатуры //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  });

  //Снятие слушателя
  function showmessage()   {
    console.log('Объявили функцию заранее, используем её потом');
  }
  someElement.addEventListener('click', showmessage);
  someElement.removeEventListener('click', showmessage); //чтобы больше нельзя было делать showmessage при click по someElement

  //Много одно и того же обработчика на список элементов
  //У каждого элемента свой обработчик, хотя логика постановки лайка одинакова.
  //И каждый такой обработчик — отдельная функция, которая занимает память браузера
  const songLikes = document.querySelectorAll('.song__like');
  songLikes.forEach((songLike) => {
    songLike.addEventListener('click', function (evt) {     // добавим каждой обработчик лайка
      like(evt.target);
    });
  });

  //Делегирование
  //слушатель события добавляется не на сам элемент (а их может быть тысячи), а на ближайшего общего для множества элементов родителя
  //делегировать событие — это переносить обработчик на родительский элемент, но при этом отслеживать дочерний.
  //Если пользователь ставит лайк, кнопка сердечка будет в evt.target, даже если обработчик находится на родителе
  const playlist = document.querySelector('.playlist');
  playlist.addEventListener('click', function (evt) { // добавим обработчик лайка отдельной песни всему плейлисту
    if (evt.target.classList.contains('song__like')) {
      like(evt.target);
    }
  });

  //Всплытие событий
  //Если событие происходит на элементе, оно срабатывает ещё и на каждом элементе-родителе. Такой механизм называется «всплытие»
  //Кроме тех блоков, на которые мы повесили обработчики, событие сработает и на body, html, document и window.
  const parent = document.querySelector('#parent');
  const firstChild = document.querySelector('#firstChild');
  const secondChild = document.querySelector('#secondChild');
  parent.addEventListener('click', callback);
  firstChild.addEventListener('click', callback);
  secondChild.addEventListener('click', callback); //callback сработает 3 раза, для secondChild, firstChild, parent, body, html, document, window, т.е. всплытие к родителю

  //Свойство evt.currentTarget
  //Элемент, на котором висит обработчик, хранится в свойстве evt.currentTarget

  //Отмена всплытия
  //Метод stopPropagation останавливает всплытие на элементе
  //Метод stopImmediatePropagation ещё суровее: он отменяет не только всплытие событий,
    //но и срабатывание всех других обработчиков того же события на этом элементе.
    //Поэтому stopImmediatePropagation остановит только те обработчики, которые описаны после него

//Формы <form>
  /*
   <form name="form1">
    <h2>Форма ввода слова «Яндекс»</h2>
    <input type="text" name="yandex" placeholder="Яндекс">
    <input type="checkbox" name="myCheckbox">
    <textarea name="myTextArea"></textarea>
  </form>
  <form name="form2">
    <h2>Форма про вселенную</h2>
    <input type="number" name="answer" placeholder="Ответ на главный вопрос жизни">
    <select name="mySelect">
      <option value="right">Направо</option>
      <option value="left">Налево</option>
      <option value="forward">Прямо</option>
    </select>
  </form> */
  document.forms.form1; // первая форма
  document.forms.form2; // вторая форма

  //Элементов форм
  document.forms.form1.elements.yandex;  // элементы первой формы
  document.forms.form2.elements.answer; // <input type="number" name="answer" ...

  //Значение текстового поля value
  document.forms.form1.elements.yandex.value; //value в value
  document.forms.form1.elements.textarea.value; //value в textarea

    //Получить значения текстовых полей value
    const str = new FormData(data.forms.form1);
    str.entries() //
    Object.fromEntries(str.entries()) //вернет ключ значения

  //Значение чекбокса и радиокнопки
  //Если чекбокс отмечен, в консоль попадёт true, если нет — false.
  document.forms.form1.elements.myCheckbox.checked; //checked в myCheckbox

  //Значение списка с вариантами ответов
  document.forms.form1.elements.mySelect.value; //value в mySelect

  //События change и input
  textInput.addEventListener('input', callback);   //input — срабатывает при вводе или удалении каждого символа;
  textInput.addEventListener('change', callback); //change — только когда поле изменилось и пользователь перешёл к другому элементу формы
  textInput.addEventListener('submit', callback); //submit — событие появляется при отправке формы
  textInput.addEventListener('invalid', callback); //invalid — событие появляется если validity = false

  //Сброс всех полей формы
  form.addEventListener('submit', function (evt) {
    form.reset();
  });

  //Программный сабмит формы
  form.addEventListener('input', function (evt) {
    if (input.length === 4) {
      form.submit();
    }
  });

//Кнопки <button>
  //submit - Отправка формы на сервер — при нажатии на кнопку
  /*<button type="submit">Отправить</button>*/
  //reset - Сброс полей ввода.
  /*<button type="reset">Сбросить данные формы</button>*/
  //Прочее — нет события по умолчанию, можно назначить на кнопку что угодно.
  /*<button type="button">Что-то сделать</button>*/

  //Событие по умолчанию submit
  //evt.submitter - кнопка сабмита
  form.addEventListener('submit', function (evt) {
    evt.submitter.textContent = "Сохранение...";
  });

//Цель события. Cвойство target
  //В target хранится элемент, на котором сработало событие:
  const button = document.querySelector('.button');
  button.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
  });

  //change, submit
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

//Тег template
const userTemplate = document.querySelector('#user'); //например, #user это тег <template>
const userTemplate = document.querySelector('#user').content; //получить содержимое тега

//Клонирование элементов
//обработчики событий элемента не скопируются. Их придётся добавить заново
//Метод cloneNode только копирует элемент, но не добавляет его в DOM. Для этого к копии используют append или другой метод добавления
element.cloneNode(false); //Вернёт склонированный элемент без вложенностей
element.cloneNode(true); //Вернёт склонированный элемент со всеми вложенностями

const songTemplate = document.querySelector('#song-template').content; //пример с <template>
const songElement = songTemplate.querySelector('.song').cloneNode(true); //внутри <template> найти <div class="song">, который и надо склонировать, а не сам шаблон

//Колбэк функции
//Аргумент 1. Текущий элемент массива item
positions.forEach(function(item) {
  console.log(item);
});

//Аргумент 2. Индекс текущего элемента index
//Первый параметр считывается как текущий элемент, второй — как его индекс.
const counter = [ 'Царь', 'Царевич' ];
const counterIndexed = counter.map(function (person, index) {
  return `${index + 1}. ${person}`;
});
console.log(counterIndexed); // [ "1. Царь", "2. Царевич"]

//Аргумент 3. Исходный массив
const ivans = [ 'Иван I Калита', 'Иван II  Красный' ];
const ivansIndexed = ivans.map(function(item, index, array) {
  const currentIndex = `(${(index + 1)} из ${array.length})`;
  return `${item} ${currentIndex}`;
});
console.log(ivansIndexed); //[ "Иван I Калита (1 из 2)", "Иван II  Красный (2 из 2)" ]

//onload
  const image = document.createElement('img');
  image.onload = () => {} //выполнить код после загрузки изображения

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
