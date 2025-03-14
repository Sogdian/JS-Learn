//Код с проблемами перерендера для примера
  //Компонент List сравнивает именно ссылки на пропсы — и если они изменились запускает перерендер
  import { useState } from 'react';
  export default function NumberList() {
    const [numbers, setNumbers] = useState<number[]>(getInitialNumbers);     // Стейт всех чисел
    const [value, setValue] = useState<number>(0);     // Стейт значения инпута
    const [tab, setTab] = useState<string>('default');     // Стейт активного фильтра
    const visibleNumbers = filterNumbers(numbers, tab); // Функция фильтрации чисел вызывается на каждый рендер
    const handleDelete = (index: number) => {     // Функция удаления числа по его индексу в массиве
      setNumbers((prevState) => {
        const arr = [...prevState];
        arr.splice(index, 1);
        return arr;
      });
    };
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {     // Функция обработчик ввода в инпут
      setValue(Number(e.target.value));
    };
    const onAdd = () => {     // Функция добавления числа
      setNumbers((prevState) => [...prevState, value]);
      setValue(0);
    };
    return (
      <div className="App container" style={{ width: 400, margin: 'auto' }}>
        <div style={{ marginBottom: 20 }}>
          <input
            type="number"
            value={value}
            onChange={onChange}
            style={{ marginBottom: 5 }}
          />
          <button style={{ width: '100%' }} onClick={onAdd}>
            Добавить число
          </button>
        </div>
        <button style={{ width: '100%' }} onClick={() => setTab('default')}>
          Все
        </button>
        <button style={{ width: '100%' }} onClick={() => setTab('even')}>
          Только четные
        </button>
        <button style={{ width: '100%' }} onClick={() => setTab('odd')}>
          Только нечетные
        </button>
        <List data={visibleNumbers} handleDelete={handleDelete} /> {/* Список ререндерится даже при написании в инпут */}
      </div>
    );
  }
  const List = ({
    data,
    handleDelete,
  }: {
    data: number[];
    handleDelete: (index: number) => void;
  }) => {
    return (
      <div style={{ marginTop: 20 }} className="list">
        {data.map((item: number, index: number) => (
          <div onClick={() => handleDelete(index)} key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  };

//React.memo
  //Это обертка над компонентом, которая говорит компоненту, что рендериться снова нужно не всегда, а только когда изменяются его пропсы. На вход принимает:
    // Компонент, который будет мемоизирован.
    // Необязательный параметр: функцию сравнения пропсов, чтобы понять, нужно ли рендерить компонент
  //React.memo хорош, если:
    // компоненты часто перерендериваются, хотя их пропсы не изменяются;
    // когда рендер компонента очень тяжелый.
  //Также в использовании React.memo нет смысла, если ваш компонент всегда принимает нестабильную ссылку в пропсах, то есть ссылку, которая будет новой при каждом рендере, например:propName={() => null}. В этом случаепри каждом рендере будет создаваться новая функция.
  import {memo} from "react";
  const List2 = memo(({ data, onClick }) => {
    return data.map((item) => (
      <div onClick={onClick} key={item}>
        {item}
      </div>
    ));
  });

//useMemo
  // хук useMemo, который выполняет вычисления только тогда, когда изменяется список его зависимостей
  export default function NumberList() {
    //Здесь мы используем хук useMemo и передаем ему функцию для вычисления.
    //Она будет запускаться только тогда, когда изменяются значения из массива — в нашем случае todos и tab
    const visibleNumbers = useMemo(
      () => filterNumbers(numbers, tab),
      [numbers, tab]
    );
  }

//useCallback
  // Хук useCallback будет пересоздавать функцию только в том случае, если изменилось состояние в списке его зависимостей
  //[] означают, что хук выполнится только один раз — при первом рендере компонента.
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); //Функция пересоздаётся при изменении count
  //
  <Button onClick={increment} />
