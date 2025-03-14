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
  const className = cn(styles.root, { [styles.rootPadding as string]: isManyChildren }, props?.className, {
    [styles.displayInline as string]: props.display,
  });

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

//Хорошие практики
  //вместо
  {periodsDataHistory.length === 0 && <EmptyStateMessage title="Период еще не открывался" />}
  //написать
  if (!periodsDataHistory.length) {
    return <EmptyStateMessage title="Период еще не открывался" />;
  }

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
