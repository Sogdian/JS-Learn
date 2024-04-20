//Принципы SOLID
  //S — Single Responsibility Principle - Принцип единственной ответственности
  //на каждую программную сущность — например класс, метод, объект или функцию — должна быть возложена одна единственная обязанность
  class Api { /* Класс для работы с API */
    static async query<Result>(url: string): Promise<Result> {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return await response.json();
    }
  }
  class Checkbox { /* Класс для работы с чекбоксами */
    static render(id: string, title: string, checked: boolean) {
      return `
              <div>
                  <input type="checkbox" name="${id}" ${checked ? 'checked' : ''} />
                  <label for="${id}">${title}</label>
              </div>
          `;
    }
  }
  interface Todo {
    id: string;
    title: string;
    ready: boolean;
  }
  class TodoApi { /* Класс для работы с Todo API */
    static async fetchTodos() {
      try {
        return Api.query<Todo[]>('https://some.ru/api/todos');
      }
      catch (error) {
        console.error('Ошибка! Не удалось загрузить список дел!', error);
      }
      return null;
    }
  }
  class TodoLayout { /* Класс для отображения To do */
    static render(todo: Todo) {
      return Checkbox.render(todo.id, todo.title, todo.ready);
    }
  }
  class TodosState { /* Класс, работающий с состоянием To do */
    private todos: Todo[] | undefined;
    setTodos(todos: Todo[]) {
      this.todos = todos;
    }
    finishTodo(id: string) {
      const todo = this.todos?.find(todo => todo.id === id);
      if (todo) {
        todo.ready = true;
      }
    }
  }

  //O — Open–closed Principle - Принцип открытости-закрытости
  //программные сущности должны быть открыты для расширения, но закрыты для модификации
  interface Engine {
    wheelsCount: number;
  }
  class Car implements Engine {
    get wheelsCount() {
      return 4;
    }
  }
  class Bicycle implements Engine {
    get wheelsCount() {
      return 2;
    }
  }
  function getWheelsCount(engine: Engine) {
    return engine.wheelsCount;
  }

  //L — Liskov Substitution Principle - принципу подстановки Барбары Лисков
  //любой класс можно заменить его производным классом, и при этом программа будет работать так, как ожидается

  //I — Interface Segregation Principle - принцип разделения интерфейсов
  //избегать зависимости от того, что не используется
  interface Contentful {
    content: string;
  }
  interface Clickable {
    onClick(): void;
  }
  const paragraph: Contentful = {
    content: 'Свободу слова не задушить, пусть даже помыслы поколения чисты'
  }
  const button: Clickable & Contentful = {
    content: 'Заказать',
    onClick: () => {
      console.log('Готово!')
    }
  }

  //D — Dependency Inversion Principle - принципу инверсии зависимостей
  //модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций

//Принцип DRY - Don’t Repeat Yourself — «Не повторяйтесь»
  function getGreeting(): string {
    const time = new Date().getHours();
    if (time < 12) {
      return 'Доброе утро';
    }
    if (time < 18) {
      return 'Добрый день';
    }
    return 'Добрый вечер';
  }
  function greetUser(name: string) {
    const greeting = getGreeting();
    console.log(`${greeting}, ${name}! Рады видеть вас снова!`);
  }
  function greetGuest(name: string) {
    const greeting = getGreeting();
    console.log(`${greeting}, ${name}! Добро пожаловать! 🤗`);
  }
  greetGuest('Иван');
  greetUser('Иван');

//Принципы BDUF, KISS, Бритва Оккама, SSOT
  //todo Дописать

//Композиция классов
  //Чтобы реализовать композицию в классе, экземпляры зависимых классов делают свойствами класса, который их использует.
  class MySQLDataBase {   /* Работает с базой данных */
    constructor(private host: string) {};
    connect(): boolean { /* ... Подключение к базе данных ... */
      return true;
    }
  }
  class ConsoleLogger { /* Обрабатывает логи */
    constructor(private appName: string) {};
    log(message: string) {
      console.log(new Date().toDateString(), this.appName, message); /* Добавляет в лог текущую дату и название приложения */
    }
  }
  class API { /* Класс API использует классы MySQLDataBase и ConsoleLogger */
    db: MySQLDataBase; //свойства класса API - это экземпляр зависимого класса MySQLDataBase
    logger: ConsoleLogger; //свойства класса API - это экземпляр зависимого класса ConsoleLogger
    constructor(appName: string) {
      /* Для классов MySQLDataBase и ConsoleLogger нужны экземпляры — сохраняем их в свойства текущего класса */
      this.db = new MySQLDataBase('localhost');
      this.logger = new ConsoleLogger(appName);
    }
    init() {
      if (!this.db.connect()) { /* Теперь классы можно использовать! */
        this.logger.log('База данных недоступна!');
      }
      this.logger.log('База данных успешно подключена!')
    }
  }
  const api = new API('MyApp');
  api.init();

//Dependency Injection - Внедрение зависимостей
  interface DataBase { /* Вводим абстракцию - интерфейс DataBase */
    connect(): boolean;
  }
  class MySQLDataBase implements DataBase { /* Класс MySQLDataBase её реализовывает */
    constructor(private host: string) {};
    connect(): boolean {
      return true;
    }
  }
  class API {
    db: DataBase; /* Класс API теперь зависит от абстракции */
    constructor(db: DataBase) { /* Ничего не знаем про MySQLDataBase, есть только абстракция! */
      this.db = db;
    }
  }
  const db = new MySQLDataBase('localhost');
  const api1 = new API(db);

//Паттерны проектирования
  //todo

//Паттерн Singleton
  //гарантирует, что у класса будет только один экземпляр
  //Экземпляр Singleton-класса имеет глобальную точку доступа, поэтому его можно получить из любого места программы
  class Singleton {
    private static instance: Singleton;
    private constructor() { } //экземпляр класса нельзя создать извне
    static getInstance(): Singleton { //создаёт инстанс класса при первом вызове, а затем всегда возвращает его
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  //пример2
  class Randomaizer {
    private participants: string[];
    private static instance: Randomaizer;
    private  constructor() {
      this.participants = [];
    }
    static getInstance(): Randomaizer {
      if (!Randomaizer.instance) {
        Randomaizer.instance = new Randomaizer();
      }
      return Randomaizer.instance;
    }
    private selectRandomIndex() {
      return Math.round(Math.random() * (this.participants.length - 1));
    }
    addParticipant(name: string) {
      this.participants.push(name);
    }
    finish() {
      const winner = this.participants[this.selectRandomIndex()];
      console.log(`Розыгрыш завершён! Количество участников: ${this.participants.length}`);
      console.log(`Победителем становится ${winner}! 🎉`);
      this.participants = [];
      return winner;
    }
  }
  Randomaizer.getInstance().addParticipant('Егор');
  Randomaizer.getInstance().finish();
  Randomaizer.getInstance().addParticipant('Игорь');
  Randomaizer.getInstance().addParticipant('Вадим');
  Randomaizer.getInstance().finish();

//Паттерны Adapter, Facade, Proxy
  //todo Facade, Proxy

  //Adapter
  class ArtistApi {
    getArtistInfo() {
      return {
        name: 'Василий Павлов',
        albums: ['Видеть']
      }
    }
    getAlbumInfo() {
      return {
        title: 'Видеть',
        songs: ['Любимая', 'Новая жизнь', 'Лови волну']
      }
    }
  }
  type Album = {
    title: string;
    songs: string[];
  }
  type Artist = {
    name: string;
    albums: Album[]
  }
  interface IArtistGraphql {
    artistQuery(): Artist;
  }
  class ArtistGraphql implements IArtistGraphql {
    artistQuery(): Artist {
      return {
        name: 'Василий Павлов',
        albums: [
          {
            title: 'Видеть',
            songs: ['Любимая', 'Новая жизнь', 'Лови волну']
          }
        ]
      }
    }
  }
  class ArtistGraphqlAdapter implements IArtistGraphql {
    constructor(private artistApi: ArtistApi) {}
    artistQuery(): Artist {
      const artist = this.artistApi.getArtistInfo();
      return {
        ...artist,
        albums: artist.albums.map(() => this.artistApi.getAlbumInfo()),
      }
    }
  }
  const api2 = new ArtistGraphqlAdapter(
    new ArtistApi()
  );
  console.log(
    api2.artistQuery()
  );
  //пример2
  class EmailInput {
    value: string;
    constructor() {
      this.value = '';
    }
    getErrors(): string | undefined {
      if (!this.value.includes('@')) {
        return 'Введён невалидный email';
      }
      return undefined;
    }
  }
  interface Editor<Data> {
    initialize: (value: Data) => void,
    validate: () => void,
    getValue: () => Data,
  }

  class EmailEditorAdapter implements Editor<string> {
    constructor(private input: EmailInput) {}
    getValue(): string {
      return this.input.value;
    }
    initialize(value: string): void {
      this.input.value = value;
    }
    validate(): boolean {
      const error = this.input.getErrors();
      return error === undefined;
    }
  }

  const emailInput = new EmailInput();
  const emailEditor = new EmailEditorAdapter(emailInput);

  emailEditor.initialize('hello@some.ty');

  console.log(emailEditor.getValue());

  if (emailEditor.validate()) {
    console.log('Email сохранён!');
  }

  //Facade
  //пример
  interface User {
    id: string,
    name: string,
    city: string,
  }
  class UserService {
    private users: User[] = [
      { id: '2061', name: 'Тимур', city: 'Саранск' },
      { id: '5864', name: 'Илья', city: 'Майкоп' },
      { id: '3756', name: 'Евгений', city: 'Краснодар' },
    ];
    getCurrentUser(id: string) {
      return this.users.find(user => user.id === id);
    }
  }
  interface City {
    name: string,
    region: string,
  }
  class GeoService {
    private cities: City[] = [
      { name: 'Саранск', region: 'Республика Мордовия' },
      { name: 'Майкоп', region: 'Республика Адыгея' },
      { name: 'Краснодар', region: 'Краснодарский Край' },
    ];
    getCity(cityName: string) {
      return this.cities.find(city => city.name === cityName);
    }
  }
  class Facade {
    constructor(private users: UserService, private geo: GeoService) {}
    getUserRegion(userId: string): string | undefined {
      const user = this.users.getCurrentUser(userId);
      if (!user) return undefined;
      const city = this.geo.getCity(user.city);
      if (!city) return undefined;
      return city.region;
    }
  }
  const facade = new Facade(new UserService(), new GeoService());
  console.log(
    facade.getUserRegion('5864') // Выведет: 'Республика Адыгея'
  );

  //Proxy
  interface IClient {
    name: string;
    makeOrder(meal: string): void;
  }
  class Client implements IClient {
    constructor(public name: string) {}
    makeOrder(meal: string) {
      console.log(`${this.name} заказал ${meal}`);
    }
  }
  class ClientProxy implements IClient {
    private client: IClient;
    private orderCount: number; // Объявление приватного счетчика заказов
    constructor(client: IClient) {
      this.client = client;
      this.orderCount = 0; // Инициализация счетчика нулём
    }
    get name() {
      return this.client.name;
    }
    set name(value: string) {
      this.client.name = value;
    }
    makeOrder(meal: string) {
      this.client.makeOrder(meal); // Выполнение исходного makeOrder
      this.orderCount++; // Увеличение счетчика
      if (this.orderCount === 5) { // Проверка, сделал ли клиент 5 заказов
        console.log(`${this.name}, поздравляем! Теперь вы наш постоянный клиент и получаете скидку 10%!`);
      }
    }
  }
  const client = new ClientProxy(new Client('Игорь'));
  client.makeOrder('салат Оливье');
  client.makeOrder('шашлык');

//Паттерн Observer
  //todo
  //Паттерн Observer позволяет создать зависимость между объектами-наблюдателями и одним объектом-источником
  //паттерн Observer состоит из двух частей:
    //Observer (наблюдатель, подписчик) — реагирует на изменения
    //Observable (наблюдаемый объект, источник) — регистрирует подписчиков и уведомляет их о новых изменениях
  interface Observer { //тип подписчика
    update(news: string): void;
  }
  class Subscriber implements Observer{ //подписчик
    constructor(public name: string) {}
    update(news: string): void { /* Функция реагирования на новые изменения источника */
      console.log(`${this.name} получил новость: «${news}»`);
    }
  }
  interface Observable { //тип наблюдаемого объекта
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(news: string): void;
  }
  class NewsPublic implements Observable { //источник
    subscribers: Observer[] = [];
    subscribe(observer: Observer) { /* Функция подписки */
      this.subscribers.push(observer);
    }
    unsubscribe(observer: Observer) { /* Функция отписки */
      this.subscribers = this.subscribers.filter(current => current !== observer);
    }
    notify(news: string) { /* Функция уведомления подписчиков */
      this.subscribers.forEach(observer => observer.update(news));
    }
  }
  const firstNewsPublic = new NewsPublic();
  const subsciber1 = new Subscriber('Анатолий');
  const subsciber2 = new Subscriber('Антон');
  /* Создаём подписки */
  firstNewsPublic.subscribe(subsciber1);
  firstNewsPublic.subscribe(subsciber2);
  /* Публикуем новость */
  firstNewsPublic.notify('Практический опыт показывает, что реализация намеченного плана развития влечет за...');
  /* Подписчики реагируют */
  // Анатолий получил новость: «Практический опыт показывает, что реализация намеченного плана развития влечет за...»
  // Антон получил новость: «Практический опыт показывает, что реализация намеченного плана развития влечет за...»

//пример
  type ObserverFn<T> = (state: T) => void;
  interface Observable<T> {
    subscribe(fn: ObserverFn<T>): void;
    unsubscribe(fn: ObserverFn<T>): void;
    notify(data: T): void;
  }
  class Store<T> implements Observable<T> {
    private state: T;
    private subscribers: ObserverFn<T>[] = [];
    constructor(initialState: T) {
      this.state = initialState;
    }
    subscribe(fn: ObserverFn<T>) {
      this.subscribers.push(fn); // Добавляем функцию в список подписчиков
    }
    unsubscribe(fn: ObserverFn<T>) {
      const index = this.subscribers.indexOf(fn);
      if (index !== -1) {
        this.subscribers.splice(index, 1); // Удаляем функцию из списка подписчиков
      }
    }
    notify(data: T) {
      this.subscribers.forEach(subscriber => subscriber(data)); // Вызываем все функции-подписчики с переданными данными
    }
    update(newState: T) {
      this.state = newState;
      this.notify(this.state);
    }
  }
  const store = new Store<string>('');
  store.subscribe(console.log);
  store.update('Василий');
  store.update('Пётр');
  store.update('Иван');

//Паттерн Builder
  //todo
  //пример
  type Rule = {
    search: string[],
    replaceTo: string;
  }
  class Corrector {
    constructor(public rules: Rule[] = []) {}
    handle(text: string) {
      return this.rules.reduce((value, rule) => {
        return rule.search.reduce((value, search) => {
          return value.replace(new RegExp(search, 'g'), rule.replaceTo);
        }, value);
      }, text);
    }
  }
  class CorrectorBuilder {
    private corrector: Corrector;
    constructor() {
      this.corrector = new Corrector();
    }
    addRule(search: string | string[], replaceTo: string): CorrectorBuilder {
      const searchArray = Array.isArray(search) ? search : [search];
      this.corrector.rules.push({ search: searchArray, replaceTo });
      return this;
    }
    getResult(): Corrector {
      return this.corrector;
    }
  }
  const builder = new CorrectorBuilder()
    .addRule('жы', 'жи')
    .addRule('шы', 'ши');
  builder.addRule(['твой', 'мой'], 'наш');
  const corrector = builder.getResult();
  console.log(
    corrector.handle('Этот твой кот испортил мой любимый диван! Ну что за глупое жывотное!')
  );

