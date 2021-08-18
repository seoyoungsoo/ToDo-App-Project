import SignUp from '@src/events/SignUp';
import '@src/pages/LogIn/styles.css';

class LogIn {
  constructor() {
    this.eventTarget = document.querySelector('body');
    this.events = new SignUp(this.eventTarget);
    this.events.init();
  }

  render() {
    document.body.innerHTML = `
    <div class="wrap">
      <div class="login">
        <h2>LogIn</h2>
        <div class="login_id">
          <h4>ID</h4>
          <input type="text" name="id" id="id" placeholder="Id">
        </div>
        <div class="login_pw">
          <h4>Password</h4>
          <input type="password" name="password" id="password" placeholder="Password">
        </div>
        <div class="submit">
          <input type="submit" value="로그인">
        </div>
        <div class="signup">
          <input type="submit" value="회원가입">
        </div>
      </div>
    </div>
    `;
  }
}

export default LogIn;
