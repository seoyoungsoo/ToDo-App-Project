import LogIn from '@src/pages/LogIn';

const main = {
  render: () => {
    const loginPage = new LogIn();
    return loginPage.render();
  },
};

main.render();
