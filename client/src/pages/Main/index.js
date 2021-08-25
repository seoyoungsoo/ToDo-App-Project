import Header from '@src/components/Header';
import Todo from '@src/components/Todo';
import '@src/pages/Main/styles.css';

class Main {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'main-container';

    this.header = new Header(this.element);
    this.Todo = new Todo(this.element);
  }

  render() {
    document.body.appendChild(this.element);
    this.element.innerHTML = `
      ${this.header.render()}
      <div class="contents">
        ${this.Todo.render()}
        ${this.Todo.render()}
        ${this.Todo.render()}
      </div>
    `;
  }
}

export default Main;
