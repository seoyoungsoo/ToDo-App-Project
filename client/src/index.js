import LogIn from '@src/pages/LogIn';
import Main from '@src/pages/Main';
import { isToken } from '@src/libs/token';

const main = {
  render: () => {
    if (!isToken()) {
      const loginPage = new LogIn();
      return loginPage.render();
    }
    const mainPage = new Main();
    return mainPage.render();
  },
};

main.render();
