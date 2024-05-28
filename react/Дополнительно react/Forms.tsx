//Работа с формами
//1. Управляемые компоненты
//Поля ввода, такие как input, textarea и select, обычно обладают собственным состоянием и обновляют его, когда пользователь вводит данные
//input
import { ChangeEvent, SyntheticEvent, useState } from 'react';

function Input() {
  const [value, setValue] = useState(""); //Состояние, в котором содержится значение поля ввода
  function handleChange(e: ChangeEvent<HTMLInputElement>) { //Обработчик изменения поля ввода обновляет состояние
    setValue(e.target.value);
  }
  return (
    <input type="text" value={value} onChange={handleChange} /> //Значение элемента «привязывается» к значению состояния
  );
}

//textarea
function NewMessage() {
  const [value, setValue] = useState('');
  function handleChange(e: ChangeEvent<HMTLTextAreaElement>) {
    setValue(e.target.value);
  }
  function resetValue() {
    setValue('');
  }
  return (
    <>
      <textarea type="text" value={value} onChange={handleChange} />
      <button onClick={resetValue}>Очистить</button>
    </>
  );
}

//2. Неуправляемые компоненты
//Такие компоненты используют DOM как источник данных, доступ к которому можно получить через ref
//Изменения в поле ввода здесь не соединены с компонентом и не влияют на его внутреннее состояние
function BlogpostTitleInput() {
  const input = useRef<HTMLTextAreaElement|null>(null);
  function handleSubmit(e: SyntheticEvent) {
    alert("Заголовок поста в блоге: " + input.current.value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Заголовок:
        <textarea ref={input} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
}
//Значение по умолчанию
<textarea ref={input} defaultValue="Привет, мир!" /> //Строка «Привет, мир!» уже будет записана в textarea.

//Загрузка файлов
function AvatarInput() {
  const fileInput = useRef<HTMLInputElement|null>(null);
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    alert(`Новый аватар - ${fileInput.current.files[0].name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Выберите фото:
        <input type="file" ref={fileInput} />
      </label>
      <button type="submit">Сохранить</button>
    </form>
  );
}

//Работа с select
const EmployeeRole = () => {
  const [role, setRole] = useState('designer');
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  }
  return (
    <label>
      Ваша роль в проекте:
      <select value={role} onChange={handleChange}>
        <option value="designer">Дизайнер</option>
        <option value="developer">Разработчик</option>
      </select>
    </label>
  );
}
//<select> можно использовать и для множественного выбора:
<select multiple={true} value={['cheddar', 'mozzarella']}>
</select>

//Поля ввода <input type="text">, <textarea> и <select> работают очень похоже.
//Они принимают атрибут value и позволяют получить доступ к значению в событии onChange через event.target.value.

//Работа с radio
//Для <input type="radio"> необходимо проверять установленное значение на соответствие value и использовать результат этой проверки в атрибуте checked:
const SelectAppearance = () => {
  const [mode, setMode] = useState('dark');
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value);
  }
  const formSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(mode)
  }
  return (
    <form onSubmit={formSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="light"
            checked={mode === "light"}
            onChange={onValueChange}
          />
          Светлая тема
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="dark"
            checked={mode === "dark"}
            onChange={onValueChange}
          />
          Тёмная тема
        </label>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

//Работа с checkbox
const RememberOnLogIn = () => {
  const [checked, setChecked] = useState(true);
  const onChange = (e) => {
    setState(e.target.checked); // Тут у event.target используем свойство checked
  }
  return (
    <label>
      Запомнить меня и больше не разлогинивать
      <input
        name="rememberMe"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

//Обработка нескольких полей одним обработчиком
const SubscribeSettings = () => {
  const [state, setState] = useState({
    subscribed: false, // Соответствует полю ввода subscribed
    email: '' // Соответствует полю ввода email
  })
  const handleInputChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value; // Определяем, откуда пришло событие: из чекбокса или текстового поля ввода
      setState({
        ...state,
        [name]: value
      });
    }
  return (
    <form>
      <label>
        Получать уведомления
        <input
          name="subscribed"
          type="checkbox"
          checked={state.subscribed}
          onChange={handleInputChange("subscribed")}
        />
      </label>
      <label>
        E-mail:
        <input
          disabled={state.subscribed}
          name="email"
          type="text"
          value={state.email}
          onChange={handleInputChange("email")}
        />
      </label>
    </form>
  );
}

  //Ошибка смены режима
  <label>
    E-mail:
    <input
      disabled={state.subscribed}
      name="email"
      type="text"
      value={state.email ?? ""}
      onChange={handleInputChange("email")}
    />
  </label>
