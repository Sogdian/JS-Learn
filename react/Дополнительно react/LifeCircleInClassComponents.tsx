//Жизненный цикл компонента
/* Жизненный цикл компонентов React можно разделить на три основных этапа:
  Монтирование Mounting происходит, когда HTML-дерево компонента вставляется движком React в DOM. (componentDidMount)
  Обновление Updating осуществляется в одном из трёх случаев, если: (componentDidUpdate)
    произошёл рендер родительского компонента,
    изменилось внутреннее состояние в результате вызова this.setState,
    обновление инициировано вызовом встроенного метода this.forceUpdate.
  Размонтирование Unmounting происходит, когда HTML-дерево компонента удаляется из DOM. (componentWillUnmount) */

//Монтирование: componentDidMount
//Этот метод вызывается сразу после монтирования. Внутри componentDidMount можно подписываться на события
class VirtualList extends React.Component<{}, {offsetY: number}> {
  state = { offsetY: 0 }
  componentDidMount() {
    document.addEventListener(
      'scroll',
      () => this.setState({ offsetY: window.pageYOffset })
    )
  }
}

//Обновление: componentDidUpdate
type Props = { productId: number };
class Product extends React.Component<Props, {}> {
  state = {
    productData: null,
    loading: true,
    hasError: false,
  };
  getProductData = () => {
    fetch(`/api/v1/products/${this.props.productId}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({ productData: data.productData, loading: false })
      )
      .catch((e) =>
        this.setState({ ...this.state, loading: false, hasError: true })
      );
  };
  componentDidMount() {
    this.getProductData();
  }
  componentDidUpdate(prevProps: Props, prevState: {}) {
    // Сравниваем предыдущие пропсы с обновившимися. Если они отличаются, то делаем запрос:
    if (this.props.productId !== prevProps.productId) {
      this.getProductData();
    }
  }
}

//Проверка на необходимость повторного рендера:
//...

//Размонтирование: componentWillUnmount
class VirtualList extends React.Component<{}, { offsetY: number }> {
  state = { offsetY: 0 }
  // Создадим отдельную функцию для того, чтобы слушатель событий можно было удалить
  setOffset = () => {
    this.setState({ offsetY: window.pageYOffset })
  };

  componentDidMount() {
    document.addEventListener(
      'scroll',
      this.setOffset
    )
  }
  componentWillUnmount() {
    // Не забывайте отписываться от событий, чтобы не допустить утечек памяти
    document.removeEventListenter(
      'scroll',
      this.setOffset
    )
  }
}
