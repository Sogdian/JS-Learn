type ItemProps = {
  str: string;
};

function Item(props: ItemProps): JSX.Element {
  return <li>{props.str}</li>;
}

type ListProps = {
  list: string[];
};

function List(props: ListProps): JSX.Element {
  return <ul>{
    props.list.map(item =>
      <Item key={item} str={item} />)
  }
  </ul>;
}

const listTextbooks = [
  "Русский язык - Гусарова И.В.",
  "Литература (в 2 частях) - Лебедев Ю.В.",
  "Черчение - Преображенская Н.Г., Кодукова И.В.",
  "Химия - Габриелян О.С., Остроумов И.Г., Сладков С.А.",
  "Информационная безопасность. Кибербезопасность. - Цветкова М.С., Хлобыстова И.Ю.",
];

export const App = (): JSX.Element => {
  return <List list={listTextbooks} />;
};
