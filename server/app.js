const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const port = 8000;

class Server {
  constructor() {
    const app = express();
    this.app = app;
  }

  setRoute() {}

  setMiddleware() {}

  listen() {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`app listening at http://loaalhost:${port}`);
    });
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();
