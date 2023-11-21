function Example() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("John");

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <p>Вас зовут {name}</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
      <button onClick={() => setName("Jane")}>
        Изменить имя
      </button>
    </div>
  );
}