let cat = { name: "Алан", surname: 'Кей' };

// Получаем ключи объекта
let keys = Object.keys(cat);

// Перебираем ключи и выводим значения
keys.forEach(key => {
  console.log(cat[key]);
});
