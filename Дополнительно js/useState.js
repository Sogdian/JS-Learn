function Counter() {
  const [count, setCount] = React.useState(0);
  const [incCount, setIncCount] = React.useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setIncCount(incCount + 1)
        }}
        className="custom-button"
      >
        INC ({incCount})
      </button>
      <button
        onClick={() => {setCount(count - 1)}}
        className="custom-button"
      >
        DEC
      </button>
    </>
  );
}

export default Counter;
