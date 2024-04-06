class Component {
  content: string;
  protected _tag: string;
  constructor(tag: string, content: string) {
    this._tag = tag;
    this.content = content;
  }
  render() {
    return `<${this._tag}>${this.content}</${this._tag}>`
  }
}

class Button extends Component {
  constructor(content: string) {
    super('button', content);
  }
}

class Link extends Component {
  href: string;
  constructor(content: string, href: string) {
    super('a', content);
    this.href = href;
  }
  render() { //полиморфизм, переопределение базового класса
    return `<${this._tag} href="${this.href}">${this.content}</${this._tag}>`
  }
}

const main = new Link('Главная', 'main.html');
const order = new Button('Сделать заказ');
const page = new Component('div', main.render() + order.render());

const root = document.getElementById('root')

if (root) {
  root.innerHTML = page.render();
}
/* в итоге
<div>
    <a href="main.html">Главная</a>
    <button>Сделать заказ</button>
</div>
*/
