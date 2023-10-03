//Типы данных: числа, строки, массивы (для хранения однородных элементов), функции, булевы величины, объекты (Для хранения разнородных данных)
//Конкатенацией - сложение строк (“catenate” — «связывать в одну цепь».)

console.log(21 + "2"); //"212"
    console.log(2 ** 3); // возведение в степень. выведет в консоль 8
    console.log((2 + 2) / 2);
// alert('Привет, Андрей');

let pages;
    pages = 210;

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

let photo = document.querySelector('.photo'); //добраться до свойств элемента с классом .photo
    photo.textContent = "123"; //меняет текстовое содержание
    photo.style.fontSize = '33px'; //менять размер шрифта

// находим элемент .photo и кладём в переменную
photo = document.querySelector('.photo');
    // обращаемся к переменной, добавляем элементу слушатель клика
    photo.addEventListener('click', function () { //addEventListener слушатели событий»
        //что происходит при клике по кнопке
    });

//циклы
for (let i = 0; i <= 4; i = i + 1) {
    console.log(aliExpress[i]);
}