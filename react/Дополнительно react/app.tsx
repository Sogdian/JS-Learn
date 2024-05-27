type CardProps = {
  title: () => {};
  body: () => {};
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <CardTitle />
      <CardBody />
      <button type="button">В корзину</button>
    </div>
  );
};

function CardTitle() {
  return (
    <h5 className="card-title">Звезда Сириус</h5>
  );
};

function CardBody() {
  return (
    <div className="card-body">
      <p>
        Звезда созвездия Большого Пса. Звезда главной последовательности,
      </p>
      <div className="price">Цена: ооооочень много</div>
    </div>
  );
};

export const App = () => {
  return (
    <Card title={CardTitle} body={CardBody} />
  );
};
