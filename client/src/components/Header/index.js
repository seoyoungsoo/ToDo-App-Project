import HeaderEvent from '@src/events/Header';
import '@src/components/Header/styles.css';

class Header {
  constructor(root) {
    this.element = root;
    this.onEvent();
  }

  onEvent() {
    new HeaderEvent(this.element);
  }

  render() {
    return `
    <div class="header">
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <div class="option">
        <span id="menu">메뉴</span>
        <span id="logout">로그아웃</span>
      </div>
    </div>
    `;
  }
}

export default Header;
