import Header from '@src/components/Header';

class Main {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'main-container';

    this.header = new Header(this.element);
  }

  render() {
    document.body.appendChild(this.element);
    this.element.innerHTML = `
      ${this.header.render()}
    `;
  }
}

export default Main;
