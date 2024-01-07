const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// Список реактивов передаём в reagents
// root.render(<App reagents={['air', 'earth', 'water']} />);

function App([]) { //function App({ reagents })
  const [firstCounter, setFirstCounter] = React.useState(0);
  const [secondCounter, setSecondCounter] = React.useState(0);

  const handleFirstClick = () => {
    setFirstCounter((count) => count + 1);
  };

  const handleSecondClick = () => {
    setSecondCounter((count) => count + 1);
  };

  const firstSelectedOption = reagents[1];
  const secondSelectedOption = reagents[2];

  // Добавьте для кнопок-переключателей класс для выбранного реактива
  return (
    <Game>
      <button
        onClick={handleFirstClick}
        className={'button button-first button-${firstSelectedOption}'}
        type="button"
      >
        {firstCounter}
      </button>
      <button
        onClick={handleSecondClick}
        className={'button button-second button-${secondSelectedOption}'}
        type="button"
      >
        {secondCounter}
      </button>
    </Game>
  );
}

function Game({ children }) {
  return (
    <section className="game">
      <header className="game-header">
        <h1 className="game-title">Лаборатория</h1>
        <p className="game-description">химические опыты</p>
      </header>
      <img
        className="logo"
        src="img/atom.svg"
        width="78"
        height="78"
        alt="Атом"
      />
      {children}
      <img
        className="professor"
        src="img/professor.svg"
        width="200"
        height="200"
        alt="Профессор"
      />
    </section>
  );
}
