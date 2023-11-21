function HelloWorld(props) { //функция HelloWorld является React-компонентом
    //Все данные, передаваемые в компонент, обязательно являются свойствами объекта props. Их нельзя делать отдельными параметрами функции
  const computedDate = props.date ? props.date : '29.05.2013';

  return (<h1>Привет, Мир!!! Моё приложение создано: <b>{computedDate}</b></h1>) //JSX синтаксис
    //{computedDate} - шаблонизация, в шаблон вставляется выражение
    //Выражение — это конструкция языка JavaScript, которая возвращает значение (тернарый оператор — это выражение)
}

const root = createRoot(document.getElementById("root"));
root.render(HelloWorld({date: '13.02.23'}));


//вызываем функции библиотеки React
root = createRoot(document.getElementById("root")); //
root.render(HelloWorld({date: '13.02.23'})); //

//Деструктуризация в React.js
function UserCard({ name, email, phone, phone2 = ""  }) { //мы получаем объект props и обращаемся к его свойствам напрямую, используя имена свойств
  return (
    <div>
      <h2>{name}</h2> //используем фигурные скобки для извлечения свойств name, email и phone из объекта props
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

/* Хуки
useState - для работы с состоянием, позволяет использовать состояние в функциональных компонентах
  Он принимает начальное состояние и возвращает массив. Первый элемент массива представляет собой текущее состояние, а второй элемент — функцию для изменения этого состояния.
*/
//В коде мы объявили переменную count и функцию setCount и использовали для этого деструктуризацию массива.
//Затем используем count для отображения количества нажатий кнопки и setCount для обновления состояния count.
function Example() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}

