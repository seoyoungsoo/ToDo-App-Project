import '@src/components/Todo/styles.css';

class Todo {
  constructor(root) {
    this.element = root;
    // this.onEvent()
  }

  render() {
    return `
    <div class="todo-container">
      <div class="todo-header">
        <div class="header-left">
          <div class="todo-count">1</div>
          <span id="title">해야할 일</span>
        </div>
        <div class="header-right">
          <span id="add">2</span>
          <span id="cancel">3</span>
        </div>
      </div>
    </div>
    `;
  }
}

export default Todo;
