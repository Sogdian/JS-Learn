//Замыкание функции https://htmlacademy.ru/courses/273/run/20
var collectContainer = function () {
  var food = 'макароны';
  var eatDinner = function () {
    console.log('Поел ' + food);
  };
  return eatDinner;
};
var schoolkid = collectContainer();
schoolkid(); //вызовет функцию eatDinner() = 'Поел макароны'
food = 'бульон';
schoolkid(); //вызовет функцию eatDinner() = 'Поел макароны'
  //На функцию никак не влияют глобальные переменные.

/*
Мы создаём функцию внутри функции. Таким образом мы создаём одну область видимости внутри другой области видимости.
У eatDinner своя область видимости, в которой идёт обращение к переменной food.
Эта переменная объявлена внутри collectContainer, у которой своя область видимости.

Функция eatDinner не находит внутри себя создание переменной food, смотрит в соседнюю область видимости (в область видимости collectContainer).
Там она находит переменную food, узнаёт, что её значение равно строке 'макароны', и фиксирует это значение в памяти.

Код самой функции не меняется, просто в памяти вместе с функцией хранится то значение переменной, которое было при объявлении этой функции.
Поэтому eatDinner «помнит» значение food. Это особенность функций, они помнят своё окружение в момент своего создания. В таком случае говорят о замыкании.
Замыкание — функция, которая помнит о своём окружении. То есть это функция + все значения переменных вне локальной области видимости этой функции.
Речь идёт только о переменных, которые функция использует в своём коде.

Функция eatDinner вместе с переменной food являются замыканием.
*/



//
var collectContainer = function (food) {
  return function () {
    console.log('Поел ' + food);
  };
};

var schoolkid = collectContainer('макароны');
schoolkid(); // Выведет: Поел макароны



//сломали замыкание, удалив параметр food
var food = 'салат';

var collectContainer = function () {
  return function () {
    console.log('Поел ' + food);
  };
};

var schoolkidFirst = collectContainer('макароны');
var schoolkidSecond = collectContainer('пельмешки');
food = 'сельдерей';
schoolkidFirst();
schoolkidSecond();


//Как надо переключать миниатюры
var photos = [
  'gallery/laptop-large.jpg',
  'gallery/microphone-large.jpg',
  'gallery/keyboard-large.jpg',
  'gallery/signboard-large.jpg',
  'gallery/tree-large.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}


//Еще вариант Как надо переключать миниатюры
let active_photo = document.querySelector('.active-photo');
let preview_lists = document.querySelectorAll('.preview-list li a');

for (let preview_list of preview_lists) {
  preview_list.onclick = function (evt) {
    evt.preventDefault();
    active_photo.src = preview_list.href;


    let current_image = document.querySelector('.preview-list a.active-item');
    current_image.classList.remove('active-item');

    preview_list.classList.add('active-item');
  }
}