import { signUp, logIn } from '@src/apis/Users';

class SignUp {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
  }

  init() {
    this.eventTarget.addEventListener('click', (e) => this.clickEvent(e));
  }

  clickEvent(e) {
    if (e.target.closest('.signup')) this.onClickSignUpHandler(e);
    if (e.target.closest('.submit')) this.onClickLogInHandler(e);
  }

  async onClickSignUpHandler(e) {
    // console.log('signup event');

    const id = document.querySelector('#id').value;
    const password = document.querySelector('#password').value;

    const res = await signUp({ id, password });
    if (res) {
      alert('회원가입 성공');
      window.location.href = '/';
    }
  }

  async onClickLogInHandler(e) {
    // console.log('login event');

    const id = document.querySelector('#id').value;
    const password = document.querySelector('#password').value;

    const res = await logIn({ id, password });
    if (res.loginSuccess) {
      alert('로그인 성공');
      window.location.href = '/';
    }
  }
}

export default SignUp;
