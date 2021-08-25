import { removeToken } from '@src/libs/token';

class HeaderEvent {
  constructor(target, state) {
    this.eventTarget = target;
    this.state = state;
  }

  init() {
    this.eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('#menu')) this.onClickMenuHandler(e);
    if (e.target.closest('#logout')) this.onClickLogoutHandler(e);
  }

  onClickMenuHandler(e) {
    alert('개발 중');
  }

  onClickLogoutHandler(e) {
    removeToken();
    window.location.href = '/';
  }
}

export default HeaderEvent;
