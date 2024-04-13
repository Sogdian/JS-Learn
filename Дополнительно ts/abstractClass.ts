abstract class View {
  abstract tag: string;

  protected constructor(public children: Array<View | string>) {
    this.children = children;
  };

  renderChildren() {
    return this.children.map(child => {
      if (typeof child === 'string') {
        return child;
      }

      return child.render();
    }).join('');
  }

  renderHTML(attributes?: Record<string, string>) {
    const attributesString = Object.entries(attributes || {})
      .map(([key, value]) => ` ${key}="${value}"`).join('');

    const tag = this.tag;
    const childrenString = this.renderChildren();

    if (childrenString) {
      return `<${tag}${attributesString}>${childrenString}</${tag}>`;
    }

    return `<${tag}${attributesString} />`;
  }

  abstract render(): void;
}

class Block extends View {
  tag = 'div';
  id?: string;

  constructor(children: Array<View | string>, id?: string) {
    super(children)
    this.id = id;
  }

  render() {
    return this.renderHTML(this.id ? { id: this.id } : undefined);
  }
}

class Picture extends View {
  tag = 'img';
  src: string;
  title: string;

  constructor(src: string, title: string) {
    super([])
    this.src = src;
    this.title = title;
  }

  render() {
    return this.renderHTML({ src: this.src, alt: this.title });
  }
}

const image = new Picture('https://some.ru/logo', 'Какой-то логотип');
const header = new Block([image, 'ООО "Космические аппараты"'], 'Header');

console.log(header.render());
