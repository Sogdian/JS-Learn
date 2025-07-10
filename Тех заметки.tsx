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

//для отладки хинтов
setTimeout(() => {debugger;}, 3000); //вбить в консоль



//пример конкатенации через переменную
  const isIfnsHasCode = reportingPackageRequest.model?.ifnsCode
    ? ` в ИФНС ${reportingPackageRequest.model?.ifnsCode}`
    : "";

//стили style
  //стили className с булевыми значениями
  const classNameContainer = cn(styles.root, { [styles.displayInline as string]: display === "inline" });
  const classNameIcon = cn(styles.icon, props.className && styles[`icon${props.className}`]); //передать конкретный стиль в className

  //style в return
  export function FullPageSpinner(): ReactElement {
    const globalStyle = `body { overflow: hidden !important }`;
    return (
      <div className={styles.fullPageSpinner}>
        <style type="text/css">{globalStyle}</style>
        <Spinner caption={null} type="big" />
      </div>
    );
  }

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

//Импорт иконок https://ui.gitlab-pages.kontur.host/docs/#/icons
  import { CheckAIcon } from '@skbkontur/icons/icons/CheckAIcon'; // ✅
  import { MathDeltaIcon } from '@skbkontur/icons/icons/MathDeltaIcon'; // ✅
  import { MathDeltaIcon20Light } from '@skbkontur/icons/icons/MathDeltaIcon/MathDeltaIcon20Light'; // ✅
  import { ArchiveBoxIcon24Solid } from '@skbkontur/icons/icons/ArchiveBoxIcon/ArchiveBoxIcon24Solid'; // ✅

  //пример иконки
    <InfoCircleIcon64Regular/>
    <ChipIcon width={14} height={14} />
  //иконка с цветом
    <MiniModal className={styles.icon} title={title} icon={<WarningCircleIcon64Regular color={"#FE4C4C"} />}>>

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

//https://wiki.skbkontur.ru/pages/viewpage.action?pageId=945361022
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

//Роуты в Corpmon
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

//Импорт
  import { KnowledgeBaseReject } from "@/Modules/KnowledgeBase/Pages/KnowledgeBasePage";

  KnowledgeBase
    Pages
      KnowledgeBasePage
        Containers
          KnowledgeBasePage
            KnowledgeBaseReject.less
            KnowledgeBaseReject.tsx
            index.ts
              export { KnowledgeBaseReject } from "./KnowledgeBaseReject";
      index.ts
        export * from "./Containers/KnowledgeBasePage";


//Навигация
  history.push(isKnowledgeBase)
  window.open(isKnowledgeBase, "_blank") //в новом окне





















//Оптимизация
  //https://overreacted.io/before-you-memo/
  //вар 1
  //проблема - при изменении color происходит перерендер ExpensiveTree
  export default function App() {
    let [color, setColor] = useState('red');
    return (
      <div>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
        <ExpensiveTree />
      </div>
    );
  }
  function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {      // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  }
  //решение - вынести стейты в отдельный компонент (Form) (в случае когда стейты связаны только с 1 компонентом)
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
  let ExpensiveTree = React.memo(() => { //тут можно и без memo, т.к. ExpensiveTree не связан с состоянием color
    let now = performance.now();
    while (performance.now() - now < 100) { // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  });
  //вар 2
  //проблема - при изменении color происходит перерендер ExpensiveTree
  export default function App() {
    let [color, setColor] = useState('red');
    return (
      <div style={{ color }}> //стейт связан еще и с div
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p>Hello, world!</p>
        <ExpensiveTree />
      </div>
    );
  }
  //решение - вынести стейты связанный со связанным компонентом (<div style={{ color }}>) в отдельный компонент (ColorPicker) (в случае когда стейты связаны с > 1 компонентом)
  //ту при измении color компонент ExpensiveTree (переданный как children) не перерендеривается ?
  export default function App() {
    return (
      <ColorPicker>
        <p>Hello, world!</p>
        <ExpensiveTree />
      </ColorPicker>
    );
  }
  function ColorPicker({ children }) {
    let [color, setColor] = useState("red");
    return (
      <div style={{ color }}>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        {children}
      </div>
    );
  }
  //вар 3
  //проблема - при изменении color происходит перерендер ExpensiveTree
  export default function App() {
    let [color, setColor] = useState('red');
    return (
      <div style={{ color }}> //стейт связан еще и с div
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p>Hello, world!</p>
        <ExpensiveTree />
      </div>
    );
  }
  //решение - обернуть ExpensiveTree в memo
  let ExpensiveTree = memo(() => {
    let now = performance.now();
    while (performance.now() - now < 100) { // Artificial delay -- do nothing for 100ms
    }
    return <p>I am a very slow component tree.</p>;
  });

//
