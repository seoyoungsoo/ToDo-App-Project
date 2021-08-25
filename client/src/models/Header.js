import store from '@src/stores/store';

class HeaderModel {
  constructor(root) {
    this.element = root;
  }

  getState() {
    return store.getState();
  }
}

const headerModel = new HeaderModel();

export default headerModel;
