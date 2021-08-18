class Main {
  constructor() {
    this.element = document.createElement('div');
  }

  render() {
    document.body.appendChild(this.element);
    this.element.innerHTML = `hi`;
  }
}

export default Main;
