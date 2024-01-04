function Counter() {
  const [count, setCount] = React.useState(0);
  const [incCount, setIncCount] = React.useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1); //setCount((state) => state + 1); - можно и через эту функцию обновления, state - универсальный параметр
          setIncCount(incCount + 1)
        }}
      >
        INC ({incCount})
      </button>
      <button
        onClick={() => {setCount(count - 1)}}
      >
        DEC
      </button>
    </>
  );
}

export default Counter;
