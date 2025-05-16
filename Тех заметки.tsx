//запуск js файла
  //cd путь до файла
  //node script.js

//Конфиг .vscode\launch.json
  "configurations": [
      {
        "type": "chrome",
        "name": "Open html",
        "request": "launch",
        "file": "E:/Work/JS/react/indexDraft.html"
      },
    ]

//
  //ctrl+shift+P emulate a focused page
  //ну и там есть всякие другие команды содержащие focus

//thisisunsafe

//devtool: 'eval-source-map',

//пример конкатенации через переменную
  const isIfnsHasCode = reportingPackageRequest.model?.ifnsCode
    ? ` в ИФНС ${reportingPackageRequest.model?.ifnsCode}`
    : "";

//для отладки хинтов
  setTimeout(() => {debugger;}, 3000); //вбить в консоль

//className с булевыми значениями
  const classNameContainer = cn(styles.root, { [styles.displayInline as string]: display === "inline" });
//debounce задердка
  const setIsHoverDebounced = _.debounce((value: boolean) => {
          if (isHoverRef.current === true) {
              setIsHover(value);
              menuState.setHover(value);
          }
      }, 10);

//Два условия
  {showMainItems && !isHideFileStorage && (
    <SideMenu.Item
      id="ExtraFiles"
    />
  )}

//пример иконки
  <InfoCircleIcon64Regular/>
  <ChipIcon width={14} height={14} />

  //пример иконки в зависимости от пропсов
  const stateConfig =
    props.state === PeriodState.Closed
      ? {
        icon: <SecurityLockClosedIcon16Light />,
        text: "Открыть период",
      }
      : {
        icon: <SecurityLockOpenIcon16Light />,
        text: "Закрыть период",
      };
  const { icon: IconByState, text: textByState } = stateConfig;
  //в return:
  <Hint text={textByState} pos={"top center"}>
    <Button use="text" className={styles.button} borderless icon={IconByState} />
  </Hint>

//Разделительная линия divider
  <div className={styles.divider} />

//стейты
//useSessionStorageState используется, когда нам нужно хранить стейт на других страницах в пределах одного раздела

//функции делать через Function Expression
export const getSvkPeriodsYears = () => {
  const years = Array.from({ length: svkLastYear - svkStartYear + 1 }, (_, index) => svkStartYear + index);
  return years.reverse();
};

//Форматирование даты
  const date: "2025-01-07T09:27:53.628924Z",
  export const formatPeriodsDate = (date: any) => {
    return new Date(date)
      .toLocaleString("ru", {
        day: "numeric",
        month: "short",
      })
      .replace(/\./g, "")
      .replace(/(\p{L}{4,})/gu, match => match.slice(0, 3));
  };
  const formattedDate = formatPeriodsDate(date); //месяц из 3 букв, пример, "фев"

  //localDateFromUtcRelative 1 мая 02:00 / Сегодня в 02:00 / Вчера в 02:00
    //из времени бека в формат пользователя
  //format(parseISO(resultExecutionFormData.executedAt), "dd.MM.yyyy")
    //из iso формата в формат 10.06.25

//Хорошие практики
  //вместо
  {periodsDataHistory.length === 0 && <EmptyStateMessage title="Период еще не открывался" />}
  //написать
  if (!periodsDataHistory.length) {
    return <EmptyStateMessage title="Период еще не открывался" />;
  }
  if (isLoadingTaskTabs) {
    return (
      <div className={styles.skeleton}>
        <TableMiniSkeleton />
      </div>
    );
  }

  //все функции в компоненте оборачивать в колбек

  //в компоненте SvkFormRow стиль задается margin`ом

  //Стор
  //resetStore
  resetStore: () => set(defaultState),

  //Порядок - Переменные, кухи, эффекты, хендлеры
  //Такие хуки всегда идут в начале
  const client = useCorpmonClient();
  const { organizationId } = useOrganization();

//ValidationWrapper для оборачивания 1го компонента для валидации
  <ValidationWrapper validationInfo={validation.inn}>
    <Input
      width={161}
      value={inn}
      minLength={juridicalInnLength}
      mask={"9".repeat(juridicalInnLength)}
      onValueChange={value => onChange("inn", value)}
    />
  </ValidationWrapper>

//Роуты
  //SvkRouteWorkspace - список

  //CardRouteWorkspace - карточка
    //Переход в карточку риска
    const handleItemClick = () => {
      navigate(`/${PathMainSection.CARD}/${SvkCardPathSection.SVK_TASK_RISK}/${riskId}`);
    };
    //Отправка модели для ренеринга
    const handleItemClick = () => {
      navigate(`/${PathMainSection.CARD}/${SvkCardPathSection.SVK_TASK_RISK}/`,
        state: linkedModel);
    };
    const { state } = useLocation(); //в карточке

//Omit<IResultExecutionFormData, "id">
  //Вырезать поле из интерфейса

//useShallow
  const {
    periodInfo: taskPeriodInfo,
  } = useTaskStore(
    useShallow(
      ({
         periodInfo,
       }) => ({
        periodInfo,
      })
    )
  );

//Текст в компоненте
  <Checkbox checked={checked} onValueChange={handleChangeChecked}>
    Совпадает с датой заполнения результата
  </Checkbox>

//Импорт иконок https://ui.gitlab-pages.kontur.host/docs/#/icons
  import { PlusIcon16Light } from "@skbkontur/icons/icons/PlusIcon"; //- правильно

//Оптимизация
  //стейты
  export default function App() {
    return (
      <>
        <Form /> //сюда стейты вынести, чтобы не было перерендеров ExpensiveTree (в случае когда стейты будут тут в App)
        <ExpensiveTree />
      </>
    );
  }
  function Form() {
    let [color, setColor] = useState("red");
    return (
      <>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
      </>
    );
  }
  let ExpensiveTree = memo(() => {
    let now = performance.now();
    while (performance.now() - now < 100) { // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  });
